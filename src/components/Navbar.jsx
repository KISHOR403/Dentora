import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Menu,
  X,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { ToothIcon } from '@/assets/icons';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CLINIC_INFO } from '@/constants/clinic';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setActiveSection(href.replace('#', ''));
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Sticky Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4 sm:px-6 lg:px-8',
          isScrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-7'
        )}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 select-none',
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl border border-black/8 shadow-card text-dark'
              : 'bg-dark/45 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/15 text-white'
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-full"
            aria-label={`${CLINIC_INFO.name} Dental Clinic — Return to top`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-cyan flex items-center justify-center text-white shadow-cyan-glow transition-transform duration-300 group-hover:scale-105 shrink-0">
              <ToothIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight leading-none">
                  {CLINIC_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
              </div>
              <span
                className={cn(
                  'text-[10px] tracking-widest uppercase font-semibold transition-colors duration-300',
                  isScrolled ? 'text-neutral-500' : 'text-neutral-300'
                )}
              >
                Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    'relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan',
                    isScrolled
                      ? isActive
                        ? 'text-cyan font-semibold'
                        : 'text-neutral-600 hover:text-dark hover:bg-black/5'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-200 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className={cn(
                        'absolute inset-0 rounded-full -z-10',
                        isScrolled ? 'bg-soft-cyan/60' : 'bg-white/15'
                      )}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Phone + Book Appointment */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className={cn(
                'hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-300',
                isScrolled
                  ? 'text-neutral-700 hover:text-cyan hover:bg-black/5'
                  : 'text-neutral-200 hover:text-white hover:bg-white/10'
              )}
            >
              <Phone className="w-3.5 h-3.5 text-cyan" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              pill
              rightIcon={<Calendar className="w-3.5 h-3.5" />}
              className="shadow-cyan-glow hover:shadow-cyan-glow-lg text-xs font-semibold px-4 py-2"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="primary"
              size="sm"
              pill
              className="sm:hidden text-xs px-3 py-1.5 h-8 font-semibold"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan',
                isScrolled
                  ? 'bg-light-grey text-dark hover:bg-neutral-200'
                  : 'bg-white/15 text-white hover:bg-white/25'
              )}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer / Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-dark/70 backdrop-blur-md md:hidden flex flex-col justify-between pt-24 pb-8 px-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-neutral-100 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan flex items-center justify-center text-white">
                    <ToothIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-base">{CLINIC_INFO.name}</h3>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Navigation</p>
                  </div>
                </div>

                <Badge variant="softCyan" dot size="sm">
                  Accepting Patients
                </Badge>
              </div>

              {/* Navigation Links List */}
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + idx * 0.04 }}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-neutral-800 hover:text-cyan hover:bg-soft-cyan/40 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-cyan" />
                  </motion.a>
                ))}
              </nav>

              {/* Quick Info & Direct CTAs */}
              <div className="pt-2 border-t border-neutral-100 space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  pill
                  className="w-full justify-center shadow-cyan-glow"
                  leftIcon={<Calendar className="w-4 h-4" />}
                  onClick={() => {
                    handleLinkClick('#contact');
                  }}
                >
                  Book Appointment
                </Button>

                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-dark bg-light-grey hover:bg-neutral-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </motion.div>

            {/* Bottom Info in Drawer */}
            <div className="text-center text-xs text-white/70 space-y-1">
              <p className="flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan" /> Mon – Fri: 8:00 AM – 7:00 PM
              </p>
              <p className="text-white/50">450 Lexington Avenue, Suite 1800, New York</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
