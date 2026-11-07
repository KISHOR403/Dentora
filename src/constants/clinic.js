/**
 * Central Clinic Information & Local Business Configuration
 * 
 * IMPORTANT FOR DEPLOYMENT:
 * Update the placeholders below with your verified clinic details, registered business address,
 * official phone numbers, and verified Google Business Profile link.
 * These details power the site content as well as Schema.org structured data (LocalBusiness/Dentist).
 */
export const CLINIC_INFO = {
  name: 'Dentora',
  legalName: 'Dentora Dental Care LLC',
  tagline: 'Aesthetic & Advanced Dental Care',
  description: 'Precision dentistry meets modern luxury. Delivering painless, bespoke smile transformations with state-of-the-art digital technology.',
  phone: '+1 (800) 456-7890',
  phoneClean: '+18004567890',
  emergencyPhone: '+1 (800) 911-DENT',
  emergencyPhoneClean: '+18009113368',
  email: 'concierge@dentoraclinic.com',
  website: 'https://dentora-clinic.example.com', // Replace with production domain
  logoUrl: 'https://dentora-clinic.example.com/logo.png', // Replace with production logo path
  address: {
    street: '450 Lexington Avenue, Suite 1800',
    city: 'New York',
    state: 'NY',
    zip: '10017',
    country: 'US',
    countryName: 'United States',
  },
  geo: {
    latitude: 40.7527,
    longitude: -73.9772,
  },
  // Map and profile links (Placeholders - update with real verified URLs)
  googleMapsUrl: 'https://maps.google.com/?q=450+Lexington+Ave+New+York+NY+10017',
  googleBusinessProfileUrl: 'https://business.google.com', // Placeholder for verified GBP
  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 7:00 PM', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
    { days: 'Saturday', hours: '9:00 AM – 4:00 PM', schemaDays: ['Saturday'], opens: '09:00', closes: '16:00' },
    { days: 'Sunday', hours: 'Emergency By Appointment', schemaDays: ['Sunday'], opens: '10:00', closes: '14:00' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, CareCredit, Dental Insurance',
  areaServed: [
    'New York',
    'Manhattan',
    'Midtown East',
    'Grand Central',
    'Tri-State Area',
  ],
  stats: [
    { value: '15,000+', label: 'Smiles Transformed' },
    { value: '99.4%', label: 'Patient Satisfaction' },
    { value: '25+', label: 'Years Combined Expertise' },
    { value: '0%', label: 'Financing Options' },
  ],
  certifications: [
    'American Dental Association (ADA)',
    'American Academy of Cosmetic Dentistry (AACD)',
    'International Congress of Oral Implantologists (ICOI)',
  ],
};

export default CLINIC_INFO;
