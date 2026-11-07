import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  Sparkles,
  Sliders,
  Heart,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Star,
  Activity,
  Stethoscope,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ToothIcon, SparkleIcon, ShieldDentalIcon } from '@/assets/icons';
import { CLINIC_INFO } from '@/constants/clinic';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from '@/utils/gsapUtils';

// Animated Count-Up component for floating statistics
function StatNumber({ target, suffix = '', decimals = 0, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(target);
    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    const increment = (end - start) / steps;

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  );
}

const FOUR_BENEFITS = [
  {
    id: 'specialists',
    title: 'Experienced Dental Specialists',
    description: 'Board-certified specialists with over 15+ years of clinical mastery in restorative, cosmetic and surgical dentistry.',
    icon: Award,
    tag: 'Board Certified',
  },
  {
    id: 'technology',
    title: 'Advanced Dental Technology',
    description: 'Low-radiation 3D CBCT scanners, computer-guided surgical navigation, and gentle laser therapy for micro-precision.',
    icon: Activity,
    tag: '3D Diagnostics',
  },
  {
    id: 'personalized',
    title: 'Personalized Treatment Plans',
    description: 'Every treatment roadmap is tailored to your unique facial aesthetics, bite biomechanics, and personal lifestyle.',
    icon: Sliders,
    tag: 'Biomimetic Care',
  },
  {
    id: 'comfort',
    title: 'Comfortable Patient Experience',
    description: 'Anxiety-free appointments featuring noise-cancelling suites, gentle sedation options, and warm concierge amenities.',
    icon: Heart,
    tag: '100% Pain-Free',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);

  // GSAP ScrollTrigger for parallax scrub on the main clinic photograph
  useGsapScroll(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8, scale: 1.06 },
        {
          yPercent: 8,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }
  }, sectionRef);

  const scrollToContact = () => {
    const el = document.getElementById('appointment') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-white text-dark overflow-hidden select-none"
      aria-label="Why Choose Dentora Dental Clinic"
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-soft-cyan/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-light-grey rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        {/* 1. Section Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl space-y-4 mb-14 sm:mb-18 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <Badge
              variant="softCyan"
              size="md"
              dot
              icon={<ShieldDentalIcon className="w-3.5 h-3.5 text-cyan" />}
              className="bg-soft-cyan/80 text-dark font-semibold shadow-subtle"
            >
              WHY CHOOSE US
            </Badge>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
              Your Smile Is in the{' '}
              <span className="text-cyan block sm:inline">
                Hands of Experts.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
              We combine clinical expertise, modern technology and personalized attention to make every dental visit a better experience.
            </p>
          </motion.div>
        </motion.div>

        {/* 2. Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Prominent Cyan Feature Card + Four Benefits (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Prominent Cyan Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: LUXURY_EASE }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative rounded-[32px] sm:rounded-[36px] bg-cyan text-white p-7 sm:p-9 md:p-10 shadow-cyan-glow overflow-hidden group"
            >
              {/* Subtle Ambient Radial Highlight in top right */}
              <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/20 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white text-cyan flex items-center justify-center shadow-md">
                    <ToothIcon className="w-6 h-6 text-cyan" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/25">
                    Patient-First Standard
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold tracking-tight leading-snug text-white">
                    Care That Goes Beyond Your Smile.
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
                    Discover thoughtful dental care designed around your comfort, confidence and long-term oral health.
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-dark hover:bg-neutral-100 hover:text-cyan font-bold text-sm transition-all duration-300 shadow-md group-hover:shadow-lg cursor-pointer"
                  >
                    <span>Explore Our Clinic</span>
                    <ArrowRight className="w-4 h-4 text-cyan group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Complimentary 3D Consultation Included</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Four Benefits Grid */}
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {FOUR_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="p-5 sm:p-6 rounded-3xl bg-light-grey/80 hover:bg-white border border-neutral-200/80 hover:border-cyan/40 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-white text-cyan shadow-subtle flex items-center justify-center group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-neutral-600 border border-neutral-200/60">
                          {benefit.tag}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-dark tracking-tight group-hover:text-cyan transition-colors duration-300">
                        {benefit.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Book Your Visit Action Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-3xl bg-soft-cyan/40 border border-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan text-white shadow-cyan-glow flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-dark">
                    Ready to schedule your visit?
                  </h5>
                  <p className="text-xs text-neutral-500">
                    Same-day emergency & weekend appointments available
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                pill
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-cyan-glow hover:shadow-cyan-glow-lg font-semibold px-6 shrink-0 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Book Your Visit
              </Button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Asymmetrical Overlapping Photography & Floating Card (Cols 8-12) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div ref={imageWrapperRef} className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Clinic Specialist Photo */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, ease: LUXURY_EASE }}
                className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-black/8 shadow-2xl bg-neutral-100 aspect-[4/5] sm:aspect-[3/4]"
              >
                <img
                  ref={imageRef}
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Senior dental specialist reviewing patient 3D digital records in sterile consultation suite"
                  loading="lazy"
                  className="w-full h-full object-cover object-center will-change-transform"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                  <Badge variant="softCyan" size="sm" dot className="bg-white/95 text-dark font-semibold mb-1.5 shadow-sm">
                    Accredited Center
                  </Badge>
                  <p className="text-base font-bold text-white">
                    High-Precision Digital Dentistry
                  </p>
                  <p className="text-xs text-neutral-300">
                    ADA, AACD & ICOI Certified Practice
                  </p>
                </div>
              </motion.div>

              {/* Second Overlapping Photo (Bottom-Left Offset) */}
              <motion.div
                initial={{ opacity: 0, x: -35, y: 35, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.8, delay: 0.25, ease: LUXURY_EASE }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-8 w-40 sm:w-56 md:w-60 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                    alt="Attentive dental hygienist gently treating comfortable patient in modern dental chair"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cyan block">
                      Gentle Touch
                    </span>
                    <p className="text-xs font-bold leading-tight truncate">
                      Painless Comfort Protocol
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Experience Statistics Card (Top-Right Offset) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: 0.35, ease: LUXURY_EASE }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 bg-white/95 backdrop-blur-xl border border-black/8 rounded-2xl p-3.5 sm:p-5 shadow-card-hover max-w-[200px] sm:max-w-[230px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Verified
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
                    <StatNumber target={99.4} suffix="%" decimals={1} />
                  </div>
                  <h4 className="text-xs font-bold text-neutral-800 leading-tight">
                    Clinical Success Rate
                  </h4>
                  <p className="text-[10px] text-neutral-400">
                    Across 15,000+ Completed Treatments
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
