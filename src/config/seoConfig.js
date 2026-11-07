import { CLINIC_INFO } from '../constants/clinic.js';

/**
 * Technical SEO Configuration & Placeholders
 * 
 * PLACEHOLDER NOTES FOR PRODUCTION DEPLOYMENT:
 * - Update `siteUrl` to your verified production domain (e.g. https://www.dentoraclinic.com)
 * - Update `defaultOgImage` with a branded 1200x630 banner
 * - Update `twitterHandle` if the clinic has an official handle
 */
export const SEO_CONFIG = {
  clinicName: CLINIC_INFO.name,
  legalName: CLINIC_INFO.legalName,
  siteUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || CLINIC_INFO.website || 'https://dentora-clinic.example.com',
  defaultTitle: `Premium Dental Clinic | ${CLINIC_INFO.name} Dental Clinic`,
  titleTemplate: `%s | ${CLINIC_INFO.name} Dental Clinic`,
  defaultDescription: `Explore personalized dental care, modern dental treatments, and patient-focused services at ${CLINIC_INFO.name}.`,
  defaultOgImage: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OG_IMAGE) || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  themeColor: '#24AEC5',
  twitterHandle: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_TWITTER_HANDLE) || '@DentoraClinic',
  locale: 'en_US',

  // Section & Route Specific Metadata
  routes: {
    home: {
      title: `Premium Dental Clinic | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Explore personalized dental care, modern dental treatments, and patient-focused services at ${CLINIC_INFO.name}.`,
      path: '/',
    },
    about: {
      title: `About Our Practice | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Learn about our dedicated dental specialists, state-of-the-art diagnostic technology, and patient-first approach to oral healthcare.`,
      path: '/#about',
    },
    services: {
      title: `Dental Services & Treatments | ${CLINIC_INFO.name} Dental Clinic`,
      description: `From preventive care to cosmetic dentistry, dental implants, and orthodontics, explore comprehensive dental services designed around you.`,
      path: '/#services',
    },
    doctors: {
      title: `Meet Our Dentists & Specialists | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Get to know our experienced dental team, board certifications, clinical focus, and compassionate philosophy of care.`,
      path: '/#doctors',
    },
    blog: {
      title: `Dental Health Insights & Articles | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Explore expert tips, practical advice, and patient guides to help you maintain a bright, healthy, lifelong smile.`,
      path: '/#blog',
    },
    appointment: {
      title: `Schedule an Appointment | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Book your comprehensive dental consultation or checkup online with ${CLINIC_INFO.name}. Flexible scheduling and emergency slots available.`,
      path: '/#appointment',
    },
    contact: {
      title: `Contact Our Office | ${CLINIC_INFO.name} Dental Clinic`,
      description: `Get in touch with ${CLINIC_INFO.name} in New York. Find clinic hours, phone numbers, parking info, and direct office directions.`,
      path: '/#contact',
    },
  },
};

/**
 * Builds canonical Schema.org Dentist / LocalBusiness structured data.
 * Adheres to Schema.org standards without fabricating credentials or fake reviews.
 */
export function getDentistSchema() {
  const openingHoursSpecification = CLINIC_INFO.hours
    .filter((h) => h.schemaDays && h.opens && h.closes)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.schemaDays.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
    '@id': `${SEO_CONFIG.siteUrl}/#dentist`,
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.legalName,
    url: SEO_CONFIG.siteUrl,
    logo: CLINIC_INFO.logoUrl,
    image: SEO_CONFIG.defaultOgImage,
    description: CLINIC_INFO.description,
    telephone: CLINIC_INFO.phone,
    email: CLINIC_INFO.email,
    priceRange: CLINIC_INFO.priceRange,
    currenciesAccepted: CLINIC_INFO.currenciesAccepted,
    paymentAccepted: CLINIC_INFO.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.city,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.zip,
      addressCountry: CLINIC_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.geo.latitude,
      longitude: CLINIC_INFO.geo.longitude,
    },
    areaServed: CLINIC_INFO.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    openingHoursSpecification,
    hasMap: CLINIC_INFO.googleMapsUrl,
    isAcceptingNewPatients: true,
  };
}

/**
 * Builds Schema.org WebSite structured data with SearchAction placeholder.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: CLINIC_INFO.name,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#dentist`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Builds Schema.org Article structured data for an individual blog article.
 */
export function getArticleSchema(post) {
  if (!post) return null;

  const articleUrl = `${SEO_CONFIG.siteUrl}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}/#article`,
    isPartOf: {
      '@id': `${SEO_CONFIG.siteUrl}/#website`,
    },
    headline: post.title,
    description: post.description,
    image: post.image || SEO_CONFIG.defaultOgImage,
    datePublished: post.date ? new Date(post.date).toISOString().split('T')[0] : undefined,
    dateModified: post.date ? new Date(post.date).toISOString().split('T')[0] : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author?.name || CLINIC_INFO.name,
      jobTitle: post.author?.role || 'Dental Specialist',
      worksFor: {
        '@id': `${SEO_CONFIG.siteUrl}/#dentist`,
      },
    },
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#dentist`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Builds Schema.org BreadcrumbList structured data.
 * @param {Array<{ name: string, url: string }>} items
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}
