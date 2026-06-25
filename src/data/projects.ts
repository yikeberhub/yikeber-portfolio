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
    id: "marketbot",
    title: "MarketBot - Telegram Marketplace Management System",
    description:
      "A Telegram-powered marketplace management platform where sellers submit products for review, administrators moderate listings, and approved items are automatically published to marketplace channels.",
    fullDescription:
      "MarketBot is a Telegram marketplace management system built with Django and the Telegram Bot API. Sellers can submit products directly through the bot, track listing status, and manage their marketplace activity from a dedicated seller dashboard. Administrators review submitted listings, approve or reject products, publish approved items to Telegram channels, mark listings as sold, remove posts from channels, and manage marketplace operations through a web-based admin dashboard. The system also includes role management, category management, configurable posting settings, media handling, and automated Telegram publishing workflows. Built using a webhook-based architecture with a focus on automation, content moderation, and scalable marketplace operations.",
    tags: [
      "Django",
      "PostgreSQL",
      "Telegram Bot API",
      "Redis",
      "Webhooks",
      "Role-Based Access Control",
    ],
    image: "/projects/marketbot/cover.png",
    screenshots: [
      "/projects/marketbot/dashboard.jpg",
      "/projects/marketbot/listings.jpg",
      "/projects/marketbot/seller-panel.jpg",
      "/projects/marketbot/telegram-bot.jpg",
    ],
    github: "https://github.com/yikeberhub/marketbot",
    link: "https://t.me/bahirdar_marketplace_bot",
    featured: true,
    category: "telegram",
  },
  {
    id: "ecommerce-platform",
    title: "Multi-Vendor E-Commerce Marketplace",
    description:
      "A full-stack marketplace platform where multiple vendors can showcase and sell products through a centralized storefront with secure online payments powered by Chapa.",
    fullDescription:
      "Developed a multi-vendor e-commerce marketplace using React, Django REST Framework, and PostgreSQL. The platform enables multiple vendors to manage and showcase their products while customers browse listings, place orders, and complete payments through Chapa payment integration. Features include vendor management, product catalogs, category organization, shopping cart functionality, order processing, user authentication, and a comprehensive administration panel for managing users, vendors, product categories, orders, and overall marketplace operations. Designed with a RESTful architecture to support scalability, maintainability, and efficient communication between frontend and backend services.",
    tags: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Chapa Payment",
      "JWT Authentication",
    ],
    image: "/projects/ecommerce/home.png",
    screenshots: [
      "/projects/ecommerce/home.png",
      "/projects/ecommerce/products.png",
      "/projects/ecommerce/product_detail.png",
      "/projects/ecommerce/order_summary.png",
      "/projects/ecommerce/admin_stat.png",
    ],
    github: "https://github.com/yikeberhub/E-commerce",
    link: "https://e-commerce-frontend-25em.onrender.com/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "balemuya",
    title: "Balemuya - Location-Based Service Marketplace",
    description:
      "An award-winning platform that connects customers with verified professionals through real-time location-based discovery, job posting, booking, and service management workflows.",
    fullDescription:
      "Balemuya is a location-based service marketplace developed as a final-year Software Engineering team project. The platform connects customers with skilled professionals such as electricians, plumbers, satellite dish installers, and other service providers. Customers can post service requests, discover nearby professionals based on location, make bookings, and review completed services. Professionals can create profiles, undergo verification, apply for available jobs, manage service requests, and build their reputation through ratings and reviews. The platform also includes reporting and dispute-management workflows, helping maintain trust and service quality within the ecosystem.\n\nAs the Backend & Telegram Bot Developer, I was responsible for designing and implementing backend services, REST APIs, business logic, authentication workflows, professional verification processes, job application workflows, location-based service matching support, and Telegram bot integrations. Administrative features included professional verification, user management, dispute handling, and platform moderation tools.\n\nThe project was recognized with 3rd Place in the Software Engineering Faculty Final Year Project Competition for its practical approach to improving professional visibility and helping customers easily discover trusted service providers.",
    tags: [
      "Django",
      "Django REST Framework",
      "React Js",
      "Next Js",
      "PostgreSQL",
      "Geolocation",
      "Telegram Bot API",
      "REST API",
    ],
    image: "/projects/balemuya/home.jpg",
    screenshots: [
      "/projects/balemuya/home.jpg",
      "/projects/balemuya/web_home.jpg",
      "/projects/balemuya/balemuya_pay_succ.jpg",
    ],
    github: "https://github.com/yikeberhub/Balemuya-project",
    link: "https://balemuya-fe.vercel.app/en",
    featured: true,
    category: "fullstack",
  },
  {
    id: "supportflow-ai",
    title: "SupportFlow AI",
    description:
      "A support workflow platform designed to help businesses organize customer requests, automate repetitive tasks, and improve operational efficiency.",
    fullDescription:
      "Built a workflow-focused support system that centralizes customer communication and support operations. The platform is designed around automation, ticket organization, workflow tracking, and scalable backend services that can integrate with AI-powered support features and external communication channels.",
    tags: ["Python", "Django", "PostgreSQL", "REST API", "Automation"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
    github: "https://github.com/yikeberhub/supportflow-ai",
    featured: true,
    category: "fullstack",
  },
  {
    id: "homerent-platform",
    title: "HomeRent Platform",
    description:
      "A property rental platform that allows property owners to manage listings while helping tenants discover and inquire about available properties.",
    fullDescription:
      "Developed a rental management platform focused on simplifying property discovery and rental workflows. Features include user authentication, property listing management, inquiry handling, search capabilities, and scalable backend architecture for future expansion.",
    tags: ["Django", "PostgreSQL", "Authentication", "REST API"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
    github: "https://github.com/yikeberhub/homerent-platform",
    featured: true,
    category: "fullstack",
  },
  {
    id: "extract-id-bot",
    title: "Extract ID Bot",
    description:
      "A Telegram automation tool designed to process user-submitted documents and extract structured identification information.",
    fullDescription:
      "Built an automation-focused Telegram bot that processes uploaded identification documents and extracts key information for downstream workflows. Designed to reduce manual data entry and improve operational efficiency through automation.",
    tags: ["Python", "Telegram Bot API", "Automation", "OCR"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&crop=center",
    github: "",
    category: "automation",
  },
  {
    id: "agape-laravel-api",
    title: "Agape Laravel API",
    description:
      "A RESTful backend API developed with Laravel to support web and mobile applications through secure and scalable services.",
    fullDescription:
      "Implemented a Laravel-based backend providing authentication, user management, business logic, and API endpoints for client applications. Focused on maintainable architecture, secure access control, and clean API design.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
    github: "https://github.com/yikeberhub/agape-laravel-api",
    category: "backend",
  },
];