import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Doctors } from '@/components/Doctors';
import { Container } from '@/components/ui/Container';
import { ToothIcon } from '@/assets/icons';
import { CLINIC_INFO } from '@/constants/clinic';
import { CheckCircle2, Phone, MapPin, Clock } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-white text-dark flex flex-col font-sans selection:bg-cyan selection:text-white">
      {/* 1. Floating Sticky Navbar */}
      <Navbar />

      {/* 2. Full-Width Cinematic Hero Section */}
      <main className="flex-1">
        <Hero />

        {/* 3. About Our Clinic Section */}
        <About />

        {/* 4. Complete Dental Services Section */}
        <Services />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Meet Our Expert Doctors Section */}
        <Doctors />

        {/* Quick Contact & Working Hours Bar for `#contact` anchor */}
        <section id="contact" className="scroll-mt-24 bg-light-grey border-t border-b border-black/5 py-12">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-subtle">
                <div className="w-12 h-12 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Phone & Emergency</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-base font-bold text-dark hover:text-cyan transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-500">24/7 Dental Emergency Care</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-subtle">
                <div className="w-12 h-12 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Clinic Location</span>
                  <p className="text-sm font-bold text-dark">{CLINIC_INFO.address.street}</p>
                  <p className="text-xs text-neutral-500">{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-subtle">
                <div className="w-12 h-12 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Working Hours</span>
                  <p className="text-sm font-bold text-dark">Mon – Fri: 8:00 AM – 7:00 PM</p>
                  <p className="text-xs text-neutral-500">Sat: 9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 border-t border-neutral-800">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-cyan flex items-center justify-center text-white shadow-cyan-glow">
                <ToothIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">{CLINIC_INFO.name} Dental Clinic</span>
                <p className="text-xs text-neutral-400">Precision Aesthetic & Advanced Oral Health</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> ADA Accredited
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> 3D Guided Surgery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> Pain-Free Technology
              </span>
            </div>

            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
