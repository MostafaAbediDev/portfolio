'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { Language, Theme, ProjectItem, UIStrings } from '../types/portfolio';
import { uiStrings } from '../data/portfolioData';

interface PortfolioContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (id: string, suppressDurationMs?: number) => void;
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  dir: 'rtl' | 'ltr';
  t: UIStrings;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('fa');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSectionState] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const suppressSpyUntilRef = useRef<number>(0);
  const targetSectionRef = useRef<string | null>(null);

  const setActiveSection = useCallback((id: string, suppressDurationMs = 1500) => {
    setActiveSectionState(id);
    targetSectionRef.current = id;
    if (suppressDurationMs > 0) {
      suppressSpyUntilRef.current = Date.now() + suppressDurationMs;
    }
  }, []);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang') as Language | null;
      if (savedLang === 'fa' || savedLang === 'en') {
        setLang(savedLang);
      }
      const savedTheme = localStorage.getItem('portfolio_theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  // Sync theme with html class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Sync lang and dir with html element
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
  }, [lang]);

  // Optimized Scroll spy to update activeSection automatically as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'publications', 'certificates', 'contact'];
    let rafId: number | null = null;

    const checkActiveSection = () => {
      // Check if user has scrolled near bottom of page
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;

      // If manual navigation was triggered, suppress scroll-spy overriding until target is reached
      if (Date.now() < suppressSpyUntilRef.current && targetSectionRef.current) {
        const targetId = targetSectionRef.current;
        let reached = false;

        if (targetId === 'hero' && window.scrollY < 80) {
          reached = true;
        } else if (targetId === 'contact' && isNearBottom) {
          reached = true;
        } else {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            // Target is aligned near viewport reading zone (within 50px tolerance)
            if (rect.top <= 160 && rect.bottom >= 120) {
              reached = true;
            }
          }
        }

        if (reached) {
          suppressSpyUntilRef.current = 0;
          targetSectionRef.current = null;
        } else {
          return;
        }
      }

      if (isNearBottom) {
        const lastSection = sectionIds[sectionIds.length - 1];
        setActiveSectionState((prev) => (prev === lastSection ? prev : lastSection));
        return;
      }

      // If at the very top
      if (window.scrollY < 80) {
        setActiveSectionState((prev) => (prev === 'hero' ? prev : 'hero'));
        return;
      }

      // Viewport reading line (160px below header) using getBoundingClientRect
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            const currentId = sectionIds[i];
            setActiveSectionState((prev) => (prev === currentId ? prev : currentId));
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        checkActiveSection();
        rafId = null;
      });
    };

    // If user takes manual wheel or touch control, release click suppression immediately
    const handleUserInteraction = () => {
      suppressSpyUntilRef.current = 0;
      targetSectionRef.current = null;
    };

    const handleScrollEnd = () => {
      suppressSpyUntilRef.current = 0;
      targetSectionRef.current = null;
      checkActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });

    checkActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {}
  };

  const toggleLang = () => {
    handleSetLang(lang === 'fa' ? 'en' : 'fa');
  };

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('portfolio_theme', newTheme);
    } catch {}
  };

  const toggleTheme = () => {
    handleSetTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const dir = lang === 'fa' ? 'rtl' : 'ltr';

  return (
    <PortfolioContext.Provider
      value={{
        lang,
        setLang: handleSetLang,
        toggleLang,
        theme,
        setTheme: handleSetTheme,
        toggleTheme,
        activeSection,
        setActiveSection,
        selectedProject,
        setSelectedProject,
        dir,
        t: uiStrings,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
