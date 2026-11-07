import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { LUXURY_EASE, fadeInUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

export function TestimonialCard({ testimonial, isCyan = false }) {
  return (
    <div
      className={cn(
        'group relative rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 h-full select-none',
        isCyan
          ? 'bg-cyan text-white shadow-cyan-glow border border-cyan-400/40'
          : 'bg-white text-dark shadow-subtle hover:shadow-card-hover border border-neutral-200/80 hover:border-cyan/40'
      )}
    >
      {/* 1. Header: 5 Stars + Quote Icon */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                isCyan ? 'fill-white text-white' : 'fill-amber-400 text-amber-400'
              )}
            />
          ))}
          <span
            className={cn(
              'text-xs font-bold ml-1.5',
              isCyan ? 'text-white/90' : 'text-neutral-700'
            )}
          >
            5.0
          </span>
        </div>

        <div
          className={cn(
            'w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
            isCyan ? 'bg-white/20 text-white' : 'bg-soft-cyan text-cyan'
          )}
        >
          <Quote className="w-5 h-5 rotate-180" />
        </div>
      </div>

      {/* 2. Review Quote Body */}
      <blockquote className="space-y-3 flex-1 flex flex-col justify-center my-2">
        <p
          className={cn(
            'text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-tight',
            isCyan ? 'text-white' : 'text-neutral-800'
          )}
        >
          "{testimonial.review}"
        </p>
      </blockquote>

      {/* 3. Patient Information Footer */}
      <div
        className={cn(
          'pt-5 mt-5 border-t flex items-center justify-between gap-3',
          isCyan ? 'border-white/20' : 'border-neutral-100'
        )}
      >
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={testimonial.avatar}
            alt={`Patient ${testimonial.patient}`}
            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
            loading="lazy"
          />
          <div className="min-w-0">
            <h4
              className={cn(
                'text-sm sm:text-base font-bold tracking-tight truncate',
                isCyan ? 'text-white' : 'text-dark'
              )}
            >
              {testimonial.patient}
            </h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={cn(
                  'text-xs truncate font-medium',
                  isCyan ? 'text-white/80' : 'text-neutral-500'
                )}
              >
                {testimonial.treatment}
              </span>
              <CheckCircle2
                className={cn(
                  'w-3.5 h-3.5 shrink-0',
                  isCyan ? 'text-white' : 'text-cyan'
                )}
              />
            </div>
          </div>
        </div>

        <span
          className={cn(
            'text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 hidden sm:inline-block',
            isCyan
              ? 'bg-white/20 text-white'
              : 'bg-light-grey text-neutral-600'
          )}
        >
          Verified Patient
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
