// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
  category: "fullstack" | "backend" | "automation" | "telegram";
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "telegram-marketplace",
    title: "Telegram Marketplace Platform",
    description:
      "A multi-role marketplace platform with seller, buyer, and sellers marketplace, including listing management, order system, reviews, and Telegram bot integration.",
    fullDescription:
      "A comprehensive marketplace solution built on Telegram with Django backend. Features include user roles (seller, buyer, admin), product listing management, order processing, review system, and real-time notifications via Telegram bot. The platform handles thousands of transactions and supports media uploads.",
    tags: ["Django", "PostgreSQL", "Telegram API", "Redis", "Celery"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    github: "https://github.com/yourhandle/telegram-marketplace",
    featured: true,
    category: "telegram",
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "support-flow-ai",
    title: "Support Flow AI Platform",
    description:
      "A powerful customer support platform with automated ticket management, instant response, and knowledge base management.",
    fullDescription:
      "An AI-powered customer support platform built with Next.js and OpenAI. Features include automated ticket routing, AI-powered response suggestions, knowledge base with semantic search, and integration with Telegram for instant notifications.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL", "Telegram", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    github: "https://github.com/yourhandle/support-flow-ai",
    featured: true,
    category: "fullstack",
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full e-commerce solution with product catalog, cart, checkout, payment integration, and admin dashboard.",
    fullDescription:
      "A full-featured e-commerce platform built with Laravel. Includes product catalog with categories and filters, shopping cart with persistent storage, secure checkout with Stripe integration, and a comprehensive admin dashboard for managing orders, products, and users.",
    tags: ["Laravel", "MySQL", "Tailwind", "Stripe", "Livewire"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/yourhandle/ecommerce-platform",
    featured: true,
    category: "fullstack",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "telegram-automation-bot",
    title: "Telegram Automation Bot",
    description:
      "Collection of Telegram bots for notifications, workflow automation, user management, and business processes.",
    fullDescription:
      "A suite of Telegram bots built with Laravel and Python for various automation tasks. Includes bots for: user management with OTP authentication, workflow automation for business processes, notification system for critical alerts, and integration with third-party APIs.",
    tags: ["Laravel", "MySQL", "Telegram API", "Redis", "Python"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    github: "https://github.com/yourhandle/telegram-automation-bot",
    featured: true,
    category: "backend",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "inventory-management",
    title: "Django Inventory Management",
    description:
      "A comprehensive inventory management system with real-time stock tracking, reporting, and analytics.",
    fullDescription:
      "A powerful inventory management system built with Django. Features include real-time stock tracking, multi-warehouse support, purchase order management, sales forecasting, and detailed analytics dashboard with export capabilities.",
    tags: ["Django", "PostgreSQL", "Django REST", "Chart.js", "Celery"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    github: "https://github.com/yourhandle/inventory-management",
    category: "backend",
  },
];