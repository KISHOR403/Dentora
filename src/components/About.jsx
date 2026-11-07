import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Award,
  Users,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SparkleIcon, ToothIcon } from '@/assets/icons';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from '@/utils/gsapUtils';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

// Animated Count-Up component for statistics
function StatCounter({ target, suffix = '', decimals = 0, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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

const STATS_DATA = [
  {
    target: 10,
    suffix: '+',
    decimals: 0,
    label: 'Years of Experience',
    subtext: 'Clinical Excellence',
    icon: Award,
  },
  {
    target: 2,
    suffix: 'K+',
    decimals: 0,
    label: 'Happy Patients',
    subtext: 'Across the Tri-State Area',
    icon: Users,
  },
  {
    target: 98,
    suffix: '%',
    decimals: 0,
    label: 'Patient Satisfaction',
    subtext: 'Verified Post-Care Surveys',
    icon: HeartHandshake,
  },
  {
    target: 4.9,
    suffix: '/5',
    decimals: 1,
    label: 'Patient Rating',
    subtext: '850+ Google & WebMD Reviews',
    icon: Star,
  },
];

export function About() {
  const sectionRef = useRef(null);
  const mainImageRef = useRef(null);
  const imageContainerRef = useRef(null);

  // GSAP ScrollTrigger for smooth image parallax and reveal
  useGsapScroll(() => {
    if (mainImageRef.current) {
      gsap.fromTo(
        mainImageRef.current,
        { yPercent: -6, scale: 1.08 },
        {
          yPercent: 6,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: imageContainerRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-white text-dark overflow-hidden select-none"
      aria-label="About Dentora Dental Clinic"
    >
      {/* Background Subtle Ambient Tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-cyan/40 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-light-grey/80 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT: Asymmetrical High-End Photography Composition (Cols 1-6) */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imageContainerRef}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Primary Dental Specialist Photograph */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: LUXURY_EASE }}
                className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-black/8 shadow-2xl bg-neutral-100 aspect-[4/5] sm:aspect-[3/4]"
              >
                <img
                  ref={mainImageRef}
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                  alt="Lead dental surgeon performing precision treatment in Dentora's modern sterile clinic"
                  width="1200"
                  height="1500"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center will-change-transform"
                />

                {/* Soft gradient bottom overlay for photo depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Left Photo Caption */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan block mb-0.5">
                      Clinical Excellence
                    </span>
                    <p className="text-sm sm:text-base font-bold">
                      Advanced Intraoral Diagnostic Suite
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0">
                    <ToothIcon className="w-5 h-5 text-cyan" />
                  </div>
                </div>
              </motion.div>

              {/* Secondary Overlapping Patient Photograph (Bottom-Right Offset) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: 0.25, ease: LUXURY_EASE }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-8 w-40 sm:w-56 md:w-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                    alt="Happy patient sharing a radiant natural smile after personalized dental treatment"
                    width="800"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold leading-tight truncate">
                      Natural Smile Aesthetics
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Experience Badge (Top-Left Offset) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.35, ease: LUXURY_EASE }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="absolute -top-4 -left-2 sm:-top-8 sm:-left-8 bg-white/95 backdrop-blur-xl border border-black/8 rounded-2xl p-3.5 sm:p-4.5 shadow-card-hover max-w-[200px] sm:max-w-[230px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base font-extrabold text-dark leading-none">10+ Years</span>
                      <span className="w-2 h-2 rounded-full bg-cyan inline-block animate-pulse" />
                    </div>
                    <p className="text-[11px] text-neutral-500 font-medium mt-1 leading-tight">
                      Dedicated Patient-First Care
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT: Editorial Content, Personalized Care & Statistics (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-5"
            >
              {/* Eyebrow Label */}
              <motion.div variants={fadeInUp}>
                <Badge
                  variant="softCyan"
                  size="md"
                  icon={<SparkleIcon className="w-3.5 h-3.5 text-cyan" />}
                >
                  ABOUT OUR CLINIC
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-[1.12] text-dark">
                  Redefining Dental Care,{' '}
                  <span className="text-cyan block sm:inline">
                    One Smile at a Time.
                  </span>
                </h2>
              </motion.div>

              {/* Supporting Description */}
              <motion.div variants={fadeInUp}>
                <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
                  We believe every smile deserves exceptional care. Our approach combines advanced dental technology, experienced specialists and a genuinely comfortable patient experience.
                </p>
              </motion.div>

              {/* Commitment to Personalized Dental Care */}
              <motion.div variants={fadeInUp}>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                  From subtle cosmetic enhancements to full-arch dental implant rehabilitation, our clinical philosophy centers on biomimetic preservation and radical transparency. Every treatment plan is custom-engineered using low-radiation 3D CBCT imaging and digital smile mockups, ensuring precise, pain-free outcomes tailored to your facial anatomy.
                </p>
              </motion.div>

              {/* Cyan-Highlighted Callout Element */}
              <motion.div
                variants={fadeInUp}
                className="p-4 sm:p-5 rounded-2xl bg-soft-cyan/60 border-l-4 border-cyan flex items-start gap-3.5 shadow-subtle"
              >
                <div className="w-8 h-8 rounded-xl bg-white text-cyan flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Sparkles className="w-4 h-4 text-cyan" />
                </div>
                <div className="text-sm text-neutral-800 leading-relaxed">
                  <strong className="text-cyan-800 font-bold block mb-0.5">
                    Personalized Dental Architecture
                  </strong>
                  No cookie-cutter treatments. We design biocompatible, aesthetic restorations tailored to your lifestyle, bite mechanics, and long-term oral wellness.
                </div>
              </motion.div>
            </motion.div>

            {/* 4-Item Statistics Grid */}
            <motion.div
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 gap-4 sm:gap-5 pt-2"
            >
              {STATS_DATA.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="p-4 sm:p-5 rounded-3xl bg-light-grey/80 hover:bg-white border border-neutral-200/70 hover:border-cyan/40 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark tracking-tight">
                        <StatCounter
                          target={stat.target}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                        />
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white text-cyan flex items-center justify-center shadow-subtle">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-neutral-800 tracking-tight">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 hidden sm:block">
                      {stat.subtext}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Action & Specialist Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-neutral-100"
            >
              <Button
                variant="primary"
                size="lg"
                pill
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-cyan-glow hover:shadow-cyan-glow-lg font-semibold px-7"
                onClick={scrollToContact}
              >
                Explore Our Clinic
              </Button>

              {/* Lead Doctor Credential Stamp */}
              <div className="flex items-center gap-3 py-1">
                <div className="w-10 h-10 rounded-full bg-soft-cyan border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
                  <Stethoscope className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <span className="text-xs font-bold text-dark block leading-none">
                    Board-Certified Team
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    ADA & AACD Accredited Specialists
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;
