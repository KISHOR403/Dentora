import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Shield,
  Activity,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { ToothIcon, SparkleIcon, ImplantIcon } from '@/assets/icons';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from '@/utils/gsapUtils';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

const SERVICE_PILLS = [
  { label: 'Cosmetic Dentistry', icon: SparkleIcon },
  { label: 'Dental Implants', icon: ImplantIcon },
  { label: 'Smile Makeover', icon: ToothIcon },
];

const PATIENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
];

export function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  // GSAP ScrollTrigger Parallax effect on Hero Background Image
  useGsapScroll(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, heroRef);

  const scrollToSection = (id) => {
    const el = document.getElementById(id) || document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] lg:min-h-[960px] w-full flex items-center justify-center overflow-hidden bg-dark text-white pt-28 pb-16 lg:py-0 select-none"
      aria-label="Dentora Clinic Hero"
    >
      {/* 1. Cinematic Realistic Dental Clinic Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
          alt="Modern luxury dental treatment suite with advanced ergonomic patient chair and architectural lighting"
          width="2000"
          height="1333"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="hero-bg-image w-full h-[125%] -top-[10%] object-cover object-center lg:object-[center_right] will-change-transform"
        />

        {/* Multi-layer Dark Gradient Overlays for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/50 sm:to-dark/40 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-dark/70 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark/20 to-dark/80 z-10" />
      </div>

      {/* 2. Hero Content Container */}
      <Container size="wide" className="relative z-20 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Supporting Copy, CTAs, Category Pills */}
          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-7 space-y-7 sm:space-y-8"
          >
            {/* Clinic Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant="softCyan"
                dot
                size="md"
                className="bg-soft-cyan/95 text-dark font-semibold shadow-sm"
              >
                Accepting New Patients
              </Badge>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <Award className="w-3.5 h-3.5 text-cyan" />
                <span>Premier Cosmetic & Implant Dentistry</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-extrabold tracking-tight leading-[1.05] text-white">
                Your Smile Deserves <br className="hidden sm:inline" />
                <span className="text-cyan drop-shadow-sm">Exceptional Care.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-200/90 max-w-2xl font-normal leading-relaxed">
                Experience modern dentistry with compassionate specialists, advanced technology and personalized care.
              </p>
            </motion.div>

            {/* Dual CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="xl"
                pill
                rightIcon={<Calendar className="w-4 h-4" />}
                className="shadow-cyan-glow hover:shadow-cyan-glow-lg text-sm sm:text-base font-semibold px-7 py-4"
                onClick={() => scrollToSection('appointment')}
              >
                Book Your Appointment
              </Button>

              <Button
                variant="outline"
                size="xl"
                pill
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-md text-sm sm:text-base font-medium px-7 py-4"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
            </motion.div>

            {/* Service Category Pills */}
            <motion.div variants={fadeInUp} className="pt-2 sm:pt-4 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block">
                Specialized Treatments
              </span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {SERVICE_PILLS.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <motion.button
                      key={pill.label}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection('services')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-cyan/50 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white backdrop-blur-md transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan shrink-0" />
                      <span>{pill.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Cards Composition */}
          <div className="lg:col-span-4 xl:col-span-5 relative flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-6 mt-8 lg:mt-0">
            {/* 1. Floating Modern Treatment Environment Card */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: LUXURY_EASE }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="w-full sm:w-80 lg:w-[320px] rounded-3xl bg-dark/80 backdrop-blur-2xl border border-white/20 p-4 shadow-2xl text-white relative overflow-hidden group"
            >
              {/* Image thumbnail of modern suite */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3.5">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Modern dental diagnostic suite"
                  width="320"
                  height="176"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-2.5 left-2.5">
                  <Badge variant="softCyan" size="sm" dot className="bg-white/95 text-dark font-semibold">
                    Live Diagnostics
                  </Badge>
                </div>
              </div>

              {/* Card Meta */}
              <div className="space-y-1 px-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                    State-of-the-Art Suite
                    <SparkleIcon className="w-3.5 h-3.5 text-cyan" />
                  </h4>
                  <span className="text-[11px] font-mono text-cyan">HD 3D CT</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Painless laser procedures & digital impressions for immediate, precision results.
                </p>
              </div>
            </motion.div>

            {/* 2. Floating Patient Rating & Social Proof Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.65, ease: LUXURY_EASE }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="w-full sm:w-80 lg:w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/40 p-4 sm:p-5 shadow-2xl text-dark relative"
            >
              <div className="flex items-center justify-between mb-3">
                {/* 4 Overlapping Patient Avatars */}
                <div className="flex items-center -space-x-2.5">
                  {PATIENT_AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Verified patient avatar ${i + 1}`}
                      width="36"
                      height="36"
                      loading="lazy"
                      decoding="async"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-black/5"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-soft-cyan text-cyan-900 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    15k+
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-neutral-900">5.0 Star Rating</span>
                </div>
              </div>

              {/* Rating description */}
              <div className="pt-1 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-dark block">15,000+ Happy Smiles</span>
                  <span className="text-[11px] text-neutral-500">Verified Patient Reviews</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-cyan/15 text-cyan flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom Scroll Indicator Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection('services')}
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold group-hover:text-cyan transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1.5 group-hover:border-cyan transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
