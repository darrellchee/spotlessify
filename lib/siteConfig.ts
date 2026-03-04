export const siteConfig = {
  name: "Spotlessify Services",
  tagline: "Bond-back guaranteed end of lease cleaning in Sydney",
  description: "Professional end-of-lease cleaning in Sydney, Surry Hills, Newtown, Glebe, and surrounding suburbs. Bond-back guarantee, no hidden fees.",

  // Contact
  phone: "0494 095 927",
  phoneShort: "0494095927",
  address: "91 Railway Parade, Marrickville NSW 2204, Australia",
  email: "hello@spotlessify.com.au",

  // URLs
  canonical: "https://spotlessify.com.au",

  // Navigation
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Services
  services: [
    {
      id: "deep-clean",
      title: "Deep Clean Package",
      description: "Complete deep clean with attention to every corner and appliance.",
      icon: "Sparkles",
      included: [
        "All rooms deep cleaned",
        "Appliances cleaned inside & out",
        "Windows & sills",
        "Baseboards & corners",
        "Carpets vacuumed & spot-treated",
        "Bathroom fixtures polished",
      ],
    },
    {
      id: "bond-back",
      title: "Bond-Back Guarantee",
      description: "Comprehensive service designed to pass Real Estate inspection.",
      icon: "Shield",
      included: [
        "All deep clean items",
        "Oven & stovetop detailed",
        "Fridge & freezer cleaned",
        "Light fixtures & switches",
        "Door frames & doors",
        "Professional report photo documentation",
      ],
    },
    {
      id: "carpet-care",
      title: "Carpet & Upholstery",
      description: "Professional steam cleaning to restore carpets and upholstery.",
      icon: "Waves",
      included: [
        "Hot water extraction",
        "Stain treatment",
        "Deodorizing",
        "Color restoration",
        "Fast drying technology",
        "Eco-friendly solutions",
      ],
    },
    {
      id: "urgent-service",
      title: "Urgent 24hr Service",
      description: "Last-minute inspection coming up? We've got you covered.",
      icon: "Zap",
      included: [
        "Emergency booking available",
        "Same-day scheduling",
        "Quick turnaround",
        "Full deep clean",
        "Certificate of completion",
        "Premium pricing applies",
      ],
    },
    {
      id: "move-in",
      title: "Move-In Ready",
      description: "Fresh start for your new rental property.",
      icon: "Home",
      included: [
        "Deep clean throughout",
        "Kitchen setup",
        "Bathrooms sanitized",
        "Windows sparkling clean",
        "Carpets treated",
        "Ready for first day",
      ],
    },
  ],

  // Pricing
  pricing: [
    {
      tier: "Apartment",
      price: 299,
      subtitle: "1-2 bedroom",
      features: [
        "Up to 2 bedrooms",
        "Deep clean included",
        "All rooms covered",
        "4-6 hour service",
        "Free touch-up",
      ],
      cta: "Get Quote",
      popular: false,
    },
    {
      tier: "House",
      price: 449,
      subtitle: "3-4 bedroom",
      features: [
        "Up to 4 bedrooms",
        "Deep clean + extras",
        "Outdoor areas",
        "6-8 hour service",
        "Free touch-up (2 weeks)",
        "Bond-back guarantee",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      tier: "Premium",
      price: 599,
      subtitle: "5+ bedroom or large",
      features: [
        "5+ bedrooms",
        "Full deep clean",
        "Carpet + windows",
        "8-10 hour service",
        "Free touch-up (4 weeks)",
        "Certificate of completion",
      ],
      cta: "Get Quote",
      popular: false,
    },
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      name: "Sarah M.",
      suburb: "Newtown",
      rating: 5,
      text: "Outstanding service! The team was professional, thorough, and even came back to touch up a small area I mentioned. Got my full bond back. Highly recommend!",
      verified: true,
    },
    {
      id: 2,
      name: "James T.",
      suburb: "Glebe",
      rating: 5,
      text: "Best decision I made before moving out. They cleaned everything including areas I forgot existed. Real estate agent was impressed. Worth every penny.",
      verified: true,
    },
    {
      id: 3,
      name: "Emma L.",
      suburb: "Surry Hills",
      rating: 5,
      text: "Professional, reliable, and actually showed up on time (rare!). They took photos of everything and provided proof of completion. My real estate agent gave them 5 stars too.",
      verified: true,
    },
  ],

  // Trust stats
  trustStats: [
    { label: "Bond Recoveries", value: "98%", icon: "TrendingUp" },
    { label: "Happy Customers", value: "2,400+", icon: "Smile" },
    { label: "Properties Cleaned", value: "1,500+", icon: "CheckCircle" },
    { label: "Years Experience", value: "12+", icon: "Award" },
  ],

  // How it works
  howItWorks: [
    {
      step: 1,
      title: "Request a Quote",
      description: "Tell us about your property. We'll provide a transparent, upfront price with no surprises.",
    },
    {
      step: 2,
      title: "Schedule Your Cleaning",
      description: "Pick a time that works for you. We're flexible with evening and weekend bookings.",
    },
    {
      step: 3,
      title: "Relax & Enjoy Results",
      description: "We handle everything while you're out. Get your bond back and move forward.",
    },
  ],

  // FAQ
  faq: [
    {
      question: "How long does end of lease cleaning take?",
      answer: "Typically 4-8 hours depending on property size and condition. Larger homes may take up to 10 hours. We'll give you an exact timeframe when you book.",
    },
    {
      question: "Are you really bond-back guaranteed?",
      answer: "Yes! We stand behind our work. If the real estate agent finds issues we missed, we'll return and re-clean at no charge. Over 98% bond recovery rate.",
    },
    {
      question: "What if I'm still living there during cleaning?",
      answer: "No problem! We work around you. Most clients prefer to be out, but we can clean while you pack. We ask for 2 hours uninterrupted access to each room.",
    },
    {
      question: "Do you provide eco-friendly cleaning products?",
      answer: "Absolutely. We use non-toxic, biodegradable products that are safe for you, pets, and the environment. Professional-grade but family-friendly.",
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "Call us within 48 hours and we'll return to fix any issues at no charge. Our goal is 100% satisfaction on every job.",
    },
  ],

  // Hero section
  hero: {
    headline: "Get Your Bond Back Guaranteed",
    subheadline: "Professional end of lease cleaning in Sydney. Bond-back guarantee, no hidden fees.",
    cta1: "Get Free Quote",
    cta2: "Call Us Now",
  },
};
