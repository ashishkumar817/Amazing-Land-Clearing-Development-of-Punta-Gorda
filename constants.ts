import { Trees, Tractor, Ruler, Hammer, Shovel, HardHat } from 'lucide-react';
import { Service, Testimonial, FAQItem, TeamMember, BlogPost } from './types';

export const COMPANY_INFO = {
  name: "Amazing Land Clearing & Development",
  shortName: "Amazing Land Clearing",
  fullLegalName: "Amazing Land Clearing & Development, Excavating, Grading, Forestry Mulching, Demolition and More of Punta Gorda",
  phone: "(941) 555-0199",
  email: "info@amazinglandclearing.com",
  address: "48357 Bermont Rd, Punta Gorda, FL 33982",
  mapLink: "https://maps.app.goo.gl/ecJ4VqarN37mnVhw5",
  hours: "Mon-Sat: 7:00 AM - 6:00 PM",
};

export const SERVICES: Service[] = [
  {
    id: 'land-clearing',
    title: 'Land Clearing',
    slug: 'land-clearing',
    shortDescription: 'Prepare your property for construction, farming, or development with fast, eco-friendly clearing solutions.',
    fullDescription: 'Our land clearing services remove trees, brush, roots, and debris efficiently, preparing your property for construction, agriculture, or resale. We use modern equipment to clear land safely while minimizing environmental impact. Whether you need a small residential lot cleared or a multi-acre property prepared, we deliver consistent results.',
    icon: Trees,
    features: ['Brush & Tree Removal', 'Root Raking', 'Debris Hauling', 'Stump Removal'],
    image: 'https://picsum.photos/id/128/800/600',
  },
  {
    id: 'excavation',
    title: 'Excavation',
    slug: 'excavation',
    shortDescription: 'Precision digging for foundations, drainage, utilities, and site prep.',
    fullDescription: 'Our excavation team provides precision digging for foundations, drainage systems, utility lines, and general site preparation. We utilize advanced machinery to ensure accuracy and safety on every dig, regardless of soil conditions.',
    icon: Tractor,
    features: ['Foundation Digging', 'Trenching', 'Pond Excavation', 'Utility Lines'],
    image: 'https://picsum.photos/id/180/800/600',
  },
  {
    id: 'grading',
    title: 'Grading',
    slug: 'grading',
    shortDescription: 'Proper leveling and slope control to prevent drainage issues and future damage.',
    fullDescription: 'Expert grading is essential for water management and structural integrity. We provide rough and final grading to ensure proper leveling and slope control, preventing drainage issues and protecting your investment from water damage.',
    icon: Ruler,
    features: ['Site Leveling', 'Slope Control', 'Driveway Grading', 'Pad Building'],
    image: 'https://picsum.photos/id/188/800/600',
  },
  {
    id: 'forestry-mulching',
    title: 'Forestry Mulching',
    slug: 'forestry-mulching',
    shortDescription: 'Low-impact land clearing that preserves soil health and reduces erosion.',
    fullDescription: 'Forestry mulching is a single-step process that turns trees and brush into mulch on the spot. This eco-friendly method minimizes soil disruption, prevents erosion, and leaves a nutrient-rich layer of mulch, making it ideal for clearing underbrush while keeping select trees.',
    icon: Trees,
    features: ['Eco-Friendly', 'Soil Preservation', 'Erosion Control', 'Cost-Effective'],
    image: 'https://picsum.photos/id/206/800/600',
  },
  {
    id: 'demolition',
    title: 'Demolition',
    slug: 'demolition',
    shortDescription: 'Safe, controlled demolition for residential and small commercial structures.',
    fullDescription: 'We offer safe, controlled demolition services for residential homes, mobile homes, barns, and small commercial structures. Our team handles everything from the teardown to the debris removal, leaving you with a clean slate.',
    icon: Hammer,
    features: ['Structural Demolition', 'Concrete Removal', 'Debris Hauling', 'Safety Focused'],
    image: 'https://picsum.photos/id/212/800/600',
  },
  {
    id: 'site-prep',
    title: 'Site Preparation',
    slug: 'site-preparation',
    shortDescription: 'Comprehensive site prep services to get your project started right.',
    fullDescription: 'Site preparation is the critical first step in any construction project. We combine clearing, excavation, and grading to deliver a site that is completely ready for builders, ensuring your project stays on schedule and on budget.',
    icon: Shovel,
    features: ['Pad Construction', 'Access Roads', 'Drainage Setup', 'Compaction'],
    image: 'https://picsum.photos/id/219/800/600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James R.",
    location: "Punta Gorda",
    service: "Land Clearing",
    text: "They cleared my overgrown lot in less than two days. Professional crew and fair pricing.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria L.",
    location: "Charlotte County",
    service: "Forestry Mulching",
    text: "Amazing work. The property looks clean and natural without damaging the soil.",
    rating: 5
  },
  {
    id: 3,
    name: "David K.",
    location: "Punta Gorda (Builder)",
    service: "Excavation & Grading",
    text: "Reliable, on schedule, and precise. I use them on every project now.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael T.",
    location: "Port Charlotte",
    service: "Land Clearing",
    text: "Cleared 3 acres quickly and professionally. Highly recommended.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free, no-obligation on-site estimates for all potential projects."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed and insured in the state of Florida for all services we provide."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Punta Gorda, Port Charlotte, Arcadia, North Port, and surrounding areas in Southwest Florida."
  },
  {
    question: "How long does land clearing take?",
    answer: "Most residential projects are completed in 1–3 days, depending on the acreage and density of vegetation."
  },
  {
    question: "Is forestry mulching environmentally friendly?",
    answer: "Yes. It minimizes soil disruption and prevents erosion by leaving a protective layer of mulch."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How Land Clearing Increases Property Value",
    excerpt: "Discover how professional clearing can instantly boost the market appeal and value of your land.",
    date: "Oct 12, 2023",
    image: "https://picsum.photos/id/250/800/600"
  },
  {
    id: 2,
    title: "Forestry Mulching vs Traditional Clearing",
    excerpt: "We break down the pros and cons of mulching to help you decide which method is right for your lot.",
    date: "Nov 05, 2023",
    image: "https://picsum.photos/id/257/800/600"
  },
  {
    id: 3,
    title: "Why Proper Grading Prevents Drainage Issues",
    excerpt: "Florida rain can be intense. Learn how proper grading protects your home foundation from water damage.",
    date: "Dec 01, 2023",
    image: "https://picsum.photos/id/270/800/600"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "John Davis",
    role: "Owner & Operator",
    bio: "A Florida-based professional with a passion for land development, heavy equipment, and doing the job right.",
    image: "https://picsum.photos/id/433/400/400"
  },
  {
    name: "Mike Smith",
    role: "Site Foreman",
    bio: "Over 15 years of experience in heavy excavation and precision grading.",
    image: "https://picsum.photos/id/447/400/400"
  },
  {
    name: "Sarah Johnson",
    role: "Project Coordinator",
    bio: "Ensures every project runs on time and on budget with clear communication.",
    image: "https://picsum.photos/id/449/400/400"
  }
];
