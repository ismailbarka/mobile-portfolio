export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string[];
  techStack: string[];
  images: string[];
  features: string[];
  isScale?: boolean;
}

export const projects: Project[] = [
  {
    slug: "domicilia",
    title: "Domicilia",
    category: "React Native / NestJS",
    isScale: true,
    shortDescription:
      "A production-grade platform transforming the service economy for families in Morocco.",
    description: [
      "Domicilia is a sophisticated mobile ecosystem designed to bridge the gap between busy families and trusted service professionals. Launched in 2025 by AuraPrestige Tech, it addresses critical urban needs through high-performance engineering.",
      "The architecture leverages React Native for a fluid, native feel across platforms, backed by a robust NestJS and GraphQL infrastructure that ensures data integrity and lightning-fast synchronization.",
      "The project showcases a deep commitment to user-centric design, with an intuitive interface crafted to minimize friction in the booking process while maintaining high standards of provider verification.",
      "Technically, the app implements advanced state management and real-time updates, providing a seamless experience even in variable network conditions—a key requirement for its primary market.",
    ],
    techStack: ["React Native", "NestJS", "GraphQL", "TypeScript", "Figma"],
    images: [
      "/domicilia/home page-portrait.png",
      "/domicilia/Address with location-portrait copy.png",
      "/domicilia/Planification-portrait.png",
      "/domicilia/Profile page-portrait.png",
      "/domicilia/register-a-provider.png",
    ],
    features: [
      "Scalable GraphQL API with optimized query resolution",
      "Real-time service tracking and instant notifications",
      "Verified professional onboarding system",
      "Localized UX optimized for the Moroccan market",
      "Seamless cross-platform deployment (iOS & Android)",
    ],
  },
  {
    slug: "providers-map",
    title: "Providers Map",
    category: "React Native / Expo",
    isScale: true,
    shortDescription:
      "A high-performance, location-based interactive mapping engine for real-time discovery.",
    description: [
      "Providers Map is a technical showcase of high-performance mobile mapping. It transforms dense geo-spatial data into an intuitive, responsive discovery experience using advanced clustering algorithms.",
      "Engineered for the Moroccan market, it integrates deep-linking with local communication tools like WhatsApp, significantly reducing the conversion path from discovery to booking.",
      "The application prioritizes performance 'at scale', utilizing TanStack React Query for intelligent caching and custom memoization strategies to maintain 60FPS during complex map interactions.",
      "A modular, strictly-typed architecture ensures the codebase remains maintainable and ready for enterprise-level feature additions.",
    ],
    techStack: [
      "React Native",
      "Expo (SDK 54)",
      "TypeScript",
      "TanStack React Query",
      "react-native-maps",
      "NativeWind",
    ],
    images: [
      "/providers-map/Screenshot 2026-03-08 at 13.52.41.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.50.28.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.50.39.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.53.16.png",
    ],
    features: [
      "Advanced marker clustering for high-density geographic data",
      "Zero-lag map interactions and smooth gesture handling",
      "Intelligent offline caching and background data syncing",
      "Direct WhatsApp and Call integration for rapid conversion",
      "Clean architecture with strict TypeScript enforcement",
    ],
  },
  {
    slug: "auraprestige-agency",
    title: "AuraPrestige Agency",
    category: "Next.js / Design System",
    isScale: true,
    shortDescription:
      "The official agency website for AuraPrestige, showcasing IT solutions and core values.",
    description: [
      "The flagship digital presence for AuraPrestige, a leading IT agency specializing in high-end software solutions. This project reflects the agency's caliber through its own digital interface.",
      "Designed in collaboration with top UI/UX designers, the site features a multidisciplinary approach to web design, blending technical robustness with visual storytelling.",
      "It serves as the hub for all AuraPrestige projects, including Domicilia, demonstrating the agency's capability to deliver large-scale production applications.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Interaction Design",
    ],
    images: [
      "/AuraPrestige/Screenshot 2026-03-10 at 15.17.47.png",
      "/AuraPrestige/Screenshot 2026-03-10 at 15.18.19.png",
      "/AuraPrestige/Screenshot 2026-03-10 at 15.18.53.png",
      "/AuraPrestige/Screenshot 2026-03-10 at 15.19.05.png",
    ],
    features: [
      "Custom interaction design and micro-animations",
      "High-fidelity visual storytelling",
      "Comprehensive service showcasing and case studies",
      "Premium agency-grade UI/UX",
      "Optimized performance for global reach",
    ],
  },
  {
    slug: "domicilia-landing-page",
    title: "Domicilia Landing Page",
    category: "Next.js / Landing Page",
    isScale: true,
    shortDescription:
      "A high-conversion landing page for the Domicilia mobile application.",
    description: [
      "The official landing page for Domicilia, designed to provide a comprehensive overview of the app's features and drive user acquisition.",
      "Built with Next.js, the page focuses on rapid load times and a seamless user journey, leading potential users from initial discovery to app store conversion.",
      "The design mirrors the mobile app's premium aesthetic, using coordinated visual language and motion to create a cohesive brand experience across web and mobile platforms.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Landing Page UX",
    ],
    images: [
      "/domicilia-landing-page/Screenshot 2026-03-10 at 15.24.11.png",
      "/domicilia-landing-page/Screenshot 2026-03-10 at 15.24.25.png",
      "/domicilia-landing-page/Screenshot 2026-03-10 at 15.24.42.png",
      "/domicilia-landing-page/Screenshot 2026-03-10 at 15.24.56.png",
      "/domicilia-landing-page/Screenshot 2026-03-10 at 15.25.06.png",
    ],
    features: [
      "Optimized conversion funnel for app downloads",
      "Interactive feature showcases and app previews",
      "Modern, responsive design with smooth animations",
      "Unified brand experience across web and mobile",
      "SEO-optimized for targeted service discovery",
    ],
  },
  {
    slug: "aura-ecommerce",
    title: "Aura Ecommerce",
    category: "Next.js",
    isScale: true,
    shortDescription:
      "A premium, high-conversion ecommerce platform built with Next.js.",
    description: [
      "Aura Ecommerce is a state-of-the-art retail platform designed for speed and visual excellence. It implements a modern shopping experience with performant rendering and intuitive navigation.",
      "Built with Next.js 14, the platform leverages Server Components for optimized initial loads and SEO, ensuring a fast and discoverable shopping experience.",
      "The UI is built with a custom design system focusing on premium aesthetics, featuring smooth transitions, skeleton loaders, and a highly responsive layout across all device tiers.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [
      "/auraStore/Screenshot 2026-03-10 at 15.19.51.png",
      "/auraStore/Screenshot 2026-03-10 at 15.20.00.png",
      "/auraStore/Screenshot 2026-03-10 at 15.20.33.png",
      "/auraStore/Screenshot 2026-03-10 at 15.20.56.png",
    ],
    features: [
      "Optimized cart management and persistent state",
      "Dynamic product filtering and real-time search",
      "Premium UI with smooth framer-motion animations",
      "SEO-first architecture with Next.js Server Components",
      "Robust responsive design for mobile and desktop",
    ],
  },
  {
    slug: "dr-khalid",
    title: "Dr. Khalid Clinic",
    category: "Next.js / Radix UI",
    isScale: true,
    shortDescription:
      "A modern medical clinic management and patient information portal.",
    description: [
      "A comprehensive digital presence for Dr. Khalid's medical clinic, focusing on accessibility, patient trust, and professional information delivery.",
      "Built with a bleeding-edge stack including Next.js 16/15 and Tailwind CSS 4, the platform showcases a commitment to staying ahead of technical curves while maintaining rock-solid stability.",
      "The project implements complex UI patterns using Radix UI primitives, ensuring high accessibility (a11y) standards for all patients, including those with diverse needs.",
    ],
    techStack: [
      "Next.js 16/15",
      "Tailwind CSS 4",
      "Radix UI",
      "TypeScript",
      "Lucide React",
    ],
    images: [
      "/al-nour-school/Screenshot 2026-03-10 at 15.21.54.png",
      "/al-nour-school/Screenshot 2026-03-10 at 15.22.48.png",
      "/al-nour-school/Screenshot 2026-03-10 at 15.23.20.png",
    ],
    features: [
      "Highly accessible UI components using Radix UI",
      "Mobile-first responsive appointment information",
      "Premium typography and professional aesthetic",
      "Performant images and lazy loading optimization",
      "Bleeding-edge Next.js implementation",
    ],
  },
  {
    slug: "al-nour-academy",
    title: "Al Nour Academy",
    category: "Next.js / Education",
    isScale: true,
    shortDescription:
      "A modern educational platform designed for a primary school environment.",
    description: [
      "Al Nour Academy is a digital ecosystem for primary education, focusing on creating a dynamic and engaging learning environment for students and parents.",
      "The platform redefines modern learning by combining academic foundations with innovative teaching tools, all delivered through a clean and inspiring user interface.",
      "It emphasizes accessibility and ease of use, ensuring that students, teachers, and parents can interact with the academy's digital resources effortlessly.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Educational UX"],
    images: [
      "/al-nour-school/Screenshot 2026-03-10 at 15.22.07.png",
      "/al-nour-school/Screenshot 2026-03-10 at 15.22.21.png",
      "/al-nour-school/Screenshot 2026-03-10 at 15.22.33.png",
    ],
    features: [
      "Engaging UI designed for young learners",
      "Structured information hierarchy for parents",
      "Modern educational teaching methodology integration",
      "Highly responsive and performance-optimized",
      "Inspiring visual direction across all sections",
    ],
  },
];
