'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Settings, Moon, Sun, Check, X } from 'lucide-react';

export const MobileSettingsModal: React.FC = () => {
  const { lang, setLang, theme, setTheme, isSettingsOpen, setIsSettingsOpen } = usePortfolio();

  // Show settings modal automatically on mobile viewports (< 768px) upon entering the site
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsSettingsOpen(true);
    }
  }, [setIsSettingsOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSettingsOpen) {
        setIsSettingsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, setIsSettingsOpen]);

  // Lock body scroll when settings modal is open
  useEffect(() => {
    if (isSettingsOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isSettingsOpen]);

  return (
    <AnimatePresence>
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSettingsOpen(false)}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-settings-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden z-10"
          >
            {/* Top ambient highlight line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

            {/* Close button */}
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-4 end-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={lang === 'fa' ? 'بستن' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col items-center text-center mt-2 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 flex items-center justify-center mb-3 shadow-glow">
                <Settings className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
              </div>
              <h3 id="mobile-settings-title" className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
                {lang === 'fa' ? 'تنظیمات سایت' : 'Site Settings'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs leading-relaxed">
                {lang === 'fa'
                  ? 'پوسته و زبان دلخواه خود را برای تجربه بهتر انتخاب کنید:'
                  : 'Select your preferred theme and language for the best experience:'}
              </p>
            </div>

            <div className="space-y-5">
              {/* Theme Selection */}
              <div>
                <span className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {lang === 'fa' ? 'حالت نمایش (پوسته)' : 'Display Theme'}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {/* Dark Theme Option */}
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`p-3.5 rounded-2xl border text-start flex items-center justify-between transition-all ${
                      theme === 'dark'
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-glow'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-2 rounded-xl shrink-0 ${
                          theme === 'dark'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Moon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold truncate">
                          {lang === 'fa' ? 'تاریک' : 'Dark'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {lang === 'fa' ? 'پیش‌فرض' : 'Default'}
                        </div>
                      </div>
                    </div>
                    {theme === 'dark' && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                  </button>

                  {/* Light Theme Option */}
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`p-3.5 rounded-2xl border text-start flex items-center justify-between transition-all ${
                      theme === 'light'
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-glow'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-2 rounded-xl shrink-0 ${
                          theme === 'light'
                            ? 'bg-emerald-500/20 text-emerald-600'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Sun className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold truncate">
                          {lang === 'fa' ? 'روشن' : 'Light'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {lang === 'fa' ? 'روز' : 'Day mode'}
                        </div>
                      </div>
                    </div>
                    {theme === 'light' && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                  </button>
                </div>
              </div>

              {/* Language Selection */}
              <div>
                <span className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {lang === 'fa' ? 'زبان محتوا' : 'Language'}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {/* Persian Option */}
                  <button
                    type="button"
                    onClick={() => setLang('fa')}
                    className={`p-3.5 rounded-2xl border text-start flex items-center justify-between transition-all ${
                      lang === 'fa'
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-glow'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs ${
                          lang === 'fa'
                            ? 'bg-emerald-500/20 text-emerald-500 dark:text-emerald-400'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                        }`}
                      >
                        فا
                      </div>
                      <div>
                        <div className="text-xs font-bold truncate">فارسی</div>
                        <div className="text-[10px] text-slate-400">پیش‌فرض</div>
                      </div>
                    </div>
                    {lang === 'fa' && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                  </button>

                  {/* English Option */}
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`p-3.5 rounded-2xl border text-start flex items-center justify-between transition-all ${
                      lang === 'en'
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-glow'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs ${
                          lang === 'en'
                            ? 'bg-emerald-500/20 text-emerald-500 dark:text-emerald-400'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                        }`}
                      >
                        EN
                      </div>
                      <div>
                        <div className="text-xs font-bold truncate">English</div>
                        <div className="text-[10px] text-slate-400">Global</div>
                      </div>
                    </div>
                    {lang === 'en' && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                  </button>
                </div>
              </div>

              {/* Confirm & Continue CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Check className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'تأیید و ادامه' : 'Confirm & Continue'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
