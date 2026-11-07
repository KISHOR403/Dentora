import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Navigation,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ToothIcon } from '@/assets/icons';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CLINIC_INFO } from '@/constants/clinic';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

const CLINIC_BENEFITS = [
  'Zero Long Waits — Average wait under 7 minutes',
  'Complimentary 3D digital scan during first consultation',
  'Transparent itemized pricing with zero surprise fees',
  'Anxiety-free comfort suites & gentle sedation options',
];

export function Appointment() {
  return (
    <section
      id="appointment"
      className="relative py-20 sm:py-28 lg:py-36 bg-light-grey text-dark overflow-hidden select-none scroll-mt-20"
      aria-label="Book an Appointment and Clinic Contact"
    >
      {/* Anchor alias so both #appointment and #contact land here seamlessly */}
      <div id="contact" className="absolute top-0 left-0 scroll-mt-20" />

      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-soft-cyan/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Compelling Copy, Benefits, Contact Cards & Map Container (Cols 1-6) */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Header Content */}
            <div className="space-y-4">
              <motion.div variants={fadeInUp}>
                <Badge
                  variant="softCyan"
                  size="md"
                  dot
                  icon={<CalendarCheck className="w-3.5 h-3.5 text-cyan" />}
                  className="bg-white/95 text-dark font-semibold shadow-subtle"
                >
                  ONLINE CONCIERGE
                </Badge>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
                  Your Healthier Smile{' '}
                  <span className="text-cyan block sm:inline">
                    Starts Here.
                  </span>
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                  Take the first step towards confident, comfortable dental care. Request an appointment with our team.
                </p>
              </motion.div>
            </div>

            {/* Clinic Benefits List */}
            <motion.div
              variants={fadeInUp}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle space-y-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                The Dentora Patient Experience
              </h3>
              <ul className="space-y-2.5">
                {CLINIC_BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interactive Contact Cards (Phone, Email, Address, Hours) */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle flex items-start gap-3.5 group hover:border-cyan/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Phone & Emergency
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm sm:text-base font-extrabold text-dark hover:text-cyan transition-colors block truncate"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <span className="text-[11px] text-neutral-500">24/7 Emergency Line</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle flex items-start gap-3.5 group hover:border-cyan/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-sm sm:text-base font-extrabold text-dark hover:text-cyan transition-colors block truncate"
                  >
                    {CLINIC_INFO.email}
                  </a>
                  <span className="text-[11px] text-neutral-500">Fast 2-Hour Response</span>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle flex items-start gap-3.5 group hover:border-cyan/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Clinic Address
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-dark truncate">
                    {CLINIC_INFO.address.street}
                  </p>
                  <span className="text-[11px] text-neutral-500">
                    {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle flex items-start gap-3.5 group hover:border-cyan/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Operating Hours
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-dark truncate">
                    Mon – Fri: 8:00 AM – 7:00 PM
                  </p>
                  <span className="text-[11px] text-neutral-500">Sat: 9:00 AM – 4:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Map Area / Container */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-white shadow-subtle p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Find Our Location
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-soft-cyan text-cyan-900">
                  Complimentary Valet Parking
                </span>
              </div>

              {/* Stylized Modern Interactive Map Container Ready for Google Maps */}
              <div className="w-full h-52 sm:h-60 rounded-2xl bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center group">
                {/* Clean Map Graphic Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#24AEC5_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                
                {/* Center Clinic Marker */}
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-2xl bg-dark text-white flex items-center justify-center shadow-2xl border-2 border-white animate-bounce">
                    <ToothIcon className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="mt-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-200 shadow-md">
                    <span className="text-xs font-bold text-dark block">
                      {CLINIC_INFO.name} Dental Suite
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      Lexington Ave & 45th Street • Grand Central Transit
                    </span>
                  </div>
                </div>

                {/* External Maps Action Pill */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address.street + ', ' + CLINIC_INFO.address.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-dark hover:text-cyan border border-neutral-200 text-xs font-bold shadow-sm transition-all"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3 text-cyan" />
                </a>

                {/* Developer Integration Note in Comments:
                  To embed a live Google Maps iframe, simply replace this container's content with:
                  <iframe title="Dentora Location Map" src="https://www.google.com/maps/embed?..." className="w-full h-full border-0" allowFullScreen loading="lazy" />
                */}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Elegant Appointment Form (Cols 7-12) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="lg:col-span-6"
          >
            <AppointmentForm />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Appointment;
