'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { projects } from '../data/portfolioData';
import {
  FolderGit2,
  ExternalLink,
  Info,
  Monitor,
  Globe,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { lang, t, setSelectedProject } = usePortfolio();
  const [filter, setFilter] = useState<'all' | 'web' | 'desktop'>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <FolderGit2 className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'نمونه کارهای اجرایی' : 'Featured Works'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'پروژه‌های شاخص و پیاده‌سازی شده' : 'Featured Projects & Systems'}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'سامانه‌های واقعی تحت وب، معماری‌های مبتنی بر ASP.NET Core و نرم‌افزارهای یکپارچه'
              : 'Real-world web platforms, robust ASP.NET Core architectures, and enterprise applications'}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center ${
              filter === 'all'
                ? 'bg-emerald-500 text-white shadow-glow'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-emerald-500'
            }`}
          >
            {t.allCategories[lang]}
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              filter === 'web'
                ? 'bg-emerald-500 text-white shadow-glow'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-emerald-500'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.webProjects[lang]}</span>
          </button>
          <button
            onClick={() => setFilter('desktop')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              filter === 'desktop'
                ? 'bg-emerald-500 text-white shadow-glow'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-emerald-500'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.desktopProjects[lang]}</span>
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group border shadow-sm"
              >
                <div>
                  {/* Project Card Header Visual Banner */}
                  <div
                    className={`h-40 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between border-b border-slate-200/50 dark:border-slate-800/80 relative overflow-hidden`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900/80 text-emerald-400 border border-slate-700/80 backdrop-blur-sm">
                        {project.categoryLabel[lang]}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title[lang]}
                      </h3>
                      {project.client && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {project.client[lang]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.shortDesc[lang]}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-200/50 dark:border-slate-800/60 mt-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 p-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{t.projectDetails[lang]}</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all hover:scale-105 shadow-sm"
                    >
                      <span>{t.viewLive[lang]}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
