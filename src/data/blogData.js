/**
 * Sample Blog & Dental Insights Dataset
 * Note: These articles contain general sample informational content for demonstration purposes.
 * They do not constitute formal medical or clinical advice.
 */

export const BLOG_POSTS = [
  {
    id: 'everyday-habits-healthy-smile',
    slug: 'everyday-habits-healthy-smile',
    category: 'ORAL HEALTH',
    title: '5 Everyday Habits for a Healthier, Brighter Smile',
    description: 'Simple daily habits that can help maintain healthy teeth and gums.',
    readingTime: '4 min read',
    date: 'November 4, 2026',
    author: {
      name: 'Dr. Emily Carter',
      role: 'General Dentist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Patient with healthy, natural white smile maintaining daily oral hygiene',
    excerpt:
      'Long-term dental health is built on routine consistency rather than occasional intensive treatments. Here are five simple habits you can incorporate into your daily schedule to protect enamel and maintain radiant oral wellness.',
    sections: [
      {
        heading: '1. Two Minutes of Gentle, Circular Brushing',
        text: 'Brushing twice a day for a full two minutes is the cornerstone of plaque removal. Use a soft-bristled toothbrush angled at 45 degrees toward the gumline. Vigorous, horizontal sawing motions can cause micro-abrasions to enamel and irritate gum margins.',
      },
      {
        heading: '2. Daily Interdental Cleaning',
        text: 'Toothbrush bristles clean only approximately 60% of tooth surfaces. The remaining 40% lies between teeth, where food particles and anaerobic bacteria accumulate. Daily flossing or water flossing reduces interdental decay and supports healthy gingival tissue.',
      },
      {
        heading: '3. Hydration and Enamel Salivary Defense',
        text: 'Saliva is your mouth’s natural defense mechanism, neutralizing bacterial acids and remineralizing surface enamel with calcium and phosphate. Drinking ample water throughout the day stimulates salivary flow and flushes away lingering food debris.',
      },
      {
        heading: '4. Mindful Sugar and Acidity Timing',
        text: 'Frequent snacking on acidic fruits, soft drinks, or sticky carbohydrates creates repeated acid attacks on enamel. If consuming acidic foods, rinse with plain water immediately and wait at least 30 minutes before brushing to allow enamel to re-harden.',
      },
      {
        heading: '5. Routine Preventive Checkups',
        text: 'Even meticulous home care cannot remove hardened calculus (tartar). Biannual dental cleanings and digital exams enable your dental team to catch subtle micro-cavities, structural cracks, and early gum inflammation before they require complex restorative procedures.',
      },
    ],
  },
  {
    id: 'is-professional-teeth-whitening-worth-it',
    slug: 'is-professional-teeth-whitening-worth-it',
    category: 'COSMETIC DENTISTRY',
    title: 'Is Professional Teeth Whitening Worth It?',
    description: 'Understand professional whitening treatments and what to expect.',
    readingTime: '5 min read',
    date: 'October 28, 2026',
    author: {
      name: 'Dr. Alex Morgan',
      role: 'Cosmetic Dentist',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Laser cosmetic teeth whitening in sterile clinical setting',
    excerpt:
      'With countless over-the-counter whitening strips, charcoal powders, and LED kits flooding the market, many patients wonder if in-clinic professional teeth whitening is worth the investment. Here is how professional whitening works and what results to expect.',
    sections: [
      {
        heading: 'The Science of Deep Enamel Staining',
        text: 'Extrinsic stains from coffee, red wine, and tea reside in the superficial enamel layer, while intrinsic stains are embedded deeper within the dentin matrix. Over-the-counter strips primarily scrub external surface stains, whereas professional chairside whitening uses medical-grade carbamide or hydrogen peroxide to safely oxidize deep internal discolouration.',
      },
      {
        heading: 'Customized Gingival Protection',
        text: 'The biggest risk with unregulated home kits is chemical gum burns and severe tooth sensitivity. In a dental clinic, a liquid dam isolation barrier is precisely painted over the gum tissue, ensuring the concentrated whitening agent only touches enamel without irritating delicate soft tissue.',
      },
      {
        heading: 'Immediate Results in a Single Visit',
        text: 'While store-bought kits require weeks of daily application with mild results, clinical laser-activated whitening typically lightens enamel 6 to 8 shades in a single 45-to-60-minute appointment under controlled supervision.',
      },
      {
        heading: 'Longevity and Touch-Up Strategies',
        text: 'Professional whitening results generally endure from one to three years, depending on dietary habits and oral hygiene. Most clinics provide custom-molded take-home trays for effortless periodic touch-ups following routine hygiene visits.',
      },
    ],
  },
  {
    id: 'what-to-expect-first-dental-visit',
    slug: 'what-to-expect-first-dental-visit',
    category: 'DENTAL CARE',
    title: 'What to Expect During Your First Dental Visit',
    description: 'A simple guide to making your first dental appointment comfortable.',
    readingTime: '6 min read',
    date: 'October 15, 2026',
    author: {
      name: 'Dr. Sarah Williams',
      role: 'Orthodontist & Dental Specialist',
      avatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=200&h=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Welcoming modern dental reception and treatment consultation suite',
    excerpt:
      'Visiting a new dental clinic can sometimes feel daunting, especially if it has been several years since your last exam. At modern practices, patient comfort, transparent communication, and non-judgmental care are central to the onboarding experience.',
    sections: [
      {
        heading: 'Comprehensive Health & Lifestyle History',
        text: 'Your visit begins with a conversational medical and oral health review. Dentists evaluate any systemic health conditions, medications, clenching or grinding habits, and any specific aesthetic or functional concerns you wish to address.',
      },
      {
        heading: 'Low-Radiation 3D Digital Imaging',
        text: 'Gone are the days of biting down on bulky, sharp cardboard films. Modern digital sensors and 3D intraoral cameras take high-definition, low-radiation panoramic scans in seconds, allowing you to view your teeth on a chairside screen alongside your dentist.',
      },
      {
        heading: 'Periodontal & Soft Tissue Assessment',
        text: 'The clinician gently checks gum pocket depths and screens for early signs of gingivitis or bone loss. An extraoral screening of your jaw joints (TMJ) and head-and-neck lymph nodes is also standard procedure.',
      },
      {
        heading: 'Transparent Treatment Co-Planning',
        text: 'Modern dentistry emphasizes shared decision-making. Before any procedure is scheduled, you receive an itemized roadmap detailing clinical priorities, elective aesthetic options, and transparent insurance or fee estimates with zero pressure.',
      },
    ],
  },
];

export default BLOG_POSTS;
