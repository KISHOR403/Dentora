import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  GraduationCap,
  Stethoscope,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ToothIcon } from '@/assets/icons';
import { DoctorCard } from '@/components/DoctorCard';
import { CLINIC_INFO } from '@/constants/clinic';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

// Editable Sample Profiles Dataset
export const DOCTORS_DATA = [
  {
    id: 'alex-morgan',
    name: 'Dr. Alex Morgan',
    degrees: 'DDS, FAACD',
    specialization: 'Cosmetic Dentist',
    experience: '12+ Years',
    shortBio: 'Dedicated to crafting natural, confidence-restoring smile transformations with biomimetic ceramics.',
    biography:
      'Dr. Alex Morgan is a celebrated cosmetic dentist specializing in minimally invasive aesthetic smile design, custom porcelain veneers, and comprehensive facial smile harmonization. With over 12 years of clinical mastery, Dr. Morgan blends high-precision digital intraoral mapping with the artisanal touch of master dental ceramists. (Sample editable biography).',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    education: 'Columbia University College of Dental Medicine',
    certifications: [
      'Fellow, American Academy of Cosmetic Dentistry (FAACD)',
      'Digital Smile Design (DSD) Master Instructor',
      'Invisalign Diamond Top 1% Provider',
    ],
    expertise: [
      'Porcelain Veneers',
      'Digital Smile Architecture',
      'Composite Bonding',
      'Laser Gum Sculpting',
      'Aesthetic Whitening',
    ],
  },
  {
    id: 'sarah-williams',
    name: 'Dr. Sarah Williams',
    degrees: 'DMD, MS',
    specialization: 'Orthodontist',
    experience: '10+ Years',
    shortBio: 'Pioneering virtually invisible clear aligner treatments and accelerated orthodontic therapies.',
    biography:
      'Dr. Sarah Williams completed her specialized orthodontic residency at Harvard School of Dental Medicine. She has guided over 3,000 alignment patients to pristine bites utilizing cutting-edge 3D AI progress monitoring and non-invasive clear aligners. Her holistic treatment philosophy prioritizes airway health and long-term joint stability. (Sample editable biography).',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80',
    education: 'Harvard School of Dental Medicine',
    certifications: [
      'Board Certified Orthodontist (ABO)',
      'American Association of Orthodontists (AAO)',
      'Accelerated Orthodontics Clinical Fellow',
    ],
    expertise: [
      'Clear Aligners (Invisalign)',
      'Adult Orthodontics',
      'Airway-Friendly Expansion',
      'Discreet Ceramic Braces',
      'TMJ Bite Balance',
    ],
  },
  {
    id: 'james-anderson',
    name: 'Dr. James Anderson',
    degrees: 'DDS, FICOI',
    specialization: 'Dental Implant Specialist',
    experience: '15+ Years',
    shortBio: 'Renowned surgical reconstructive specialist in computer-navigated titanium implantology.',
    biography:
      'Dr. James Anderson is a Diplomate of the International Congress of Oral Implantologists with 15+ years devoted strictly to surgical dental reconstruction and bone regeneration. Recognized for zero-guesswork computer-guided navigation, Dr. Anderson restores permanent chewing function and youthfulness in single-tooth to full-mouth rehabilitation cases. (Sample editable biography).',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    education: 'NYU College of Dentistry • Surgical Fellowship',
    certifications: [
      'Diplomate, International Congress of Oral Implantologists (ICOI)',
      'American Academy of Implant Dentistry (AAID)',
      'Advanced 3D CBCT Surgical Certified',
    ],
    expertise: [
      'Computer-Guided Implants',
      'All-on-4 / All-on-6 Arch Reconstruction',
      'Biocompatible Bone Grafting',
      'Sinus Elevation',
      'Gentle Sedation Surgery',
    ],
  },
  {
    id: 'emily-carter',
    name: 'Dr. Emily Carter',
    degrees: 'DDS, MAGD',
    specialization: 'General Dentist',
    experience: '8+ Years',
    shortBio: 'Passionate advocate for anxiety-free, compassionate family and preventative oral wellness.',
    biography:
      'Dr. Emily Carter focuses on comprehensive family dental wellness, micro-invasive restorative care, and anxiety-free patient experiences. Her gentle touch, communicative chairside manner, and preventive protocols ensure patients of all ages feel genuinely relaxed and empowered in their oral health journeys. (Sample editable biography).',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    education: 'University of Pennsylvania School of Dental Medicine',
    certifications: [
      'Academy of General Dentistry (AGD)',
      'American Dental Association (ADA)',
      'Conscious Sedation & Comfort Certified',
    ],
    expertise: [
      'Comprehensive Digital Exams',
      'Biomimetic Ceramic Fillings',
      'Preventive Ultrasound Scaling',
      'Bruxism & Night Guards',
      'Emergency Dental Care',
    ],
  },
];

export function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const modalCloseButtonRef = useRef(null);

  // Keyboard accessibility (Escape key closes modal) & Body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedDoctor(null);
      }
    };

    if (selectedDoctor) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Auto focus close button on open
      setTimeout(() => {
        if (modalCloseButtonRef.current) {
          modalCloseButtonRef.current.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedDoctor]);

  const handleBookWithDoctor = (doctorName) => {
    setSelectedDoctor(null);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="doctors"
      className="relative py-20 sm:py-28 lg:py-36 bg-light-grey text-dark overflow-hidden select-none"
      aria-label="Meet Our Expert Dentists"
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-soft-cyan/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        {/* 1. Section Header */}
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
                icon={<Stethoscope className="w-3.5 h-3.5 text-cyan" />}
                className="bg-white/90 text-dark font-semibold shadow-subtle"
              >
                OUR EXPERT TEAM
              </Badge>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
                Meet the People Behind{' '}
                <span className="text-cyan block sm:inline">
                  Your Smile.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
                Get to know our dedicated dental specialists, combining clinical expertise with a compassionate approach to patient care.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Schedule Badge on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 flex items-center gap-3"
          >
            <div className="px-5 py-3 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-dark block leading-none">
                  Consultation Slots Open
                </span>
                <span className="text-[11px] text-neutral-500">
                  Accepting New Patients This Week
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Doctor Cards 4-Column Grid */}
        <motion.div
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {DOCTORS_DATA.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onViewProfile={(doc) => setSelectedDoctor(doc)}
            />
          ))}
        </motion.div>

        {/* 3. Team Accreditation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan text-white shadow-cyan-glow flex items-center justify-center shrink-0">
              <ToothIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-dark">
                Multidisciplinary Dental Board
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500">
                Every complex treatment plan undergoes collaborative review by our team of prosthodontists, implantologists, and orthodontists.
              </p>
            </div>
          </div>

          <Button
            variant="dark"
            size="md"
            pill
            rightIcon={<Calendar className="w-3.5 h-3.5 text-cyan" />}
            onClick={() => handleBookWithDoctor()}
            className="shrink-0 font-semibold px-6"
          >
            Meet With a Specialist
          </Button>
        </motion.div>
      </Container>

      {/* 4. Accessible Dentist Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-doctor-name"
          >
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-dark/75 backdrop-blur-md"
              onClick={() => setSelectedDoctor(null)}
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="relative w-full max-w-3xl bg-white rounded-[32px] sm:rounded-[36px] shadow-2xl border border-neutral-100 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-dark hover:text-cyan border border-neutral-200/80 shadow-sm flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label="Close doctor profile"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
                {/* Top Section: Photo + Quick Bio */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
                  
                  {/* Doctor Portrait */}
                  <div className="sm:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-100 shadow-md">
                    <img
                      src={selectedDoctor.image}
                      alt={`Portrait of ${selectedDoctor.name}, ${selectedDoctor.specialization}`}
                      width="400"
                      height="533"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="softCyan" size="sm" dot className="bg-white/95 text-dark font-semibold">
                        {selectedDoctor.experience} Exp.
                      </Badge>
                    </div>
                  </div>

                  {/* Header Info */}
                  <div className="sm:col-span-7 space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs uppercase font-bold tracking-widest text-cyan block">
                        {selectedDoctor.degrees}
                      </span>
                      <h3
                        id="modal-doctor-name"
                        className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight"
                      >
                        {selectedDoctor.name}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-neutral-700">
                        {selectedDoctor.specialization}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-light-grey/80 border border-neutral-200/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <GraduationCap className="w-4 h-4 text-cyan shrink-0" />
                        <span>{selectedDoctor.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <Award className="w-4 h-4 text-cyan shrink-0" />
                        <span>{selectedDoctor.certifications[0]}</span>
                      </div>
                    </div>

                    {/* Biography */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Specialist Background
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {selectedDoctor.biography}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Areas of Expertise */}
                <div className="space-y-3 pt-2 border-t border-neutral-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Key Areas of Clinical Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-soft-cyan/60 text-cyan-900 border border-cyan-200/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Verified Board Credentials & Insured Practice</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="md"
                      pill
                      onClick={() => setSelectedDoctor(null)}
                      className="w-full sm:w-auto"
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      pill
                      rightIcon={<Calendar className="w-4 h-4" />}
                      onClick={() => handleBookWithDoctor(selectedDoctor.name)}
                      className="w-full sm:w-auto shadow-cyan-glow"
                    >
                      Book with {selectedDoctor.name.split(' ')[1]}
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Doctors;
