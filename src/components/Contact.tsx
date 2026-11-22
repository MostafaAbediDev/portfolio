'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Check,
  Send,
  Mail,
  User,
  AtSign,
  FileText,
  MessageSquare,
  Sparkles,
  Loader2,
  RotateCcw,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { lang, t } = usePortfolio();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    contact?: string;
    subject?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPendingActivation, setIsPendingActivation] = useState(false);
  const [submittedAt, setSubmittedAt] = useState<string>('');

  const validate = (): boolean => {
    const errors: {
      name?: string;
      contact?: string;
      subject?: string;
      message?: string;
    } = {};

    if (!formData.name.trim()) {
      errors.name = lang === 'fa' ? 'لطفاً نام و نام‌خانوادگی خود را وارد کنید' : 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      errors.name = lang === 'fa' ? 'نام باید حداقل ۲ حرف باشد' : 'Name must be at least 2 characters';
    }

    if (!formData.contact.trim()) {
      errors.contact = lang === 'fa' ? 'لطفاً ایمیل یا شماره تماس خود را وارد کنید' : 'Please enter your email or phone';
    } else if (formData.contact.trim().length < 5) {
      errors.contact = lang === 'fa' ? 'شماره تماس یا ایمیل معتبر وارد کنید' : 'Enter a valid email or phone number';
    }

    if (!formData.subject.trim()) {
      errors.subject = lang === 'fa' ? 'لطفاً موضوع پیام را مشخص کنید' : 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errors.message = lang === 'fa' ? 'لطفاً متن پیام خود را بنویسید' : 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = lang === 'fa' ? 'متن پیام باید حداقل ۱۰ کاراکتر باشد' : 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitError(null);
    setIsSubmitting(true);
    const now = new Date().toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US');
    setSubmittedAt(now);

    let delivered = false;

    try {
      // 1. In-app background dispatch via local Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          contact: formData.contact.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _honey: '',
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success !== false) {
        delivered = true;
        setIsPendingActivation(Boolean(result.pendingActivation));
      } else {
        throw new Error(result.error || 'Local API route responded with status ' + response.status);
      }
    } catch (err) {
      console.warn('API route failed, trying direct AJAX dispatch to FormSubmit:', err);
      try {
        const isEmail = formData.contact.includes('@');
        const senderEmail = isEmail ? formData.contact.trim() : 'no-reply@mostafaabedi.ir';
        const fallbackRes = await fetch('https://formsubmit.co/ajax/mostafa.abedi554@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            contact: formData.contact.trim(),
            email: senderEmail,
            _replyto: senderEmail,
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _subject: `[Portfolio Message] ${formData.subject.trim()} - ${formData.name.trim()}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        const fallbackJson = await fallbackRes.json().catch(() => ({}));
        if (fallbackRes.ok) {
          delivered = true;
          const needsActivation =
            typeof fallbackJson?.message === 'string' &&
            fallbackJson.message.toLowerCase().includes('activation');
          setIsPendingActivation(needsActivation);
        }
      } catch (directErr) {
        console.warn('Direct FormSubmit dispatch warning:', directErr);
      }
    } finally {
      setIsSubmitting(false);
      if (delivered) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(
          lang === 'fa'
            ? 'متأسفانه در برقراری ارتباط با سرور ارسال پیام خطایی رخ داد. لطفاً مجدداً امتحان کنید یا از راه‌های ارتباط مستقیم انتهای صفحه پیام دهید.'
            : 'Failed to deliver message. Please try again or reach out directly using the direct channels in the footer.'
        );
      }
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', contact: '', subject: '', message: '' });
    setFormErrors({});
    setSubmitError(null);
    setIsPendingActivation(false);
    setSubmittedAt('');
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3.5">
            <Mail className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === 'fa' ? 'راه‌های ارتباطی' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.contactFormTitle[lang]}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'fa'
              ? 'پیام خود را از طریق فرم زیر مستقیماً ارسال فرمایید. در اسرع وقت پاسخگوی شما خواهم بود.'
              : 'Send your message directly via the form below. I will respond as soon as possible.'}
          </p>
        </motion.div>

        {/* Unified Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient top highlight */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

          {/* Card Header & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 dark:text-white">
                  {t.contactFormTitle[lang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {lang === 'fa'
                    ? 'ارسال مستقیم و امن به mostafa.abedi554@gmail.com'
                    : 'Direct and secure delivery to mostafa.abedi554@gmail.com'}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === 'fa' ? 'ارسال بدون خروج از سایت' : 'Direct In-App Delivery'}</span>
            </div>
          </div>

          {/* Interactive Form or Success State */}
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              /* Sleek In-Form Success Card */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="py-4 space-y-6"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 shadow-glow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-500 text-white shrink-0 shadow-md">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-heading font-extrabold text-emerald-950 dark:text-emerald-200 leading-snug">
                        {t.formSuccess[lang]}
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800/90 dark:text-emerald-300/90 mt-1.5 leading-relaxed">
                        {lang === 'fa'
                          ? 'پیام شما مستقیماً به ایمیل مصطفی عابدی ارسال گردید. از تماس شما سپاسگزاریم.'
                          : 'Your message has been delivered directly to Mostafa Abedi. Thank you for reaching out.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Administrative One-Time Activation Status Notice */}
                {isPendingActivation && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-1.5 leading-relaxed">
                    <div className="font-bold flex items-center gap-2 text-amber-700 dark:text-amber-300">
                      <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>
                        {lang === 'fa'
                          ? 'اطلاعیه راه‌اندازی (مخصوص مدیر پورتفولیو):'
                          : 'Setup Notice (For Portfolio Owner):'}
                      </span>
                    </div>
                    <p>
                      {lang === 'fa'
                        ? 'پیام در نوبت تحویل ثبت شد. در صورتی که این نخستین آزمایش فرم است، لطفاً ایمیل فعال‌سازی اولیه FormSubmit را در mostafa.abedi554@gmail.com (یا پوشه Spam) تایید نمایید تا تمامی پیام‌های دریافتی مستقیماً به اینباکس جیمیل شما هدایت شوند.'
                        : 'Your submission is queued. If this is the initial setup test, please confirm the one-time FormSubmit activation link in mostafa.abedi554@gmail.com (or Spam folder) to enable direct inbox forwarding.'}
                    </p>
                  </div>
                )}

                {/* Submitted Message Summary Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-500">
                    <span>{lang === 'fa' ? 'مقصد جیمیل:' : 'Destination:'}</span>
                    <strong className="text-emerald-500">mostafa.abedi554@gmail.com</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">{lang === 'fa' ? 'فرستنده: ' : 'From: '}</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{formData.name} ({formData.contact})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">{lang === 'fa' ? 'موضوع: ' : 'Subject: '}</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{formData.subject}</span>
                  </div>
                  {submittedAt && (
                    <div className="text-[11px] text-slate-400">
                      <span>{lang === 'fa' ? 'زمان ارسال: ' : 'Timestamp: '}</span>
                      <span className="font-mono text-slate-600 dark:text-slate-300">{submittedAt}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {formData.message}
                  </div>
                </div>

                {/* Action Button: Send Another Message */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 shadow-glow transition-all active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{lang === 'fa' ? 'ارسال پیام دیگر' : 'Send Another Message'}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Contact Form */
              <form key="contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Row 1: Name and Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t.formName[lang]}</span>
                        <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder={lang === 'fa' ? 'مثال: علیرضا محمدی' : 'e.g. John Doe'}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100/90 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                        formErrors.name
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-rose-500 font-medium animate-in fade-in">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact (Email / Phone) Field */}
                  <div>
                    <label htmlFor="contact-info" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <AtSign className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{lang === 'fa' ? 'ایمیل یا شماره تماس' : 'Email or Phone'}</span>
                        <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <input
                      id="contact-info"
                      name="contact"
                      type="text"
                      autoComplete="email"
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (formErrors.contact) setFormErrors({ ...formErrors, contact: undefined });
                      }}
                      placeholder={lang === 'fa' ? 'info@example.com یا 0917xxxxxxx' : 'info@example.com or +98...'}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100/90 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                        formErrors.contact
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30'
                      }`}
                    />
                    {formErrors.contact && (
                      <p className="mt-1 text-[11px] text-rose-500 font-medium animate-in fade-in">
                        {formErrors.contact}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{t.formSubject[lang]}</span>
                      <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: undefined });
                    }}
                    placeholder={
                      lang === 'fa'
                        ? 'مثال: پیشنهاد همکاری در توسعه نرم‌افزار / مشاوره معماری'
                        : 'e.g. ASP.NET Project Collaboration / Architectural Consultation'
                    }
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100/90 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                      formErrors.subject
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-[11px] text-rose-500 font-medium animate-in fade-in">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{t.formMessage[lang]}</span>
                      <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    placeholder={
                      lang === 'fa'
                        ? 'متن کامل پیام، شرح پروژه، تکنولوژی‌های مورد نظر یا جزئیات پیشنهاد خود را اینجا بنویسید...'
                        : 'Describe your project specifications, required technology stack, or inquiry details here...'
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100/90 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all resize-y ${
                      formErrors.message
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-rose-500 font-medium animate-in fade-in">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Error Banner */}
                {submitError && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium animate-in fade-in">
                    {submitError}
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 shadow-glow transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.formSending[lang]}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.sendMessage[lang]}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
