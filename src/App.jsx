import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Doctors } from '@/components/Doctors';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { Appointment } from '@/components/Appointment';
import { Footer } from '@/components/Footer';
import { Loader2 } from 'lucide-react';

// Code-split article detail route for high-performance initial page load
const BlogDetails = lazy(() => import('@/components/BlogDetails'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-cyan animate-spin" />
    </div>
  );
}

function HomePage() {
  const location = useLocation();

  // Handle smooth scroll when navigating to hash anchors
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="flex-1">
      {/* 2. Full-Width Cinematic Hero Section */}
      <Hero />

      {/* 3. About Our Clinic Section */}
      <About />

      {/* 4. Complete Dental Services Section */}
      <Services />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Meet Our Expert Doctors Section */}
      <Doctors />

      {/* 7. Patient Stories & Testimonials Carousel */}
      <Testimonials />

      {/* 8. Dental Insights & Articles Section */}
      <Blog />

      {/* 9. Appointment Booking & Contact Section */}
      <Appointment />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-dark flex flex-col font-sans selection:bg-cyan selection:text-white">
        {/* 1. Floating Sticky Navbar */}
        <Navbar />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* 10. Premium Responsive Footer with Newsletter */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
