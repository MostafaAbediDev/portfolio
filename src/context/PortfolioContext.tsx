'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  setActiveSection: (id: string) => void;
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  dir: 'rtl' | 'ltr';
  t: UIStrings;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('fa');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

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

  // Scroll spy to update activeSection automatically as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'publications', 'certificates', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
