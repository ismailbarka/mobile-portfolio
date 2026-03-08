/**
 * Portfolio Constants
 * Centralized configuration for portfolio content
 * Update these values with your personal information
 */

export const PORTFOLIO = {
  // Personal Info
  name: 'Alex Chen',
  title: 'Senior Mobile Developer',
  email: 'hello@example.com',
  
  // Social Links
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },

  // Bio
  bio: {
    short: 'I\'m a senior mobile developer passionate about building high-performance, user-centric applications for iOS, Android, and React Native.',
    long: 'With 7+ years of experience in mobile development, I\'ve had the opportunity to work with some of the industry\'s leading companies and startups. I\'m passionate about crafting beautiful, performant applications that solve real-world problems.',
  },

  // Stats
  stats: {
    yearsExperience: '7+',
    appsPublished: '50+',
    usersReached: '5M+',
  },

  // Skills
  skills: {
    ios: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'ARKit'],
    android: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Room', 'Hilt', 'Coroutines'],
    crossPlatform: ['React Native', 'Flutter', 'TypeScript', 'JavaScript', 'GraphQL', 'REST APIs'],
    tools: ['Git', 'Firebase', 'Xcode', 'Android Studio', 'CI/CD', 'Figma'],
  },
} as const

// Project types for type safety
export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

// Experience entry type
export type ExperienceEntry = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
}
