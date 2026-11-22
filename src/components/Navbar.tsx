'use client';

import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { navItems, personalInfo } from '../data/portfolioData';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, theme, toggleTheme, activeSection, setActiveSection } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Modern Full-Width Top Bar Header */}
      <header
        className={`w-full fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/85 dark:bg-[#070b12]/90 backdrop-blur-2xl border-b ${
          isScrolled
            ? 'border-emerald-500/30 shadow-md shadow-emerald-950/10 dark:shadow-black/40 py-0'
            : 'border-slate-200/80 dark:border-slate-800/80 py-0'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 h-16 sm:h-[72px] flex items-center justify-between gap-2">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={() => {
              setActiveSection('hero');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0 py-1"
            aria-label={lang === 'fa' ? personalInfo.nameFa : personalInfo.name}
          >
            {/* Stylish Developer Emblem Logo */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-[1.5px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-sm group-hover:shadow-glow group-hover:scale-105 transition-all duration-300 shrink-0">
              <div className="w-full h-full bg-slate-900/95 dark:bg-[#070b13] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/25 transition-colors" />
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ direction: 'ltr' }}
                >
                  <defs>
                    <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="navTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#a7f3d0" />
                    </linearGradient>
                  </defs>
                  {/* Subtle background glow circle */}
                  <circle cx="20" cy="20" r="13" fill="#10b981" fillOpacity="0.14" />
                  {/* Left code bracket */}
                  <path
                    d="M7 13.5L2 20L7 26.5"
                    stroke="url(#navLogoGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Right code bracket */}
                  <path
                    d="M33 13.5L38 20L33 26.5"
                    stroke="url(#navLogoGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Stylized Monogram 'MA' */}
                  <text
                    x="20"
                    y="20.5"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="url(#navTextGrad)"
                    fontSize="11"
                    fontWeight="900"
                    fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, monospace, sans-serif"
                    letterSpacing="0.2px"
                    style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
                  >
                    MA
                  </text>
                  {/* Accent terminal indicator */}
                  <circle cx="27.5" cy="12" r="1.3" fill="#34d399" />
                </svg>
              </div>
            </div>

            {/* Prominent Brand Name */}
            <span className="text-sm sm:text-base font-heading font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors truncate">
              {lang === 'fa' ? personalInfo.nameFa : personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/70 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-sm font-bold shadow-glow'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language, Theme, Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="min-h-[40px] sm:min-h-[42px] px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-300/80 dark:border-slate-700/80 hover:border-emerald-500/50 text-slate-700 dark:text-slate-200 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center gap-1 sm:gap-1.5"
              title={lang === 'fa' ? 'Switch to English' : 'تغییر به زبان فارسی'}
              aria-label={lang === 'fa' ? 'Switch to English' : 'تغییر به زبان فارسی'}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{lang === 'fa' ? 'EN' : 'فا'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="min-h-[40px] min-w-[40px] sm:min-h-[42px] sm:min-w-[42px] p-2 rounded-full text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700/80 hover:border-emerald-500/50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center shrink-0"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[40px] min-w-[40px] sm:min-h-[42px] sm:min-w-[42px] p-2 rounded-full text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/60 hover:border-emerald-500/50 transition-colors flex items-center justify-center active:scale-95 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5 text-emerald-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu Drawer (Sibling to Header for clean z-index & WebKit fixed support) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 sm:top-[72px] inset-x-0 w-full max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white dark:bg-[#070b13] border-b border-slate-200 dark:border-slate-800 shadow-2xl p-4 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 pb-8">
          <div className="max-w-md mx-auto flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold shadow-glow'
                    : 'text-slate-800 dark:text-slate-100 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {item.label[lang]}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {lang === 'fa' ? 'تنظیمات زبان و پوسته' : 'Language & Display Mode'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="min-h-[44px] px-3.5 py-2 text-xs rounded-xl font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 active:scale-95"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'English' : 'فارسی'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="min-h-[44px] min-w-[44px] p-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 flex items-center justify-center active:scale-95"
                  aria-label="Toggle theme in mobile menu"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

