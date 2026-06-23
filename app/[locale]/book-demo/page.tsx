'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertCircle, Clock, Search, TrendingUp, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookDemo() {
  const t = useTranslations();
  const locale = useLocale();

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
  
  // Custom Date Picker State
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const selected = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
    const yyyy = selected.getFullYear();
    const mm = String(selected.getMonth() + 1).padStart(2, '0');
    const dd = String(selected.getDate()).padStart(2, '0');
    setFormData({ ...formData, preferredDate: `${yyyy}-${mm}-${dd}` });
    setShowCalendar(false);
  };

  const getDisplayDate = () => {
    if (!formData.preferredDate) return '';
    try {
      const [y, m, d] = formData.preferredDate.split('-').map(Number);
      const dateObj = new Date(y, m - 1, d);
      return dateObj.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return formData.preferredDate;
    }
  };

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

  // Safe fetch of benefits array
  let benefits = [];
  try {
    benefits = t.raw('bookDemo.benefits') as string[];
  } catch (e) {
    benefits = [
      "60-min 1-on-1 with an AI specialist.",
      "Analysis of your operational bottlenecks.",
      "AI Opportunity Map tailored to your business.",
      "Clear, prioritized next steps."
    ];
  }

  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0: return <Clock className="h-5 w-5 text-gray-400 shrink-0 mt-1" />;
      case 1: return <Search className="h-5 w-5 text-gray-400 shrink-0 mt-1" />;
      case 2: return <TrendingUp className="h-5 w-5 text-gray-400 shrink-0 mt-1" />;
      case 3: return <Sparkles className="h-5 w-5 text-gray-400 shrink-0 mt-1" />;
      default: return <Check className="h-5 w-5 text-gray-400 shrink-0 mt-1" />;
    }
  };

  const renderLabel = (text: string) => {
    if (text.endsWith('*')) {
      return (
        <>
          {text.slice(0, -1).trim()} <span className="text-red-500 font-bold">*</span>
        </>
      );
    }
    return text;
  };

  const monthYearString = calendarMonth.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-background pt-24 pb-20 md:pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Intro & Benefits */}
          <div className="lg:col-span-5 space-y-8 pt-4 lg:pt-8">
            <div className="space-y-4">
              <span className="text-sm font-bold text-primary uppercase tracking-widest block">
                {t('bookDemo.auditTagline')}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6.5xl leading-tight">
                {t('bookDemo.auditHeadline')}
              </h1>
            </div>
            
            <ul className="space-y-6 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  {getBenefitIcon(index)}
                  <span className="text-base text-gray-300 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form inside Premium Card */}
          <div className="lg:col-span-7">
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
                className="rounded-2xl border border-white/10 bg-card/45 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/50"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-red-400 text-sm flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.name'))}</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-gray-600" 
                        placeholder={t('bookDemo.form.namePlaceholder')} 
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.jobTitle'))}</label>
                      <input 
                        type="text" 
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-gray-600" 
                        placeholder={t('bookDemo.form.jobTitlePlaceholder')} 
                      />
                    </div>
                  </div>

                  {/* Industry and Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.industry'))}</label>
                      <div className="relative">
                        <select 
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          required
                          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none text-white font-medium cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-500">{t('bookDemo.form.industryPlaceholder')}</option>
                          <option value="Construction & Engineering" className="bg-gray-900">{t('bookDemo.form.industryOptions.construction')}</option>
                          <option value="Real Estate" className="bg-gray-900">{t('bookDemo.form.industryOptions.realestate')}</option>
                          <option value="Manufacturing" className="bg-gray-900">{t('bookDemo.form.industryOptions.manufacturing')}</option>
                          <option value="Retail & E-commerce" className="bg-gray-900">{t('bookDemo.form.industryOptions.retail')}</option>
                          <option value="Financial Services" className="bg-gray-900">{t('bookDemo.form.industryOptions.finance')}</option>
                          <option value="Technology & Software" className="bg-gray-900">{t('bookDemo.form.industryOptions.tech')}</option>
                          <option value="Healthcare & Medical" className="bg-gray-900">{t('bookDemo.form.industryOptions.healthcare')}</option>
                          <option value="Logistics & Supply Chain" className="bg-gray-900">{t('bookDemo.form.industryOptions.logistics')}</option>
                          <option value="Education" className="bg-gray-900">{t('bookDemo.form.industryOptions.education')}</option>
                          <option value="Professional Services" className="bg-gray-900">{t('bookDemo.form.industryOptions.services')}</option>
                          <option value="Other" className="bg-gray-900">{t('bookDemo.form.industryOptions.other')}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.company'))}</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-gray-600" 
                        placeholder={t('bookDemo.form.companyPlaceholder')} 
                      />
                    </div>
                  </div>

                  {/* Company Size Radio Group */}
                  <div>
                    <label className="mb-3 block text-sm font-medium">{renderLabel(t('bookDemo.form.companySize'))}</label>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      {['20-50', '50-100', '100-500', '500+'].map((size) => (
                        <label key={size} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="companySize"
                            value={size}
                            checked={formData.companySize === size}
                            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                            className="sr-only"
                          />
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                            formData.companySize === size
                              ? 'border-primary bg-primary/20'
                              : 'border-white/20 group-hover:border-white/40'
                          }`}>
                            {formData.companySize === size && (
                              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {size}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.email'))}</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-gray-600" 
                      placeholder={t('bookDemo.form.emailPlaceholder')} 
                    />
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.preferredDate'))}</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          readOnly
                          value={getDisplayDate()}
                          placeholder="mm/dd/yyyy"
                          onClick={() => setShowCalendar(true)}
                          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white cursor-pointer placeholder:text-gray-600" 
                        />
                        {showCalendar && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowCalendar(false)} />
                            <div className="absolute z-50 right-0 lg:left-0 mt-2 p-4 rounded-xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl w-72">
                              {/* Calendar Header */}
                              <div className="flex items-center justify-between mb-4">
                                <button
                                  type="button"
                                  onClick={handlePrevMonth}
                                  className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <span className="text-sm font-semibold capitalize text-white">
                                  {monthYearString}
                                </span>
                                <button
                                  type="button"
                                  onClick={handleNextMonth}
                                  className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                              {/* Weekdays */}
                              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                {daysOfWeek.map((day) => (
                                  <span key={day} className="text-[10px] font-bold text-gray-500">
                                    {day}
                                  </span>
                                ))}
                              </div>
                              {/* Days Grid */}
                              <div className="grid grid-cols-7 gap-1 text-center">
                                {Array.from({ length: getFirstDayOfMonth(calendarMonth) }).map((_, i) => (
                                  <div key={`empty-${i}`} />
                                ))}
                                {Array.from({ length: getDaysInMonth(calendarMonth) }).map((_, i) => {
                                  const day = i + 1;
                                  const isSelected = (() => {
                                    if (!formData.preferredDate) return false;
                                    const [y, m, d] = formData.preferredDate.split('-').map(Number);
                                    return y === calendarMonth.getFullYear() && (m - 1) === calendarMonth.getMonth() && d === day;
                                  })();
                                  return (
                                    <button
                                      key={day}
                                      type="button"
                                      onClick={() => handleSelectDay(day)}
                                      className={`py-1.5 text-xs rounded-lg transition-all ${
                                        isSelected
                                          ? 'bg-primary text-primary-foreground font-bold'
                                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                      }`}
                                    >
                                      {day}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">{renderLabel(t('bookDemo.form.preferredTime'))}</label>
                      <input 
                        type="time" 
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white [color-scheme:dark]" 
                      />
                    </div>
                  </div>

                  {/* Challenge Textarea and Character Counter */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">{renderLabel(t('bookDemo.form.challenge'))}</label>
                      <span className="text-xs text-gray-500">
                        {formData.challenge.length}/300
                      </span>
                    </div>
                    <textarea 
                      rows={4} 
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      maxLength={300}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-gray-600" 
                      placeholder={t('bookDemo.form.challengePlaceholder')} 
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('bookDemo.form.submitting') : t('bookDemo.form.submit')}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}