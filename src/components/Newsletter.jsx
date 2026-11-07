import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export function Newsletter({ className }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (val) => {
    if (!val.trim()) return 'Email address is required';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val.trim())) return 'Please enter a valid email address';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateEmail(email);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulate network latency for demo
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setIsSubscribed(true);
    } catch {
      setIsSubmitting(false);
      setError('An error occurred. Please try again.');
    }
  };

  const handleReset = () => {
    setEmail('');
    setError('');
    setIsSubscribed(false);
  };

  return (
    <div
      className={cn(
        'relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-neutral-900 via-dark to-neutral-900 border border-neutral-800 p-8 sm:p-10 lg:p-12 text-white overflow-hidden shadow-dark-float select-none',
        className
      )}
    >
      {/* Decorative Cyan Radial Ambient Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-soft-cyan/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading & Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-3.5">
          <Badge
            variant="softCyan"
            size="sm"
            dot
            icon={<Sparkles className="w-3.5 h-3.5 text-cyan" />}
            className="bg-white/10 text-cyan border-none font-semibold"
          >
            DENTAL WELLNESS DISPATCH
          </Badge>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Your Smile Deserves the Best Care.
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
            Subscribe to receive dental care tips, clinic updates, and helpful insights for a healthier smile.
          </p>
        </div>

        {/* Right Column: Interactive Subscription Form / Feedback (5 cols) */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {isSubscribed ? (
              /* Success State */
              <motion.div
                key="subscribed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3 text-center sm:text-left"
              >
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-9 h-9 rounded-full bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Thank You for Subscribing!</h4>
                    <p className="text-xs text-neutral-300">You're on the list for our latest oral health tips.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                    Frontend Demo Mode
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-cyan hover:underline font-semibold"
                  >
                    Reset Form
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Subscription Input Form */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-3"
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  <div className="relative flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address..."
                      disabled={isSubmitting}
                      className={cn(
                        'w-full pl-11 pr-4 py-3.5 rounded-full text-sm bg-white/10 border text-white placeholder:text-neutral-400 transition-all duration-200 backdrop-blur-sm',
                        'focus:outline-none focus:bg-white/15 focus:border-cyan focus:ring-2 focus:ring-cyan/30',
                        error ? 'border-red-400' : 'border-white/20 hover:border-white/40'
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    pill
                    disabled={isSubmitting}
                    className="shrink-0 shadow-cyan-glow font-bold px-6 py-3.5"
                    rightIcon={
                      isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting ? 'Joining...' : 'Subscribe'}
                  </Button>
                </div>

                {error ? (
                  <p className="text-xs text-red-400 font-medium flex items-center gap-1.5 pl-3">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{error}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-neutral-400 pl-3">
                    We respect your privacy. No spam, ever. Unsubscribe at any time.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
