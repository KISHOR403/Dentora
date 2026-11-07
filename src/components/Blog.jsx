import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BlogCard } from '@/components/BlogCard';
import { BLOG_POSTS } from '@/data/blogData';
import { LUXURY_EASE, fadeInUp, staggerContainer } from '@/utils/animations';

export function Blog() {
  return (
    <section
      id="blog"
      className="relative py-20 sm:py-28 lg:py-36 bg-white text-dark overflow-hidden select-none"
      aria-label="Dental Insights and Articles"
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-soft-cyan/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-light-grey rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        {/* 1. Section Header + View All Articles CTA */}
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
                icon={<BookOpen className="w-3.5 h-3.5 text-cyan" />}
                className="bg-soft-cyan/80 text-dark font-semibold shadow-subtle"
              >
                OUR LATEST INSIGHTS
              </Badge>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-dark">
                Knowledge That Keeps{' '}
                <span className="text-cyan block sm:inline">
                  Your Smile Healthy.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
                Explore expert tips, practical advice and the latest insights to help you make confident decisions about your oral health.
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop View All Articles CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 flex items-center gap-3"
          >
            <Button
              variant="dark"
              size="lg"
              pill
              rightIcon={<ArrowRight className="w-4 h-4 text-cyan" />}
              className="shadow-sm hover:shadow-card font-semibold px-6"
              onClick={() => {
                const el = document.getElementById('blog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Articles
            </Button>
          </motion.div>
        </div>

        {/* 2. Three-Column Editorial Article Cards Grid */}
        <motion.div
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* 3. Bottom Educational Disclaimer Note */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan" />
            <span>Sample placeholder clinical content designed for informational demonstration.</span>
          </p>
          <p>
            Updated weekly by the Dentora editorial team.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
