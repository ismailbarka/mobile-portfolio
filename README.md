# Mobile Developer Portfolio

A modern, high-performance portfolio website built with Next.js 16, React 19, and TypeScript. This portfolio is designed with senior-level code quality and best practices in mind.

## 🎯 Features

- **Modern Design**: Clean, minimal aesthetic with dark mode support
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance**: Built with Next.js for optimal performance and SEO
- **Type-Safe**: Full TypeScript support for better development experience
- **Accessibility**: WCAG compliant with semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🏗️ Architecture

```
/vercel/share/v0-project
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main portfolio page
│   └── globals.css          # Global styles with design tokens
├── components/              # React components
│   ├── navigation.tsx       # Header navigation
│   ├── hero.tsx             # Hero section
│   ├── featured.tsx         # Featured projects
│   ├── experience.tsx       # Experience timeline
│   ├── skills.tsx           # Skills showcase
│   ├── contact.tsx          # Contact CTA
│   ├── footer.tsx           # Footer
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # Portfolio content configuration
└── public/                  # Static assets
```

## 🚀 Getting Started

### Installation

```bash
# Using shadcn CLI (recommended)
npx shadcn-cli@latest init

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit `/lib/constants.ts` to add your personal information:

```typescript
export const PORTFOLIO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  bio: {
    short: 'Your short bio...',
    long: 'Your long bio...',
  },
  // ... add more info
}
```

### Projects

Update the `projects` array in `/components/featured.tsx` with your projects.

### Experience

Update the `experience` array in `/components/experience.tsx` with your work history.

### Skills

Modify skill categories in `/components/skills.tsx`.

### Social Links

Update social links in `/components/navigation.tsx` and `/components/footer.tsx`.

## 🎨 Customizing Colors

The portfolio uses CSS custom properties (design tokens) for theming:

1. Edit `/app/globals.css` to modify the color scheme
2. Dark mode is automatically supported via Tailwind's dark mode

### Design Tokens

- `--primary`: Main brand color (deep navy)
- `--accent`: Highlight color (blue/cyan)
- `--background`: Background color
- `--foreground`: Text color

## 🔧 Technology Stack

- **Framework**: Next.js 16
- **Runtime**: React 19.2
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.2
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## ✅ Best Practices Implemented

- ✅ Server Components by default (RSC)
- ✅ Client Components only where needed (`'use client'`)
- ✅ Semantic HTML and ARIA attributes
- ✅ Responsive design (mobile-first)
- ✅ Performance optimized with Next.js optimizations
- ✅ Type-safe with TypeScript
- ✅ Clean component architecture
- ✅ DRY principles with reusable components
- ✅ Design tokens for consistent theming
- ✅ SEO optimized with metadata

## 📱 Sections

### Navigation
- Fixed header with navigation links
- Social media links
- Responsive mobile menu support

### Hero
- Eye-catching introduction
- Call-to-action buttons
- Key statistics

### Featured Work
- Project showcase with descriptions
- Technology tags
- Case study links

### Experience
- Timeline view of work history
- Company details and period
- Key achievements

### Skills
- Organized by category
- iOS, Android, Cross-platform, and Tools

### Contact
- Email contact button
- Calendar scheduling link
- Direct email display

### Footer
- Quick links
- Social media links
- Copyright information

## 🚢 Deployment

Deploy on Vercel with one click:

```bash
npm run build
npm run start
```

Or use Vercel's deployment button in your repository.

## 📄 License

This portfolio template is free to use and modify for your personal use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Next.js 16 and React 19
