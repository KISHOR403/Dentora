import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Container,
  Section,
  Heading,
  Text,
  Input,
} from '@/components/ui';
import {
  ToothIcon,
  ImplantIcon,
  SparkleIcon,
  ShieldDentalIcon,
  BracesIcon,
} from '@/assets/icons';
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Activity,
} from 'lucide-react';
import { COLORS, CLINIC_INFO } from '@/constants';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useGsapScroll } from '@/hooks';
import { gsap } from '@/utils/gsapUtils';

export function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [demoLoading, setDemoLoading] = useState(false);
  const containerRef = useRef(null);
  const gsapBoxRef = useRef(null);

  // GSAP Scroll / Interaction test hook
  useGsapScroll(() => {
    if (gsapBoxRef.current) {
      gsap.to(gsapBoxRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }
  }, containerRef);

  const toggleLoading = () => {
    setDemoLoading(true);
    setTimeout(() => setDemoLoading(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-dark flex flex-col font-sans selection:bg-cyan selection:text-white">
      {/* Top Banner / System Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <Container size="wide" className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan flex items-center justify-center text-white shadow-cyan-glow">
              <ToothIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-dark flex items-center gap-1.5">
                {CLINIC_INFO.name}
                <span className="text-xs px-2 py-0.5 rounded-full bg-soft-cyan text-cyan-800 font-semibold tracking-wide">
                  Design System
                </span>
              </span>
              <p className="text-xs text-neutral-400 font-medium">Architecture & Design Foundation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="softCyan" dot size="sm">
              Tailwind + Framer + GSAP Ready
            </Badge>
            <Button
              variant="dark"
              size="sm"
              leftIcon={<Sparkles className="w-3.5 h-3.5 text-cyan" />}
            >
              v1.0 Tokens
            </Button>
          </div>
        </Container>
      </header>

      {/* Hero / Introduction to Design System */}
      <Section bg="subtleGradient" spacing="md" className="border-b border-black/5">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="softCyan" size="md" icon={<SparkleIcon className="w-3.5 h-3.5 text-cyan" />}>
              Premium Healthcare Foundation
            </Badge>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Heading variant="display">
              Precision Dental <span className="text-cyan">Design System</span>
            </Heading>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Text variant="lead">
              A high-end, responsive architectural foundation for Dentora Dental Clinic. Built with modern color tokens, strict typography scales, atomic UI primitives, Framer Motion transitions, and GSAP integrations.
            </Text>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={toggleLoading}
              isLoading={demoLoading}
            >
              Interactive Action
            </Button>
            <Button
              variant="soft"
              size="lg"
              leftIcon={<Calendar className="w-4 h-4 text-cyan" />}
            >
              Soft Cyan Action
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Phone className="w-4 h-4" />}
            >
              Outline Button
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* 1. Color Palette Tokens */}
      <Section bg="white" spacing="md" className="border-b border-black/5">
        <div className="space-y-8">
          <div>
            <Text variant="eyebrow">Design Tokens</Text>
            <Heading variant="h2">Specified Brand Color Palette</Heading>
            <Text variant="body" className="mt-1">
              Curated dental healthcare color system tailored for pristine clinic branding.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Primary Cyan */}
            <div className="rounded-3xl p-5 border border-cyan/30 bg-cyan text-white shadow-cyan-glow flex flex-col justify-between h-48">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-80">Primary Brand</span>
                <h4 className="text-2xl font-bold mt-1">Cyan</h4>
              </div>
              <div className="font-mono text-sm bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-xl w-fit">
                #24AEC5
              </div>
            </div>

            {/* Soft Cyan */}
            <div className="rounded-3xl p-5 border border-cyan-200 bg-soft-cyan text-dark flex flex-col justify-between h-48">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-800">Soft Surface</span>
                <h4 className="text-2xl font-bold mt-1 text-dark">Soft Cyan</h4>
              </div>
              <div className="font-mono text-sm bg-white/70 px-3 py-1.5 rounded-xl w-fit text-cyan-900 border border-cyan-200">
                #DDF5F7
              </div>
            </div>

            {/* Light Grey */}
            <div className="rounded-3xl p-5 border border-neutral-200 bg-light-grey text-dark flex flex-col justify-between h-48">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Neutral Canvas</span>
                <h4 className="text-2xl font-bold mt-1">Light Grey</h4>
              </div>
              <div className="font-mono text-sm bg-white px-3 py-1.5 rounded-xl w-fit text-neutral-800 border border-neutral-200">
                #F5F5F5
              </div>
            </div>

            {/* Black */}
            <div className="rounded-3xl p-5 border border-neutral-800 bg-dark text-white shadow-dark-float flex flex-col justify-between h-48">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-60">High Contrast</span>
                <h4 className="text-2xl font-bold mt-1">Deep Black</h4>
              </div>
              <div className="font-mono text-sm bg-white/10 px-3 py-1.5 rounded-xl w-fit text-white">
                #111111
              </div>
            </div>

            {/* Pure White */}
            <div className="rounded-3xl p-5 border border-neutral-200 bg-white text-dark shadow-subtle flex flex-col justify-between h-48">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Clinical Pure</span>
                <h4 className="text-2xl font-bold mt-1">Pure White</h4>
              </div>
              <div className="font-mono text-sm bg-light-grey px-3 py-1.5 rounded-xl w-fit text-neutral-800 border border-neutral-200">
                #FFFFFF
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Typography Scale */}
      <Section bg="grey" spacing="md" className="border-b border-black/5">
        <div className="space-y-8">
          <div>
            <Text variant="eyebrow">Typography System</Text>
            <Heading variant="h2">Plus Jakarta Sans Scale</Heading>
            <Text variant="body" className="mt-1">
              Geometric, clean, and clinical typography hierarchy designed for legibility and authority.
            </Text>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-subtle space-y-8 divide-y divide-neutral-100">
            <div className="space-y-1">
              <span className="text-xs font-mono text-neutral-400">Display / 4.5rem (72px)</span>
              <Heading variant="display">World-Class Smile Design</Heading>
            </div>

            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-neutral-400">Heading 1 / 3.75rem (60px)</span>
              <Heading variant="h1">Advanced Digital Implantology</Heading>
            </div>

            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-neutral-400">Heading 2 / 2.75rem (44px)</span>
              <Heading variant="h2">Pain-Free Precision & Patient Comfort</Heading>
            </div>

            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-neutral-400">Heading 3 / 2rem (32px)</span>
              <Heading variant="h3">Cosmetic Veneers & Full Arch Rehabilitation</Heading>
            </div>

            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-neutral-400">Lead Text / 1.25rem (20px)</span>
              <Text variant="lead">
                Our clinic combines world-renowned specialists with cutting-edge 3D intraoral diagnostics to deliver customized, non-invasive treatment plans.
              </Text>
            </div>

            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-neutral-400">Body Text / 1rem (16px)</span>
              <Text variant="body">
                Every smile transformation begins with comprehensive digital smile design, ensuring patients preview and approve their aesthetic results prior to any procedure.
              </Text>
            </div>

            <div className="pt-6 flex flex-wrap gap-6 items-center">
              <div>
                <span className="text-xs font-mono text-neutral-400 block mb-1">Eyebrow / Overline</span>
                <Text variant="eyebrow">Board-Certified Dental Surgery</Text>
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 block mb-1">Small / Meta</span>
                <Text variant="small">FDA Approved • Biocompatible Ceramics</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Reusable Button Styles */}
      <Section bg="white" spacing="md" className="border-b border-black/5">
        <div className="space-y-8">
          <div>
            <Text variant="eyebrow">Interactive Primitives</Text>
            <Heading variant="h2">Button Variants & Sizing System</Heading>
            <Text variant="body" className="mt-1">
              Motion-enhanced buttons featuring micro-interactions, loading states, and icon slots.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Variant */}
            <div className="p-6 rounded-3xl bg-light-grey/60 border border-neutral-200/80 space-y-4">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">Primary (Cyan)</div>
              <div className="flex flex-col gap-3 items-start">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Book Consultation
                </Button>
                <Button variant="primary" size="md">
                  Confirm Booking
                </Button>
                <Button variant="primary" size="sm">
                  Quick View
                </Button>
              </div>
            </div>

            {/* Soft Cyan Variant */}
            <div className="p-6 rounded-3xl bg-light-grey/60 border border-neutral-200/80 space-y-4">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">Soft Cyan</div>
              <div className="flex flex-col gap-3 items-start">
                <Button variant="soft" size="lg" leftIcon={<Calendar className="w-4 h-4 text-cyan" />}>
                  View Schedule
                </Button>
                <Button variant="soft" size="md">
                  Treatment Plans
                </Button>
                <Button variant="soft" size="sm">
                  Download Guide
                </Button>
              </div>
            </div>

            {/* Dark Luxury Variant */}
            <div className="p-6 rounded-3xl bg-light-grey/60 border border-neutral-200/80 space-y-4">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">Dark Luxury (#111)</div>
              <div className="flex flex-col gap-3 items-start">
                <Button variant="dark" size="lg" rightIcon={<ArrowRight className="w-4 h-4 text-cyan" />}>
                  Virtual Tour
                </Button>
                <Button variant="dark" size="md">
                  Doctor Profile
                </Button>
                <Button variant="dark" size="sm">
                  Emergency Line
                </Button>
              </div>
            </div>

            {/* Outlines & States */}
            <div className="p-6 rounded-3xl bg-light-grey/60 border border-neutral-200/80 space-y-4">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">Outline & States</div>
              <div className="flex flex-col gap-3 items-start">
                <Button variant="outline" size="md">
                  Secondary Action
                </Button>
                <Button variant="outlineCyan" size="md">
                  Cyan Outline
                </Button>
                <Button variant="primary" size="md" isLoading>
                  Processing...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Dental Icons & Badges Showcase */}
      <Section bg="softCyan" spacing="md" className="border-b border-black/5">
        <div className="space-y-8">
          <div>
            <Text variant="eyebrow">Asset Organization</Text>
            <Heading variant="h2">Custom Dental SVGs & Status Badges</Heading>
            <Text variant="body" className="mt-1">
              Bespoke dental icons and clinic status badges with live pulse indicators.
            </Text>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-cyan/20 shadow-subtle flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center">
                <ToothIcon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm">General Tooth</span>
              <Badge variant="softCyan" size="sm">Anatomical SVG</Badge>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-cyan/20 shadow-subtle flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-cyan text-white shadow-cyan-glow flex items-center justify-center">
                <ImplantIcon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm">Titanium Implant</span>
              <Badge variant="cyan" size="sm">Surgical Precision</Badge>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-cyan/20 shadow-subtle flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center">
                <SparkleIcon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm">Cosmetic Sparkle</span>
              <Badge variant="softCyan" size="sm">Laser Whitening</Badge>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-cyan/20 shadow-subtle flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-dark text-white flex items-center justify-center">
                <ShieldDentalIcon className="w-8 h-8 text-cyan" />
              </div>
              <span className="font-semibold text-sm">Protective Care</span>
              <Badge variant="dark" size="sm">Hygiene & Safety</Badge>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-cyan/20 shadow-subtle flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-light-grey text-neutral-800 flex items-center justify-center">
                <BracesIcon className="w-8 h-8 text-cyan" />
              </div>
              <span className="font-semibold text-sm">Clear Aligners</span>
              <Badge variant="grey" size="sm">Orthodontics</Badge>
            </div>
          </div>

          {/* Status Badges Row */}
          <div className="flex flex-wrap gap-3 items-center pt-4">
            <Badge variant="softCyan" dot size="md">
              Accepting New Patients Today
            </Badge>
            <Badge variant="cyan" size="md" icon={<Star className="w-3.5 h-3.5" />}>
              5.0 Star Rating (850+ Verified Reviews)
            </Badge>
            <Badge variant="dark" size="md" icon={<CheckCircle2 className="w-3.5 h-3.5 text-cyan" />}>
              Board Certified Specialists
            </Badge>
            <Badge variant="outlineCyan" size="md" icon={<Activity className="w-3.5 h-3.5 text-cyan" />}>
              Emergency Care 24/7
            </Badge>
          </div>
        </div>
      </Section>

      {/* 5. Reusable Card & Surface System */}
      <Section bg="white" spacing="md" className="border-b border-black/5">
        <div className="space-y-8">
          <div>
            <Text variant="eyebrow">Container & Surface Architecture</Text>
            <Heading variant="h2">Card Archetypes & Glass Surfaces</Heading>
            <Text variant="body" className="mt-1">
              Versatile card components ready for treatments, patient reviews, pricing, and specialist bios.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* White Floating Card */}
            <Card variant="white" interactive>
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-soft-cyan text-cyan flex items-center justify-center mb-2">
                  <SparkleIcon className="w-6 h-6" />
                </div>
                <CardTitle>Porcelain Veneers</CardTitle>
                <CardDescription>Ultra-thin, custom sculpted aesthetic shells.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Engineered with medical-grade lithium disilicate for natural translucency, stain resistance, and 15+ year longevity.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan">From $950 / tooth</span>
                  <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Light Grey Minimalist Card */}
            <Card variant="grey" interactive>
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-white text-dark shadow-subtle flex items-center justify-center mb-2">
                  <ImplantIcon className="w-6 h-6 text-cyan" />
                </div>
                <CardTitle>3D Guided Implants</CardTitle>
                <CardDescription>Permanent tooth restoration with titanium posts.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Precision computer-navigated placement for zero guesswork, minimal recovery time, and lifetime durability.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-800">Lifetime Warranty</span>
                  <Button variant="outline" size="sm">
                    Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Luxury Dark Card */}
            <Card variant="dark" interactive>
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-cyan text-white shadow-cyan-glow flex items-center justify-center mb-2">
                  <ToothIcon className="w-6 h-6" />
                </div>
                <CardTitle>Full Mouth Rehabilitation</CardTitle>
                <CardDescription className="text-neutral-400">Comprehensive restorative dental architecture.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Full functional and aesthetic overhaul restoring chewing comfort, jaw alignment, and a youthful facial profile.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Badge variant="softCyan" size="sm">Bespoke Suite</Badge>
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* 6. Form Input & Appointment Component System */}
      <Section bg="grey" spacing="md" className="border-b border-black/5">
        <div className="space-y-8 max-w-3xl">
          <div>
            <Text variant="eyebrow">Form Architecture</Text>
            <Heading variant="h2">Concierge Booking Inputs</Heading>
            <Text variant="body" className="mt-1">
              Ergonomic input fields with soft cyan focus glow, validation states, and icon decorations.
            </Text>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-subtle space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                placeholder="e.g. Dr. Eleanor Vance"
              />
              <Input
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                leftIcon={<Phone className="w-4 h-4" />}
              />
            </div>

            <Input
              label="Preferred Treatment"
              placeholder="e.g. Cosmetic Veneers or Dental Implants"
              helperText="Our dental concierge will tailor appointment timing to your procedure"
            />

            <div className="pt-2 flex justify-end">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer / Architecture Summary */}
      <footer className="bg-dark text-white py-16">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-cyan flex items-center justify-center text-white">
                  <ToothIcon className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">{CLINIC_INFO.name} Dental System</span>
              </div>
              <p className="text-sm text-neutral-400">
                Production-ready architecture, Tailwind tokens, and Framer Motion + GSAP foundation.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> React 18
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> Vite 6
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> Tailwind CSS 3
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan" /> GSAP ScrollTrigger
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 {CLINIC_INFO.name} Clinic. Architectural Foundation Initialized.</p>
            <p>Ready for website section development.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
