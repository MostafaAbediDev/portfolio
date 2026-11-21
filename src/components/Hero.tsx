'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Send,
  Instagram,
  Phone,
  MessageCircle,
  Code2,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-start space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-glow backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>{personalInfo.title[lang]}</span>
            </div>

            {/* Name Heading with Profile Chip on Mobile */}
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

            {/* Call To Action Buttons - Clean Mobile Wrap & Stack */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-glow transition-all hover:scale-105 active:scale-95"
              >
                <span>{t.viewProjects[lang]}</span>
                <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rtl:-scale-x-100' : ''}`} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{t.contactMe[lang]}</span>
              </a>

              <a
                href={personalInfo.resumeUrl || '/Mostafa-Abedi-Resume.pdf'}
                download="Mostafa-Abedi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadCv[lang]}</span>
              </a>
            </div>

            {/* Mobile-Only Portrait Highlight Chip */}
            <div className="lg:hidden flex items-center gap-3 p-2.5 rounded-2xl glass-card border border-emerald-500/25 shadow-glow w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-sm shrink-0">
                <div className="w-full h-full rounded-[10px] overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={personalInfo.avatar || '/avatar.jpg'}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="text-start min-w-0 flex-1">
                <div className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
                  <span>{lang === 'fa' ? personalInfo.nameFa : personalInfo.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse glow-dot shrink-0" />
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 truncate">
                  {lang === 'fa' ? 'توسعه‌دهنده تخصصی ASP.NET و پایگاه داده' : 'ASP.NET & Database Specialist'}
                </div>
              </div>
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
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500 hover:text-white text-slate-600 dark:text-slate-300 transition-all hover:scale-110 shadow-sm"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Enhanced Prominent Portrait Avatar & Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6 w-full"
          >
            {/* Prominent High-Resolution Developer Showcase Card */}
            <div className="w-full max-w-sm sm:max-w-md glass-card rounded-3xl p-4 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
              {/* Subtle ambient light aura */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Large, Clear Portrait Photo with Gradient Glow Frame */}
              <div className="relative mb-6 w-full flex justify-center">
                <div className="w-52 h-[260px] sm:w-72 sm:h-[360px] rounded-3xl p-[3px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-glow-avatar transition-all duration-500 hover:scale-[1.02] group">
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

                {/* Live Availability Status Chip */}
                <div className="absolute -bottom-3 inset-x-0 mx-auto w-fit max-w-[92%] flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border border-emerald-500/40 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse glow-dot shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-300 truncate">
                    {lang === 'fa' ? 'فعال و آماده همکاری سازمانی' : 'Available for High-Impact Roles'}
                  </span>
                </div>
              </div>

              {/* Profile Narrative & Badges */}
              <div className="mt-2 w-full">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {lang === 'fa' ? personalInfo.nameFa : personalInfo.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  {lang === 'fa' ? 'توسعه‌دهنده تخصصی ASP.NET Core و معماری نرم‌افزار' : 'Specialized ASP.NET Core & Architecture Developer'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    {personalInfo.location[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                    <GraduationCap className="w-3 h-3" />
                    GPA 18.76
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium">
                    <Award className="w-3 h-3" />
                    {lang === 'fa' ? 'نظام صنفی رایانه‌ای' : 'NSR Consultant'}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive C# Code Editor Card */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-100 transition duration-1000"></div>

              {/* Glass Code Editor Mockup */}
              <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-slate-700/50">
                {/* Editor Header Bar */}
                <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MostafaAbedi.cs</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400/90 font-semibold">ASP.NET Core</div>
                </div>

                {/* Editor Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto text-left" dir="ltr">
                  <div>
                    <span className="text-purple-400">namespace</span>{' '}
                    <span className="text-cyan-300">Portfolio.CleanArchitecture</span>;
                  </div>
                  <div className="pt-1">
                    <span className="text-purple-400">public class</span>{' '}
                    <span className="text-amber-300">SeniorBackendDeveloper</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">{'// Personal Identity'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">public string</span> Name =&gt;{' '}
                    <span className="text-emerald-300">{`"${personalInfo.name}"`}</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">public string</span> Location =&gt;{' '}
                    <span className="text-emerald-300">{'"Shiraz, Iran"'}</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">public string[]</span> CoreStack =&gt; [
                  </div>
                  <div className="pl-8 text-emerald-300">
                    {'"ASP.NET Core", "C#", "SQL Server",'}
                    <br />
                    {'"Onion Architecture", "REST APIs"'}
                  </div>
                  <div className="pl-4">];</div>
                  <div className="pl-4 pt-1">
                    <span className="text-blue-400">public async Task</span>{' '}
                    <span className="text-yellow-300">DeliverHighQualitySolutionAsync</span>()
                  </div>
                  <div className="pl-4">{'{'}</div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-purple-400">await</span> DatabaseAnalysis.OptimizeAsync();<br />
                    <span className="text-purple-400">return</span> Status.ScaleWithConfidence;
                  </div>
                  <div className="pl-4">{'}'}</div>
                </div>

                {/* Visual badges at bottom */}
                <div className="bg-slate-900/60 p-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-base font-bold text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400">DB Design</div>
                  </div>
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <div className="text-base font-bold text-cyan-400">Onion</div>
                    <div className="text-[10px] text-slate-400">Architecture</div>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <div className="text-base font-bold text-indigo-400">REST</div>
                    <div className="text-[10px] text-slate-400">Web APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
