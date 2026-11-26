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
  Award,
  GraduationCap,
  MapPin,
} from 'lucide-react';

const getSocialBrandHoverClasses = (platform: string): string => {
  switch (platform) {
    case 'telegram':
      return 'hover:bg-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_18px_rgba(34,158,217,0.55)] hover:text-white dark:hover:bg-[#229ED9] dark:hover:border-[#229ED9] dark:hover:text-white dark:hover:border-[#229ED9]';
    case 'instagram':
      return 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-rose-500 hover:shadow-[0_0_18px_rgba(225,48,108,0.55)] hover:text-white dark:hover:border-rose-500 dark:hover:text-white dark:hover:border-rose-500';
    case 'linkedin':
      return 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_18px_rgba(10,102,194,0.55)] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:border-[#0A66C2] dark:hover:text-white dark:hover:border-[#0A66C2]';
    case 'whatsapp':
      return 'hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_18px_rgba(37,211,102,0.55)] hover:text-white dark:hover:bg-[#25D366] dark:hover:border-[#25D366] dark:hover:text-white dark:hover:border-[#25D366]';
    case 'email':
    case 'gmail':
      return 'hover:bg-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_18px_rgba(234,67,53,0.55)] hover:text-white dark:hover:bg-[#EA4335] dark:hover:border-[#EA4335] dark:hover:text-white dark:hover:border-[#EA4335]';
    case 'phone':
    case 'sms':
    default:
      return 'hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_18px_rgba(16,185,129,0.55)] hover:text-white dark:hover:bg-emerald-600 dark:hover:border-emerald-500 dark:hover:text-white dark:hover:border-emerald-500';
  }
};

const getSocialMeta = (platform: string, lang: 'fa' | 'en') => {
  switch (platform) {
    case 'whatsapp':
      return {
        name: lang === 'fa' ? 'واتس‌اپ' : 'WhatsApp',
        icon: MessageCircle,
        badgeBg: 'bg-[#25D366]/10 dark:bg-[#25D366]/15',
        badgeText: 'text-[#25D366]',
        badgeBorder: 'border-[#25D366]/30',
        hoverGlow: 'hover:border-[#25D366]/50 dark:hover:border-[#25D366]/50 hover:shadow-[0_0_16px_rgba(37,211,102,0.25)]',
      };
    case 'telegram':
      return {
        name: lang === 'fa' ? 'تلگرام' : 'Telegram',
        icon: Send,
        badgeBg: 'bg-[#229ED9]/10 dark:bg-[#229ED9]/15',
        badgeText: 'text-[#229ED9]',
        badgeBorder: 'border-[#229ED9]/30',
        hoverGlow: 'hover:border-[#229ED9]/50 dark:hover:border-[#229ED9]/50 hover:shadow-[0_0_16px_rgba(34,158,217,0.25)]',
      };
    case 'linkedin':
      return {
        name: lang === 'fa' ? 'لینکدین' : 'LinkedIn',
        icon: Linkedin,
        badgeBg: 'bg-[#0A66C2]/10 dark:bg-[#0A66C2]/15',
        badgeText: 'text-[#0A66C2]',
        badgeBorder: 'border-[#0A66C2]/30',
        hoverGlow: 'hover:border-[#0A66C2]/50 dark:hover:border-[#0A66C2]/50 hover:shadow-[0_0_16px_rgba(10,102,194,0.25)]',
      };
    case 'instagram':
      return {
        name: lang === 'fa' ? 'اینستاگرام' : 'Instagram',
        icon: Instagram,
        badgeBg: 'bg-rose-500/10 dark:bg-rose-500/15',
        badgeText: 'text-rose-500',
        badgeBorder: 'border-rose-500/30',
        hoverGlow: 'hover:border-rose-500/50 dark:hover:border-rose-500/50 hover:shadow-[0_0_16px_rgba(225,48,108,0.25)]',
      };
    case 'email':
    case 'gmail':
      return {
        name: lang === 'fa' ? 'جیمیل' : 'Gmail',
        icon: Mail,
        badgeBg: 'bg-[#EA4335]/10 dark:bg-[#EA4335]/15',
        badgeText: 'text-[#EA4335]',
        badgeBorder: 'border-[#EA4335]/30',
        hoverGlow: 'hover:border-[#EA4335]/50 dark:hover:border-[#EA4335]/50 hover:shadow-[0_0_16px_rgba(234,67,53,0.25)]',
      };
    case 'phone':
    case 'sms':
    default:
      return {
        name: lang === 'fa' ? 'پیامک و تماس' : 'SMS & Call',
        icon: Phone,
        badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
        badgeText: 'text-emerald-500 dark:text-emerald-400',
        badgeBorder: 'border-emerald-500/30',
        hoverGlow: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]',
      };
  }
};

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

            {/* Quick Social & Contact Badges - Matching Contact Direct Channels Box Style */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-500">
                {lang === 'fa' ? 'شبکه‌های ارتباطی:' : 'Communication Channels:'}
              </span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {personalInfo.socials.map((social) => {
                  const meta = getSocialMeta(social.platform, lang);
                  const IconComponent = meta.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group relative flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${meta.hoverGlow}`}
                      aria-label={meta.name}
                      title={`${meta.name}: ${social.handle}`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${meta.badgeBg} ${meta.badgeText} ${meta.badgeBorder}`}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {meta.name}
                      </span>
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
