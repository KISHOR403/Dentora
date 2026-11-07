import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { LUXURY_EASE, fadeInUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

export function BlogCard({ post }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: LUXURY_EASE }}
      className="group relative rounded-[28px] sm:rounded-[32px] bg-white border border-neutral-200/80 hover:border-cyan/40 p-5 sm:p-6 shadow-subtle hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between h-full select-none"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-[24px] block flex-1 flex flex-col justify-between"
        aria-label={`Read article: ${post.title}`}
      >
        {/* 1. Large Rounded Photography Container */}
        <div className="w-full h-56 sm:h-64 rounded-2xl sm:rounded-[22px] overflow-hidden relative mb-5 bg-neutral-100">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width="600"
            height="338"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

          {/* Category Tag (Top Left) */}
          <div className="absolute top-3.5 left-3.5">
            <Badge
              variant="softCyan"
              size="sm"
              dot
              className="bg-white/95 text-dark font-semibold shadow-sm"
            >
              {post.category}
            </Badge>
          </div>

          {/* Reading Time (Bottom Left) */}
          <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-xs text-white/90 font-medium px-2.5 py-1 rounded-full bg-dark/40 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-cyan" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* 2. Metadata & Title Content */}
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <Calendar className="w-3.5 h-3.5 text-cyan" />
              <span>{post.date}</span>
            </div>

            <h3 className="text-xl sm:text-[22px] font-extrabold text-dark tracking-tight leading-snug group-hover:text-cyan transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-2">
              {post.description}
            </p>
          </div>

          {/* 3. Author & Read Article Action */}
          <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={post.author.avatar}
                alt={`Avatar of ${post.author.name}`}
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
                className="w-8 h-8 rounded-full object-cover border border-neutral-200"
              />
              <div className="min-w-0">
                <span className="text-xs font-bold text-dark block leading-none truncate">
                  {post.author.name}
                </span>
                <span className="text-[10px] text-neutral-400 truncate">
                  {post.author.role}
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan group-hover:text-cyan-700 transition-colors shrink-0">
              <span>Read Article</span>
              <div className="w-7 h-7 rounded-full bg-soft-cyan text-cyan group-hover:bg-cyan group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default BlogCard;
