'use client';

import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, setActiveSection } = usePortfolio();

  const scrollToTop = () => {
    setActiveSection('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900/80 dark:bg-[#05080e] py-12 border-t border-slate-200/80 dark:border-slate-800/60 overflow-hidden">
      {/* Top subtle emerald gradient highlight line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-emerald-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Clean Back To Top Pill */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold glass-card border border-slate-300/80 dark:border-slate-800 hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md group mb-8"
          aria-label={t.backToTop[lang]}
        >
          <span>{t.backToTop[lang]}</span>
          <ArrowUp className="w-4 h-4 text-emerald-500 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Realigned Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm">
          {/* Designed & Developed Notice - Right in RTL (start) */}
          <p className="font-medium text-slate-400 dark:text-slate-400 text-center sm:text-start">
            {lang === 'fa' ? 'طراحی و توسعه توسط مصطفی عابدی' : 'Designed & Developed by Mostafa Abedi'}
          </p>

          {/* Bottom Copyright Notice - Left in RTL (end) */}
          <p className="text-slate-500 dark:text-slate-500 font-medium text-center sm:text-end">
            {lang === 'fa'
              ? '© 2026 مصطفی عابدی. تمامی حقوق محفوظ است.'
              : '© 2026 Mostafa Abedi. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
