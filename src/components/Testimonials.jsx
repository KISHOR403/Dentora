import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Quote,
  Sparkles,
  Heart,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SparkleIcon } from '@/assets/icons';
import { TestimonialCard } from '@/components/TestimonialCard';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

// Sample placeholder testimonial data
export const TESTIMONIALS_DATA = [
  {
    id: 'olivia-brown',
    patient: 'Olivia Brown',
    treatment: 'Smile Makeover',
    rating: 5,
    review:
      'The entire experience was wonderful. The team made me feel comfortable and confident throughout my treatment.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    isCyan: true, // Featured Cyan Accent Card
  },
  {
    id: 'ethan-wilson',
    patient: 'Ethan Wilson',
    treatment: 'Dental Implants',
    rating: 5,
    review:
      'Professional service, modern equipment and excellent communication. I am very happy with my treatment.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    isCyan: false,
  },
  {
    id: 'sophia-taylor',
    patient: 'Sophia Taylor',
    treatment: 'Teeth Whitening',
    rating: 5,
    review:
      'The staff were friendly and the process was smooth. I really appreciated the attention to detail.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    isCyan: false,
  },
  {
    id: 'noah-davis',
    patient: 'Noah Davis',
    treatment: 'General Dentistry',
    rating: 5,
    review:
      'A welcoming clinic with a great team. Everything was explained clearly and I felt comfortable.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    isCyan: false,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselContainerRef = useRef(null);

  // Responsive breakpoint detector for carousel slides
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (width < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - cardsPerView);

  // Clamp current index if window is resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Keyboard accessibility (ArrowLeft and ArrowRight)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-28 lg:py-36 bg-light-grey text-dark overflow-hidden select-none"
      aria-label="Patient Stories & Testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Ambient Accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-soft-cyan/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        {/* 1. Section Header + Carousel Navigation Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
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
                icon={<SparkleIcon className="w-3.5 h-3.5 text-cyan" />}
                className="bg-white/90 text-dark font-semibold shadow-subtle"
              >
                PATIENT STORIES
              </Badge>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
                Real Smiles.{' '}
                <span className="text-cyan block sm:inline">
                  Real Experiences.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
                Every smile tells a story. Discover what our patients say about their experience with our dental team.
              </p>
            </motion.div>
          </motion.div>

          {/* Carousel Next & Previous Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-white/40 text-neutral-400'
                  : 'bg-white text-dark hover:bg-cyan hover:text-white hover:border-cyan shadow-sm cursor-pointer'
              }`}
              aria-label="Previous testimonial slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? 'opacity-40 cursor-not-allowed bg-white/40 text-neutral-400'
                  : 'bg-white text-dark hover:bg-cyan hover:text-white hover:border-cyan shadow-sm cursor-pointer'
              }`}
              aria-label="Next testimonial slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Interactive Carousel Wrapper with Touch / Swipe Support */}
        <div
          ref={carouselContainerRef}
          className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing pb-4"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient Testimonials Carousel"
        >
          <motion.div
            className="flex gap-6 sm:gap-7"
            animate={{
              x: `-${currentIndex * (100 / cardsPerView + (cardsPerView > 1 ? 1.5 : 0))}%`,
            }}
            transition={{ duration: 0.55, ease: LUXURY_EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x;
              if (swipe < -50 && currentIndex < maxIndex) {
                handleNext();
              } else if (swipe > 50 && currentIndex > 0) {
                handlePrev();
              }
            }}
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`shrink-0 ${
                  cardsPerView === 1
                    ? 'w-full'
                    : cardsPerView === 2
                    ? 'w-[calc(50%-14px)]'
                    : 'w-[calc(33.333%-19px)]'
                }`}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isCyan={testimonial.isCyan}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3. Bottom Carousel Progress Indicators & Clarification */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200/60">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentIndex === idx
                    ? 'w-8 bg-cyan'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Placeholder Clarification Note */}
          <p className="text-xs text-neutral-400">
            * Sample placeholder patient stories for demonstration purposes.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
