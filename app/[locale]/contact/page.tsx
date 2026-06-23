'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Logo from '@/components/ui/logo';

export default function Contact() {
  const t = useTranslations();

  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    industry: '',
    email: '',
    company: '',
    companySize: '50-100',
    preferredDate: '',
    preferredTime: '',
    challenge: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.industry || !formData.companySize) {
      setErrorMessage(t('bookDemo.form.validationError'));
      setSubmitStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(t('bookDemo.form.validationError'));
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          industry: formData.industry,
          companySize: formData.companySize,
          company: formData.company.trim() || undefined,
          jobTitle: formData.jobTitle.trim() || undefined,
          challenge: formData.challenge.trim() || undefined,
          preferMeetingDate: formData.preferredDate || undefined,
          preferMeetingTime: formData.preferredTime || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message && (data.message.includes('Email đã tồn tại') || data.message.toLowerCase().includes('already exists'))) {
          setErrorMessage(t('bookDemo.form.errorEmailExists'));
        } else {
          setErrorMessage(data.message || t('bookDemo.form.errorDefault'));
        }
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({
          name: '',
          jobTitle: '',
          industry: '',
          email: '',
          company: '',
          companySize: '50-100',
          preferredDate: '',
          preferredTime: '',
          challenge: '',
        });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage(t('bookDemo.form.errorDefault'));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      <div className="relative z-10 w-full p-6">
        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
          <Logo className="h-8 w-auto" />
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10 -mt-20">
        <div className="w-full max-w-xl">
          {submitStatus !== 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
                {t('contact.headline')}
              </h1>
              <p className="text-muted-foreground">
                {t('contact.subtext')}
              </p>
            </motion.div>
          )}

          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl p-8 text-center shadow-2xl shadow-emerald-950/20"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-emerald-500/20 p-4 text-emerald-400">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
                {t('bookDemo.form.successTitle')}
              </h2>
              <p className="text-emerald-300/80 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                {t('bookDemo.form.successDesc')}
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                {t('bookDemo.form.backToHome')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/50"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'error' && errorMessage && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-red-400 text-sm flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.name')}</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder={t('bookDemo.form.namePlaceholder')} 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.jobTitle')}</label>
                    <input 
                      type="text" 
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder={t('bookDemo.form.jobTitlePlaceholder')} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.industry')}</label>
                    <div className="relative">
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        required
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none text-white font-medium"
                      >
                        <option value="" disabled className="text-gray-500">{t('bookDemo.form.industryPlaceholder')}</option>
                        <option value="Construction & Engineering" className="bg-gray-900">{t('bookDemo.form.industryOptions.construction')}</option>
                        <option value="Real Estate" className="bg-gray-900">{t('bookDemo.form.industryOptions.realestate')}</option>
                        <option value="Manufacturing" className="bg-gray-900">{t('bookDemo.form.industryOptions.manufacturing')}</option>
                        <option value="Retail" className="bg-gray-900">{t('bookDemo.form.industryOptions.retail')}</option>
                        <option value="Other" className="bg-gray-900">{t('bookDemo.form.industryOptions.other')}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.email')}</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder={t('bookDemo.form.emailPlaceholder')} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.company')}</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder={t('bookDemo.form.companyPlaceholder')} 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.companySize')}</label>
                    <div className="relative">
                      <select 
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        required
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none text-white"
                      >
                        <option value="20-50" className="bg-gray-900">20-50</option>
                        <option value="50-100" className="bg-gray-900">50-100</option>
                        <option value="100-500" className="bg-gray-900">100-500</option>
                        <option value="500+" className="bg-gray-900">500+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.preferredDate')}</label>
                    <input 
                      type="date" 
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white [color-scheme:dark]" 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.preferredTime')}</label>
                    <input 
                      type="time" 
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white [color-scheme:dark]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">{t('bookDemo.form.challenge')}</label>
                  <textarea 
                    rows={4} 
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    maxLength={300}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                    placeholder={t('bookDemo.form.challengePlaceholder')} 
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('bookDemo.form.submitting') : t('bookDemo.form.submit')}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}