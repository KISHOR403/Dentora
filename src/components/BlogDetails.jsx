import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ToothIcon } from '@/assets/icons';
import { BLOG_POSTS } from '@/data/blogData';
import { LUXURY_EASE, fadeInUp } from '@/utils/animations';

export function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-dark flex items-center justify-center p-6">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-soft-cyan text-cyan mx-auto flex items-center justify-center">
            <ToothIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold">Article Not Found</h2>
          <p className="text-sm text-neutral-500">
            The article you are looking for does not exist or may have been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="md" pill leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-dark font-sans selection:bg-cyan selection:text-white pt-24 pb-20">
      {/* Top Breadcrumb & Navigation Header */}
      <div className="border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-30 py-3.5">
        <Container size="default" className="flex items-center justify-between">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-cyan transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-light-grey text-dark group-hover:bg-cyan group-hover:text-white flex items-center justify-center transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to Articles</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>
      </div>

      <article className="pt-8 sm:pt-12">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="space-y-8"
          >
            {/* Header: Category Badge + Title */}
            <div className="space-y-4 max-w-3xl">
              <Badge variant="softCyan" size="md" dot>
                {post.category}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-dark">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Author Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-100">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <span className="text-sm font-bold text-dark block leading-snug">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-cyan font-medium">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan" />
                  {post.readingTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full aspect-[16/9] max-h-[500px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-neutral-100 relative">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Excerpt Lead Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-soft-cyan/40 border border-cyan/20">
              <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed italic">
                "{post.excerpt}"
              </p>
            </div>

            {/* Article Body Sections */}
            <div className="max-w-3xl space-y-8 pt-4">
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-dark tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-base text-neutral-700 leading-relaxed font-normal">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical Disclaimer Box */}
            <div className="max-w-3xl p-5 rounded-2xl bg-light-grey/80 border border-neutral-200/60 text-xs text-neutral-500 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Informational Notice:</strong> This article contains sample educational content for general dental awareness and website demonstration purposes. It does not replace professional dental examination, diagnosis, or clinical advice. Consult your dentist for personalized oral health recommendations.
              </p>
            </div>

            {/* Next Steps / Booking CTA Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-dark text-white shadow-dark-float flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
              <div className="space-y-2 text-center md:text-left">
                <Badge variant="softCyan" size="sm" className="bg-white/10 text-cyan border-none">
                  Personalized Care
                </Badge>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Have questions about your smile?
                </h3>
                <p className="text-sm text-neutral-300 max-w-md">
                  Book a private consultation with our clinical specialists to receive a customized digital treatment plan.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <Link to="/#contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    pill
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto shadow-cyan-glow font-semibold px-7"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    pill
                    className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Home
                  </Button>
                </Link>
              </div>
            </div>

          </motion.div>
        </Container>
      </article>
    </div>
  );
}

export default BlogDetails;
