'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Mail,
  Linkedin,
  Send,
  Instagram,
  Phone,
  MessageCircle,
  Sparkles,
  Award,
  GraduationCap,
  MapPin,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t, dir } = usePortfolio();
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = personalInfo.headlines[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [headlines.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Standalone Portrait Avatar - Positioned prominently on the RIGHT in RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`lg:col-span-5 flex justify-center ${
              dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'
            } order-first`}
          >
            {/* Standalone Portrait with Multi-tier Luminous Glow Frame */}
            <div className="relative group">
              {/* Ambient Glow Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-cyan-500/25 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />

              {/* Luminous Gradient Frame */}
              <div className="w-64 h-[320px] sm:w-72 sm:h-[370px] md:w-80 md:h-[420px] lg:w-[350px] lg:h-[450px] rounded-3xl p-[3px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-glow-avatar transition-all duration-500 hover:scale-[1.02]">
                <div className="w-full h-full rounded-[21px] overflow-hidden bg-slate-900 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={personalInfo.avatar || '/avatar.jpg'}
                    alt={lang === 'fa' ? personalInfo.nameFa : personalInfo.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`lg:col-span-7 flex flex-col items-start text-start space-y-6 ${
              dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-glow backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>{personalInfo.title[lang]}</span>
            </div>

            {/* Name Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight break-words">
                <span className="text-slate-900 dark:text-white">
                  {lang === 'fa' ? 'سلام، من ' : "Hi, I'm "}
                </span>
                <span className="text-gradient-emerald">
                  {lang === 'fa' ? personalInfo.nameFa : personalInfo.name}
                </span>
                <span className="text-slate-900 dark:text-white">
                  {lang === 'fa' ? ' هستم' : ''}
                </span>
              </h1>
            </div>

            {/* Dynamic Rotating Headline with Framer Motion AnimatePresence */}
            <div className="min-h-[3.75rem] sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${lang}-${headlineIndex}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-snug"
                >
                  <span className="text-emerald-500 font-bold">&gt; </span>
                  {headlines[headlineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Short Bio Summary */}
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.summary[lang]}
            </p>

            {/* Professional Highlight Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{personalInfo.location[lang]}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 font-bold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{lang === 'fa' ? 'کارشناسی ارشد کامپیوتر' : 'M.Sc. Computer Eng.'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'fa' ? 'نظام صنفی رایانه‌ای' : 'NSR Consultant'}</span>
              </span>
            </div>

            {/* Call To Action Buttons - Clean Mobile Wrap & Stack */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-glow transition-all hover:scale-105 active:scale-95"
              >
                <span>{t.viewProjects[lang]}</span>
                <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{t.contactMe[lang]}</span>
              </a>
            </div>

            {/* Quick Social & Contact Icons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-500 shrink-0">
                {lang === 'fa' ? 'شبکه‌های ارتباطی:' : 'Connect:'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {personalInfo.socials.map((social) => {
                  const IconComponent =
                    social.platform === 'linkedin' ? Linkedin :
                    social.platform === 'telegram' ? Send :
                    social.platform === 'whatsapp' ? MessageCircle :
                    social.platform === 'instagram' ? Instagram :
                    social.platform === 'phone' || social.platform === 'sms' ? Phone : Mail;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group relative min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-gradient-to-tr hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] active:scale-95"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
