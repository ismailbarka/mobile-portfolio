import { ReactNode } from "react";

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string[];
  techStack: string[];
  images: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "domicilia",
    title: "Domicilia",
    category: "React Native / NestJS",
    shortDescription:
      "A platform designed to transform how families find trusted cleaners and babysitters.",
    description: [
      "In 2025, AuraPrestige Tech, led by the visionary Ismail Barka, launched Domicilia, a mobile app designed to transform how families find trusted cleaners and babysitters.",
      "Built with React Native for a seamless cross-platform experience and powered by NestJS with GraphQL for a robust backend, Domicilia delivers a user-friendly platform that prioritizes convenience and reliability.",
      "Taha Moumni, our talented full-stack developer, and Zakaria El-Bouzkri, our skilled backend specialist, crafted the app’s technical core, while Abdellah Kacem designed its intuitive interface using Figma.",
      "Domicilia stands out by simplifying the process of connecting families with verified professionals. The app’s intuitive design ensures users can quickly find and book services tailored to their needs, whether for childcare or home cleaning.",
      "By leveraging React Native, the team ensured a consistent experience across iOS and Android, while NestJS with GraphQL provides a scalable and efficient backend. Abdellah Kacem’s Figma designs bring clarity and ease to the user experience, making Domicilia not just functional but a pleasure to use.",
    ],
    techStack: ["React Native", "NestJS", "GraphQL", "Figma"],
    images: [
      "/domicilia/home page-portrait.png",
      "/domicilia/Address with location-portrait copy.png",
      "/domicilia/Planification-portrait.png",
      "/domicilia/Profile page-portrait.png",
      "/domicilia/register-a-provider.png",
    ],
    features: [
      "Seamless cross-platform experience (iOS and Android)",
      "Robust backend powered by NestJS with GraphQL",
      "Intuitive UI/UX design crafted in Figma",
      "Connects families with verified cleaners and babysitters",
      "Simplified booking process tailored to user needs",
    ],
  },
  {
    slug: "providers-map",
    title: "Providers Map",
    category: "React Native / Expo",
    shortDescription:
      "A high-performance, location-based service discovery platform built with React Native.",
    description: [
      "Domicilia is a high-performance, location-based mobile application designed to connect users with local service providers (cleaning, maintenance, etc.) across Morocco.",
      "Built with a focus on speed, scalability, and local user behavior, it transforms the way users discover nearby help through an interactive, map-centric interface.",
      "Key technical features include a map-centric UX implemented using react-native-maps with advanced marker clustering, designed to handle high-density provider data without lag.",
      "Performance is prioritized with 'butter-smooth' scroll and pan performance by leveraging React memoization, optimized FlatList rendering, and TanStack React Query for ultra-fast data fetching and intelligent caching.",
      "The app features a clean modular architecture separating business logic, API services, and strongly-typed interfaces from UI components, ensuring it is ready for enterprise-scale features.",
    ],
    techStack: [
      "React Native",
      "Expo (SDK 54)",
      "TypeScript",
      "TanStack React Query",
      "NativeWind",
      "Google Maps API",
    ],
    images: [
      "/providers-map/Screenshot 2026-03-08 at 13.52.41.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.50.28.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.50.39.png",
      "/providers-map/Simulator Screenshot - iPhone 16e - 2026-03-08 at 13.53.16.png",
    ],
    features: [
      "Responsive map interface with advanced marker clustering",
      "Ultra-fast data fetching and caching with TanStack React Query",
      "Modular core/ architecture for enterprise scalability",
      "Optimized conversion funnel with direct WhatsApp and Call CTAs",
      "Robust Developer Experience (DX) with 0-lint-error codebase",
    ],
  },
];
