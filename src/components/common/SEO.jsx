import React, { useEffect } from 'react';
import { SEO_CONFIG } from '@/config/seoConfig';

/**
 * Lightweight, zero-dependency SEO manager for React SPA routes.
 * Dynamically synchronizes document title, meta tags, Open Graph, Twitter cards,
 * canonical links, and Schema.org JSON-LD structured data.
 */
export function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData = null,
  noindex = false,
}) {
  const finalTitle = title || SEO_CONFIG.defaultTitle;
  const finalDescription = description || SEO_CONFIG.defaultDescription;
  const finalOgImage = ogImage || SEO_CONFIG.defaultOgImage;
  const fullCanonical = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SEO_CONFIG.siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : SEO_CONFIG.siteUrl;

  useEffect(() => {
    // 1. Update Title
    const originalTitle = document.title;
    document.title = finalTitle;

    // Helper to safely update or append meta elements
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // Helper to safely update or append link elements (e.g. canonical)
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      return element;
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical URL
    setLinkTag('canonical', fullCanonical);

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', `${SEO_CONFIG.clinicName} Dental Clinic`);

    // 5. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalOgImage);
    if (SEO_CONFIG.twitterHandle) {
      setMetaTag('name', 'twitter:site', SEO_CONFIG.twitterHandle);
    }

    // 6. Structured Data (JSON-LD) Injection
    const SCRIPT_ID = 'dentora-route-schema';
    let scriptTag = document.getElementById(SCRIPT_ID);

    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Cleanup on component unmount
    return () => {
      document.title = originalTitle;
      const lingeringScript = document.getElementById(SCRIPT_ID);
      if (lingeringScript) lingeringScript.remove();
    };
  }, [finalTitle, finalDescription, fullCanonical, finalOgImage, ogType, structuredData, noindex]);

  return null;
}

export default SEO;
