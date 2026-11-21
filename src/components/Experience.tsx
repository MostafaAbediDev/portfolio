'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang } = usePortfolio();

  return (
    <section id="experience" className="py-20 relative">
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
            <Briefcase className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'تجربه و سوابق کاری' : 'Career Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'سوابق حرفه‌ای و شغلی' : 'Work Experience'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'مشارکت موثر در تیم‌های مهندسی نرم‌افزار، توسعه محصولات واقعی و سیستم‌های سازمانی'
              : 'Proven track record building enterprise software, real-world platforms, and scalable services'}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-s-2 border-emerald-500/30 ms-2 sm:ms-4 md:ms-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative ps-4 sm:ps-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -start-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#090d16] group-hover:scale-125 transition-transform shadow-sm" />

              {/* Main Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-8 shadow-sm">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role[lang]}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-glow">
                          {lang === 'fa' ? 'مشغول به کار' : 'Current Role'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company[lang]}</span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{exp.period[lang]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.description[lang]}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    {lang === 'fa' ? 'دستاوردهای کلیدی و مسئولیت‌ها:' : 'Key Achievements & Deliverables:'}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements[lang].map((item, achievementIdx) => (
                      <li key={achievementIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack Pills */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 me-2">
                    {lang === 'fa' ? 'تکنولوژی‌های مورد استفاده:' : 'Tech Stack:'}
                  </span>
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
