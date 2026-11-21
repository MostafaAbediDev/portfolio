'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { publications } from '../data/portfolioData';
import {
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
} from 'lucide-react';

export const Publications: React.FC = () => {
  const { lang, t } = usePortfolio();

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <BookOpen className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'پژوهش و انتشارات علمی' : 'Scientific Research & Papers'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'مقالات پژوهشی و علمی' : 'Research Publications'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'مشارکت در پژوهش‌های نوین محاسبات توزیع‌شده، هوش محاسباتی و اینترنت اشیاء'
              : 'Contributing to advancements in Distributed Computing, Computational Intelligence & IoT'}
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden shadow-sm"
            >
              {/* Background Glow */}
              <div className="absolute top-0 end-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Journal & Date Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                      {lang === 'fa' ? 'مقاله علمی پژوهشی رسمی' : 'Peer-Reviewed Journal Paper'}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                      {pub.journal[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{pub.date[lang]}</span>
                  </div>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {pub.title[lang]}
                </h3>

                {/* Abstract */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pub.abstract[lang]}
                </p>

                {/* Keywords Chips */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {lang === 'fa' ? 'واژگان کلیدی:' : 'Keywords:'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords[lang].map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span>{lang === 'fa' ? 'نمایه‌شده در پایگاه استنادی سیویلیکا' : 'Indexed in Civilica Citation Database'}</span>
                  </div>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-glow transition-all hover:scale-105"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t.readPublication[lang]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
