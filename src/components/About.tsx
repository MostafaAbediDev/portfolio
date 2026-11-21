'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo, educationList, certificates } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const About: React.FC = () => {
  const { lang } = usePortfolio();

  const nsrLicense = certificates.find((c) => c.type === 'license');

  return (
    <section id="about" className="py-20 relative">
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
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'شناخت بیشتر' : 'Get to know me'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'درباره من و مسیر حرفه‌ای' : 'About Me & Professional Path'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'توسعه‌دهنده‌ای مشتاق به پیاده‌سازی معماری‌های مستحکم، کدهای تمیز و سامانه‌های مقیاس‌پذیر'
              : 'Passionate developer dedicated to robust architectures, clean code, and scalable enterprise systems'}
          </p>
        </motion.div>

        {/* Bio Card & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-emerald-500 inline-block" />
                {lang === 'fa' ? 'خلاصه سوابق و رویکرد مهندسی' : 'Background & Engineering Philosophy'}
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {personalInfo.bio[lang]}
              </p>

              {/* Personal Quick Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      {lang === 'fa' ? 'محل سکونت:' : 'Location:'}
                    </strong>{' '}
                    {personalInfo.location[lang]}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">
                      {lang === 'fa' ? 'زادروز:' : 'Birth Date:'}
                    </strong>{' '}
                    {personalInfo.birthDate[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* NSR License Banner */}
            {nsrLicense && (
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/25 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500 text-white shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {nsrLicense.title[lang]}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {nsrLicense.validUntil ? nsrLicense.validUntil[lang] : ''}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Key Metric Counters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.id}
                className="glass-card glass-card-hover rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between text-center shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-emerald">
                  {stat.value}
                </div>
                <div className="mt-2">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {stat.label[lang]}
                  </div>
                  {stat.detail && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {stat.detail[lang]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Educational Degrees */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-500" />
            <span>{lang === 'fa' ? 'سوابق تحصیلی و دانشگاهی' : 'Academic Education'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border-s-4 border-s-emerald-500 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                      {edu.degree[lang]}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.field[lang]}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {edu.institution[lang]}
                    </p>
                  </div>
                  <div className="text-end shrink-0">
                    <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                      {edu.period[lang]}
                    </span>
                    <div className="mt-2 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.status[lang]}
                  </div>
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {edu.highlights[lang].map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
