'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { skillCategories } from '../data/portfolioData';
import {
  Database,
  Globe,
  Layers,
  Cpu,
  Server,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { lang } = usePortfolio();

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Cpu className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'تسلط و مهارت‌های فنی' : 'Technical Proficiencies'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'تخصص‌ها و ابزارهای مهندسی' : 'Skills & Technical Toolkit'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'تخصص متمرکز در پلتفرم دات‌نت، معماری پیازی، تحلیل دیتابیس و طراحی سیستم‌های مدرن'
              : 'Focused proficiency in .NET ecosystem, Onion Architecture, Database Modeling & Enterprise Systems'}
          </p>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {cat.id === 'backend' && <Server className="w-5 h-5" />}
                      {cat.id === 'database' && <Database className="w-5 h-5" />}
                      {cat.id === 'frontend' && <Globe className="w-5 h-5" />}
                      {cat.id === 'solutions' && <Layers className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {cat.title[lang]}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.subtitle[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Progress / List */}
                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </span>
                          {skill.level === 100 && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white shadow-sm">
                              {lang === 'fa' ? 'تسلط ۱۰۰٪' : 'Mastery 100%'}
                            </span>
                          )}
                          {skill.highlight && skill.level !== 100 && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Core
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-teal-400 to-cyan-400"
                        />
                      </div>
                    </div>
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
