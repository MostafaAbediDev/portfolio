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
    <footer className="relative bg-slate-900/80 dark:bg-[#05080e] pt-12 pb-10 border-t border-slate-200/80 dark:border-slate-800/60 overflow-hidden">
      {/* Top subtle emerald gradient highlight line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-emerald-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Clean Back To Top Pill */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold glass-card border border-slate-300/80 dark:border-slate-800 hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md group mb-8"
          aria-label={t.backToTop[lang]}
        >
          <span>{t.backToTop[lang]}</span>
          <ArrowUp className="w-4 h-4 text-emerald-500 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Center: Sleek Polished Designed & Developed Text */}
        <div className="w-full flex justify-center items-center pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-400 dark:text-slate-400 flex items-center justify-center gap-2">
            <span>
              {lang === 'fa' ? 'طراحی و توسعه توسط' : 'Designed & Developed by'}
            </span>
            <span className="font-heading font-extrabold bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
              {lang === 'fa' ? 'مصطفی عابدی' : 'Mostafa Abedi'}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
