'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { certificates } from '../data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';

export const Certificates: React.FC = () => {
  const { lang } = usePortfolio();

  return (
    <section id="certificates" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
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
            <Award className="w-3 h-3 text-emerald-500" />
            <span>{lang === 'fa' ? 'اعتبار و صلاحیت‌های حرفه‌ای' : 'Credentials & Licenses'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'fa' ? 'مدارک، مجوزها و دوره‌های تخصصی' : 'Certificates & Professional Licenses'}
          </h2>
          {/* <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'پروانه نظام صنفی رایانه‌ای کشور و گواهینامه‌های تخصصی توسعه نرم‌افزار'
              : 'Iranian Computer Guild Organization license and technical education certificates'}
          </p> */}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border shadow-sm ${
                cert.type === 'license'
                  ? 'border-emerald-500/50 shadow-glow md:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-500/10 to-transparent'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      cert.type === 'license'
                        ? 'bg-emerald-500 text-white shadow-glow'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    }`}
                  >
                    {cert.type === 'license' ? (
                      <ShieldCheck className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                    {cert.badgeText[lang]}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title[lang]}
                </h3>

                {/* Issuer */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {cert.issuer[lang]}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {cert.typeLabel[lang]}
                </span>
                {cert.validUntil && (
                  <span className="text-slate-500 font-mono">
                    {cert.validUntil[lang]}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
