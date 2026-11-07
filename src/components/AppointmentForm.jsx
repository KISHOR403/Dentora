import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

const SERVICES_OPTIONS = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Dental Implants',
  'Teeth Whitening',
  'Orthodontics',
  'Root Canal Treatment',
];

const TIME_OPTIONS = [
  'Morning (8:00 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 4:00 PM)',
  'Evening (4:00 PM – 7:00 PM)',
];

export function AppointmentForm() {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        // Basic phone validation allowing international and local formats
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,14}$/;
        if (!phoneRegex.test(value.trim())) return 'Please enter a valid phone number';
        return '';

      case 'email':
        if (!value.trim()) return 'Email address is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';

      case 'service':
        if (!value) return 'Please select a dental service';
        return '';

      case 'date':
        if (!value) return 'Please choose an appointment date';
        if (value < todayStr) return 'Appointment date cannot be in the past';
        return '';

      case 'time':
        if (!value) return 'Please choose a preferred time slot';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors = {};
    const newTouched = {};
    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`form-${firstErrorKey}`);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      // Frontend demo simulation with realistic network latency
      // NOTE: In production, replace this setTimeout with a real API call (e.g. fetch('/api/appointments', ...))
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError('An unexpected error occurred while submitting your request. Please call our clinic directly.');
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  return (
    <div className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-neutral-200/80 p-6 sm:p-8 md:p-10 shadow-2xl">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          /* Polished Success Confirmation View */
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-center py-8 sm:py-12 space-y-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-soft-cyan text-cyan mx-auto flex items-center justify-center shadow-cyan-glow">
              <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <Badge variant="softCyan" size="sm" dot>
                Request Received
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                Appointment Requested!
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Thank you, <strong className="text-dark">{formData.fullName}</strong>. Our patient concierge team will reach out to confirm your scheduled slot for <strong className="text-cyan">{formData.service}</strong>.
              </p>
            </div>

            {/* Clear Demonstration Notice */}
            <div className="p-4 rounded-2xl bg-light-grey text-xs text-neutral-500 max-w-md mx-auto border border-neutral-200/60 leading-relaxed text-left flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-800 block mb-0.5">Frontend Demonstration Mode</strong>
                This is a simulated demo request. In a production deployment, this payload connects securely to our clinical scheduling database.
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                pill
                onClick={handleResetForm}
                className="font-semibold"
              >
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Appointment Form */
          <motion.form
            key="appointment-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="border-b border-neutral-100 pb-4 mb-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight">
                Request an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Fill in your preferred details. Our concierge will confirm availability within 2 business hours.
              </p>
            </div>

            {submitError && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{submitError}</span>
              </div>
            )}

            {/* 1. Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="form-fullName"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-neutral-400 pointer-events-none">
                  <User className="w-4 h-4" />
                </span>
                <input
                  id="form-fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Alexandra Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={cn(
                    'w-full rounded-2xl bg-light-grey border px-4 py-3 pl-11 text-sm text-dark placeholder:text-neutral-400 transition-all duration-200',
                    'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                    errors.fullName && touched.fullName
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-neutral-200/80'
                  )}
                />
              </div>
              {errors.fullName && touched.fullName && (
                <p id="fullName-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* 2. Phone & Email (2-Column Grid on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-neutral-400 pointer-events-none">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={cn(
                      'w-full rounded-2xl bg-light-grey border px-4 py-3 pl-11 text-sm text-dark placeholder:text-neutral-400 transition-all duration-200',
                      'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                      errors.phone && touched.phone
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-neutral-200/80'
                    )}
                  />
                </div>
                {errors.phone && touched.phone && (
                  <p id="phone-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-email"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-neutral-400 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cn(
                      'w-full rounded-2xl bg-light-grey border px-4 py-3 pl-11 text-sm text-dark placeholder:text-neutral-400 transition-all duration-200',
                      'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                      errors.email && touched.email
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-neutral-200/80'
                    )}
                  />
                </div>
                {errors.email && touched.email && (
                  <p id="email-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* 3. Dental Service Dropdown */}
            <div className="space-y-1.5">
              <label
                htmlFor="form-service"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
              >
                Select Dental Service <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <select
                  id="form-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  className={cn(
                    'w-full rounded-2xl bg-light-grey border px-4 py-3 text-sm text-dark transition-all duration-200 appearance-none cursor-pointer',
                    'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                    !formData.service && 'text-neutral-400',
                    errors.service && touched.service
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-neutral-200/80'
                  )}
                >
                  <option value="" disabled>
                    Choose a specialized dental procedure...
                  </option>
                  {SERVICES_OPTIONS.map((svc) => (
                    <option key={svc} value={svc} className="text-dark">
                      {svc}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 pointer-events-none text-neutral-400 text-xs">
                  ▼
                </div>
              </div>
              {errors.service && touched.service && (
                <p id="service-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.service}
                </p>
              )}
            </div>

            {/* 4. Preferred Date & Time (2-Column Grid on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-date"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                >
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    id="form-date"
                    name="date"
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    className={cn(
                      'w-full rounded-2xl bg-light-grey border px-4 py-3 text-sm text-dark transition-all duration-200 cursor-pointer',
                      'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                      errors.date && touched.date
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-neutral-200/80'
                    )}
                  />
                </div>
                {errors.date && touched.date && (
                  <p id="date-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-time"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                >
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <select
                    id="form-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                    className={cn(
                      'w-full rounded-2xl bg-light-grey border px-4 py-3 text-sm text-dark transition-all duration-200 appearance-none cursor-pointer',
                      'focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none',
                      !formData.time && 'text-neutral-400',
                      errors.time && touched.time
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-neutral-200/80'
                    )}
                  >
                    <option value="" disabled>
                      Select preferred time...
                    </option>
                    {TIME_OPTIONS.map((slot) => (
                      <option key={slot} value={slot} className="text-dark">
                        {slot}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 pointer-events-none text-neutral-400 text-xs">
                    ▼
                  </div>
                </div>
                {errors.time && touched.time && (
                  <p id="time-error" className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* 5. Additional Message (Optional) */}
            <div className="space-y-1.5">
              <label
                htmlFor="form-message"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
              >
                Additional Message{' '}
                <span className="text-neutral-400 text-[10px] font-normal lowercase">
                  (optional)
                </span>
              </label>
              <textarea
                id="form-message"
                name="message"
                rows={3}
                placeholder="Describe any specific dental concerns, dental anxiety, or insurance inquiries..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-light-grey border border-neutral-200/80 px-4 py-3 text-sm text-dark placeholder:text-neutral-400 transition-all duration-200 focus:bg-white focus:border-cyan focus:ring-4 focus:ring-cyan/15 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                pill
                disabled={isSubmitting}
                className="w-full justify-center shadow-cyan-glow hover:shadow-cyan-glow-lg font-bold text-base py-4"
                rightIcon={
                  isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {isSubmitting ? 'Confirming Availability...' : 'Request Appointment'}
              </Button>
            </div>

            <div className="text-center text-xs text-neutral-400 flex items-center justify-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant Practice • Strict Privacy Guaranteed</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppointmentForm;
