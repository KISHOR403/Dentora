import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ToothIcon } from '@/assets/icons';
import { Newsletter } from '@/components/Newsletter';
import { CLINIC_INFO } from '@/constants/clinic';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

// Custom Social Media SVG Icons
const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com' },
];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Dentists', href: '#doctors' },
  { label: 'Testimonials', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#appointment' },
];

const SERVICES_LINKS = [
  { label: 'General Dentistry', href: '#services' },
  { label: 'Cosmetic Dentistry', href: '#services' },
  { label: 'Dental Implants', href: '#services' },
  { label: 'Teeth Whitening', href: '#services' },
  { label: 'Orthodontics', href: '#services' },
  { label: 'Root Canal Treatment', href: '#services' },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer
      className="bg-dark text-white relative overflow-hidden select-none border-t border-neutral-800"
      aria-label="Dentora Clinic Footer"
    >
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-soft-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide" className="pt-16 sm:pt-20 lg:pt-24 pb-12">
        {/* 1. Newsletter Subscription Area */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <Newsletter />
        </div>

        {/* 2. Four Responsive Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Socials (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan flex items-center justify-center text-white shadow-cyan-glow shrink-0">
                <ToothIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  {CLINIC_INFO.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
                </span>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                  Dental Clinic
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              Creating confident smiles through exceptional dental care, modern technology, and a patient-first approach.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Follow Our Practice
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan text-neutral-300 hover:text-white border border-white/10 hover:border-cyan flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-cyan-glow"
                      aria-label={`Follow Dentora on ${item.name} (opens in a new tab)`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-neutral-400 hover:text-cyan transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-cyan group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-sm text-neutral-400 hover:text-cyan transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-cyan group-hover:translate-x-0.5 transition-all" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-cyan flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-white hover:text-cyan font-bold transition-colors block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-cyan flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                    Concierge Desk
                  </span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-white hover:text-cyan font-medium transition-colors block break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-cyan flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                    Location
                  </span>
                  <p className="text-neutral-300 leading-snug">
                    {CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-cyan flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                    Working Hours
                  </span>
                  <p className="text-neutral-300 leading-snug">
                    Mon – Fri: 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-neutral-400 text-xs">
                    Sat: 9:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {CLINIC_INFO.name} Dental Clinic. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-neutral-400">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy: Dentora upholds strict HIPAA compliance and patient data privacy standards.');
              }}
              className="hover:text-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert('Terms and Conditions: Standard clinical practice terms apply to all scheduled appointments.');
              }}
              className="hover:text-cyan transition-colors"
            >
              Terms and Conditions
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-cyan text-white border border-white/15 hover:border-cyan text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-cyan-glow group cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
