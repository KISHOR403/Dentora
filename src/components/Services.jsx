import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  ToothIcon,
  SparkleIcon,
  ImplantIcon,
  BracesIcon,
  ShieldDentalIcon,
} from '@/assets/icons';
import { CLINIC_INFO } from '@/constants/clinic';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from '@/utils/gsapUtils';
import { cn } from '@/utils/cn';

// Services dataset with designated editorial layout weights
const SERVICES_DATA = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with personalized cosmetic dental treatments.',
    details: 'Porcelain veneers, composite bonding, and bespoke digital smile architecture designed to harmonize with your facial proportions.',
    category: 'Aesthetic Design',
    badge: 'Most Popular',
    icon: SparkleIcon,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dentora cosmetic dentist sculpting radiant porcelain smile for patient',
    colSpan: 'lg:col-span-7',
    featured: true,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with durable and natural-looking solutions.',
    details: 'Computer-guided 3D titanium implant posts with lifelike ceramic crowns that restore 100% natural chewing strength.',
    category: 'Permanent Restoration',
    badge: '3D Guided',
    icon: ImplantIcon,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    alt: 'High-tech dental implant surgical suite with advanced digital imaging',
    colSpan: 'lg:col-span-5',
    featured: false,
  },
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive dental examinations, cleaning and preventive care.',
    details: 'Ultrasound scaling, deep biofilm prophylaxis, digital cancer screenings, and preventive remineralization treatments.',
    category: 'Preventive Care',
    badge: 'Routine Wellness',
    icon: ShieldDentalIcon,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dentist conducting gentle comprehensive examination with modern sterile tools',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter smile.',
    details: 'Clinical laser activation lifting deep enamel stains up to 8 shades in a single comfortable 45-minute appointment.',
    category: 'Laser Brightening',
    badge: '45-Min Results',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Patient receiving non-invasive laser teeth whitening treatment with protective eyewear',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Modern teeth alignment solutions for confident smiles.',
    details: 'Virtually invisible clear aligners and discreet aesthetic braces with 3D AI progress tracking for accelerated alignment.',
    category: 'Clear Aligners',
    badge: 'Virtually Invisible',
    icon: BracesIcon,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    alt: 'Patient smiling during orthodontics consultation discussing clear aligner plan',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Advanced treatment designed to relieve pain and preserve natural teeth.',
    details: 'Microscopic endodontic therapy with 3D rotary instrumentation that eliminates infection pain while safeguarding your natural tooth structure.',
    category: 'Endodontics',
    badge: '100% Pain-Free Guarantee',
    icon: ToothIcon,
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80',
    alt: 'Precision microscopic endodontic therapy preserving natural tooth structure',
    colSpan: 'lg:col-span-8',
    featured: true,
    horizontal: true,
  },
];

// Reusable ServiceCard component with asymmetrical support
function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  if (service.horizontal) {
    return (
      <motion.article
        variants={fadeInUp}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: LUXURY_EASE }}
        className={cn(
          service.colSpan,
          'group relative rounded-[32px] sm:rounded-[36px] bg-white border border-neutral-200/80 hover:border-cyan/40 p-5 sm:p-7 shadow-subtle hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 lg:gap-8 items-center cursor-pointer'
        )}
        onClick={() => onSelect(service.title)}
      >
        {/* Left Side: Photo */}
        <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-full rounded-2xl sm:rounded-3xl overflow-hidden relative shrink-0">
          <img
            src={service.image}
            alt={service.alt}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-3.5 left-3.5">
            <Badge variant="softCyan" size="sm" dot className="bg-white/95 text-dark font-semibold shadow-sm">
              {service.badge}
            </Badge>
          </div>

          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-200">
              {service.category}
            </span>
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-cyan">
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Right Side: Information Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2 sm:py-3 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-bold text-cyan">
                {service.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-light-grey text-neutral-600">
                Gentle Care
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight group-hover:text-cyan transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
              {service.description}
            </p>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              {service.details}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-400">
              Biomimetic Endodontics
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan group-hover:text-cyan-700 transition-colors">
              <span>Learn More</span>
              <div className="w-8 h-8 rounded-full bg-soft-cyan text-cyan group-hover:bg-cyan group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: LUXURY_EASE }}
      className={cn(
        service.colSpan,
        'group relative rounded-[32px] sm:rounded-[36px] bg-white border border-neutral-200/80 hover:border-cyan/40 p-5 sm:p-6 shadow-subtle hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer'
      )}
      onClick={() => onSelect(service.title)}
    >
      {/* Photo Container */}
      <div className={cn(
        'w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mb-5 sm:mb-6',
        service.featured ? 'h-64 sm:h-80 md:h-96' : 'h-52 sm:h-64'
      )}>
        <img
          src={service.image}
          alt={service.alt}
          width="1000"
          height="600"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />

        {/* Floating Top Badge */}
        <div className="absolute top-3.5 left-3.5">
          <Badge
            variant="softCyan"
            size="sm"
            dot
            className="bg-white/95 text-dark font-semibold shadow-sm"
          >
            {service.badge}
          </Badge>
        </div>

        {/* Floating Category Indicator */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-200">
            {service.category}
          </span>
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-cyan shadow-sm">
            <Icon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Information Area */}
      <div className="space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight group-hover:text-cyan transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {service.description}
          </p>
          {service.featured && (
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
              {service.details}
            </p>
          )}
        </div>

        {/* Interactive Learn More Footer */}
        <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-400">
            Custom Consultation
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan group-hover:text-cyan-700 transition-colors">
            <span>Learn More</span>
            <div className="w-7 h-7 rounded-full bg-soft-cyan text-cyan group-hover:bg-cyan group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const sectionRef = useRef(null);

  // GSAP ScrollTrigger for smooth section-level ambient background parallax
  useGsapScroll(() => {
    gsap.fromTo(
      '.services-ambient-glow',
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, sectionRef);

  const scrollToContact = (treatment = '') => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-light-grey text-dark overflow-hidden select-none"
      aria-label="Dentora Dental Services"
    >
      {/* Ambient Radial Gradient Accents */}
      <div className="services-ambient-glow absolute top-1/4 -left-48 w-96 h-96 bg-soft-cyan/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="services-ambient-glow absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        {/* 1. Section Header: Label, Headline, Description, and View All CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18 lg:mb-20">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="softCyan"
                size="md"
                dot
                icon={<ToothIcon className="w-3.5 h-3.5 text-cyan" />}
                className="bg-white/90 text-dark font-semibold shadow-subtle"
              >
                OUR SERVICES
              </Badge>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
                Complete Dental Care,{' '}
                <span className="text-cyan block sm:inline">
                  Designed Around You.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
                From preventive care to complete smile transformations, discover personalized treatments delivered with precision and compassion.
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 flex items-center gap-3"
          >
            <Button
              variant="dark"
              size="lg"
              pill
              rightIcon={<ArrowRight className="w-4 h-4 text-cyan" />}
              className="shadow-sm hover:shadow-card font-semibold px-6"
              onClick={() => scrollToContact()}
            >
              View All Services
            </Button>
          </motion.div>
        </div>

        {/* 2. Asymmetrical Editorial Services Grid */}
        <motion.div
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 lg:gap-8"
        >
          {/* Service Cards 1 to 5 */}
          {SERVICES_DATA.slice(0, 5).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={scrollToContact}
            />
          ))}

          {/* Service Card 6 (Root Canal Treatment - Horizontal Span 8) */}
          <ServiceCard
            service={SERVICES_DATA[5]}
            onSelect={scrollToContact}
          />

          {/* Complementary Card: Personalized Concierge Consultation (Span 4) */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: LUXURY_EASE }}
            className="lg:col-span-4 rounded-[32px] sm:rounded-[36px] bg-dark text-white p-7 sm:p-8 flex flex-col justify-between shadow-dark-float border border-neutral-800 relative overflow-hidden group cursor-pointer"
            onClick={() => scrollToContact()}
          >
            {/* Background Subtle Cyan Flare */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-cyan/25 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-cyan text-white shadow-cyan-glow flex items-center justify-center">
                <ToothIcon className="w-7 h-7" />
              </div>

              <div>
                <Badge variant="softCyan" size="sm" className="mb-2 bg-white/10 text-cyan border-none">
                  Tailored To You
                </Badge>
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan transition-colors">
                  Need a Bespoke Treatment Plan?
                </h3>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Consult directly with our multidisciplinary clinical team. We evaluate your 3D digital records to craft a personalized roadmap.
              </p>

              <div className="space-y-2 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                  <span>Comprehensive 3D Digital Scan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                  <span>Same-Day Transparent Treatment Estimate</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-neutral-400">
                Concierge Desk
              </span>
              <Button
                variant="primary"
                size="sm"
                pill
                rightIcon={<Calendar className="w-3.5 h-3.5" />}
                className="shadow-cyan-glow text-xs font-semibold px-4"
              >
                Schedule Now
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. Bottom Assurance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-dark">
                The Dentora Clinical Quality Promise
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500">
                Every procedure is performed in sterile surgical suites utilizing FDA-cleared biomaterials and micro-precision technology.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="md"
              pill
              leftIcon={<Phone className="w-3.5 h-3.5 text-cyan" />}
              onClick={() => {
                window.location.href = `tel:${CLINIC_INFO.phone}`;
              }}
            >
              Call {CLINIC_INFO.phone}
            </Button>
            <Button
              variant="primary"
              size="md"
              pill
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => scrollToContact()}
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
