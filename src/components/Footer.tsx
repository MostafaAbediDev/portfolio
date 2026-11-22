'use client';

import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  ArrowUp,
  MessageCircle,
  Send,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, setActiveSection } = usePortfolio();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollToTop = () => {
    setActiveSection('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = async (text: string, id: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch (err) {
      console.warn('Clipboard copy fallback:', err);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const contactChannels = [
    {
      id: 'whatsapp',
      name: { fa: 'واتس‌اپ', en: 'WhatsApp' },
      identifier: 'mstf_abedi',
      copyValue: 'mstf_abedi',
      link: 'https://wa.me/989177249281',
      copyLabel: { fa: 'کپی آیدی واتس‌اپ', en: 'Copy WhatsApp ID' },
      icon: MessageCircle,
      colorClass: 'text-emerald-500 dark:text-emerald-400',
      hoverClass: 'hover:border-emerald-500/40 hover:bg-emerald-500/5',
    },
    {
      id: 'telegram',
      name: { fa: 'تلگرام', en: 'Telegram' },
      identifier: '@mstf_abedi',
      copyValue: 'mstf_abedi',
      link: 'https://t.me/mstf_abedi',
      copyLabel: { fa: 'کپی آیدی تلگرام', en: 'Copy Telegram ID' },
      icon: Send,
      colorClass: 'text-sky-500 dark:text-sky-400',
      hoverClass: 'hover:border-sky-500/40 hover:bg-sky-500/5',
    },
    {
      id: 'linkedin',
      name: { fa: 'لینکدین', en: 'LinkedIn' },
      identifier: 'mostafaaaa-abediiii',
      copyValue: 'mostafaaaa-abediiii',
      link: 'https://linkedin.com/in/mostafaaaa-abediiii',
      copyLabel: { fa: 'کپی آیدی لینکدین', en: 'Copy LinkedIn' },
      icon: Linkedin,
      colorClass: 'text-blue-500 dark:text-blue-400',
      hoverClass: 'hover:border-blue-500/40 hover:bg-blue-500/5',
    },
    {
      id: 'instagram',
      name: { fa: 'اینستاگرام', en: 'Instagram' },
      identifier: 'mostafa.__.abediii',
      copyValue: 'mostafa.__.abediii',
      link: 'https://instagram.com/mostafa.__.abediii',
      copyLabel: { fa: 'کپی آیدی اینستاگرام', en: 'Copy Instagram' },
      icon: Instagram,
      colorClass: 'text-pink-500 dark:text-pink-400',
      hoverClass: 'hover:border-pink-500/40 hover:bg-pink-500/5',
    },
    {
      id: 'gmail',
      name: { fa: 'جیمیل مستقیم', en: 'Gmail' },
      identifier: 'mostafa.abedi554@gmail.com',
      copyValue: 'mostafa.abedi554@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mostafa.abedi554@gmail.com',
      copyLabel: { fa: 'کپی ایمیل', en: 'Copy Email' },
      icon: Mail,
      colorClass: 'text-rose-500 dark:text-rose-400',
      hoverClass: 'hover:border-rose-500/40 hover:bg-rose-500/5',
    },
    {
      id: 'phone',
      name: { fa: 'پیامک و تماس', en: 'SMS & Call' },
      identifier: '09177249281',
      copyValue: '09177249281',
      link: 'sms:+989177249281',
      copyLabel: { fa: 'کپی شماره همراه', en: 'Copy Phone' },
      icon: Phone,
      colorClass: 'text-amber-500 dark:text-amber-400',
      hoverClass: 'hover:border-amber-500/40 hover:bg-amber-500/5',
    },
  ];

  return (
    <footer className="relative bg-slate-900/80 dark:bg-[#05080e] pt-14 pb-10 border-t border-slate-200/80 dark:border-slate-800/60 overflow-hidden">
      {/* Top subtle emerald gradient highlight line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-emerald-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Clean Back To Top Pill */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold glass-card border border-slate-300/80 dark:border-slate-800 hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md group mb-10"
          aria-label={t.backToTop[lang]}
        >
          <span>{t.backToTop[lang]}</span>
          <ArrowUp className="w-4 h-4 text-emerald-500 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Direct Contact Channels Dock in Footer */}
        <div className="w-full mb-10 p-5 sm:p-6 rounded-3xl bg-slate-800/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/60 backdrop-blur-md shadow-lg">
          <div className="text-xs font-bold text-slate-400 dark:text-slate-300 mb-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200 dark:text-slate-100 font-bold">
                {lang === 'fa' ? 'راه‌های ارتباط مستقیم و فوری:' : 'Instant Direct Channels:'}
              </span>
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              {lang === 'fa' ? 'کلیک جهت گفتگو یا کپی سریع مشخصات' : 'Click to connect or copy handle'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const isCopied = copiedId === channel.id;

              return (
                <div
                  key={channel.id}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 ${channel.hoverClass} text-slate-700 dark:text-slate-200 transition-all duration-200 shadow-sm`}
                >
                  <a
                    href={channel.link}
                    target={channel.link.startsWith('http') ? '_blank' : undefined}
                    rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    title={`${channel.name[lang]}: ${channel.identifier}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${channel.colorClass}`} />
                    <span>{channel.name[lang]}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400 opacity-60" />
                  </a>

                  <span className="text-slate-300 dark:text-slate-700">|</span>

                  <button
                    type="button"
                    onClick={() => handleCopy(channel.copyValue, channel.id)}
                    className="p-0.5 rounded-md text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    title={channel.copyLabel[lang]}
                    aria-label={isCopied ? t.copied[lang] : channel.copyLabel[lang]}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Realigned Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm">
          {/* Designed & Developed Notice - Right in RTL (start) */}
          <p className="font-medium text-slate-400 dark:text-slate-400 text-center sm:text-start">
            {lang === 'fa' ? 'طراحی و توسعه توسط مصطفی عابدی' : 'Designed & Developed by Mostafa Abedi'}
          </p>

          {/* Bottom Copyright Notice - Left in RTL (end) */}
          <p className="text-slate-500 dark:text-slate-500 font-medium text-center sm:text-end">
            {lang === 'fa'
              ? '© 2026 مصطفی عابدی. تمامی حقوق محفوظ است.'
              : '© 2026 Mostafa Abedi. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
