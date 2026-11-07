import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Award, Sparkles, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { LUXURY_EASE, fadeInUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

export function DoctorCard({ doctor, onViewProfile }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: LUXURY_EASE }}
      className="group relative rounded-[28px] sm:rounded-[32px] bg-white border border-neutral-200/80 hover:border-cyan/50 p-4 sm:p-5 shadow-subtle hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between cursor-pointer select-none"
      onClick={() => onViewProfile(doctor)}
    >
      {/* 1. Portrait Container with consistent 3/4 aspect ratio */}
      <div className="w-full aspect-[3/4] rounded-2xl sm:rounded-[22px] overflow-hidden relative mb-4 sm:mb-5 bg-neutral-100">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}, ${doctor.specialization} at Dentora`}
          width="400"
          height="533"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Subtle photo gradient for badge contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent pointer-events-none" />

        {/* Experience Badge (Top Left) */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="softCyan"
            size="sm"
            dot
            className="bg-white/95 text-dark font-semibold shadow-sm"
          >
            {doctor.experience}
          </Badge>
        </div>

        {/* Credentials / Category tag (Bottom Left) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-200 truncate">
            {doctor.degrees}
          </span>
          <div className="w-7 h-7 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-cyan shadow-sm">
            <Stethoscope className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 2. Doctor Information Area */}
      <div className="space-y-3 flex-1 flex flex-col justify-between px-1">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-dark tracking-tight group-hover:text-cyan transition-colors duration-300">
            {doctor.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-cyan mt-0.5">
            {doctor.specialization}
          </p>
          <p className="text-xs text-neutral-500 mt-1 leading-relaxed line-clamp-2">
            {doctor.shortBio}
          </p>
        </div>

        {/* 3. Interactive View Profile Action */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-400">
            {doctor.experience} Exp.
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-dark group-hover:text-cyan transition-colors">
            <span>View Profile</span>
            <div className="w-7 h-7 rounded-full bg-light-grey text-dark group-hover:bg-cyan group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default DoctorCard;
