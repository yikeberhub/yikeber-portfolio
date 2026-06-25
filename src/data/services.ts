// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "telegram-bots",
    title: "Telegram Bot Development",
    description:
      "Custom Telegram bots for notifications, automation, user management, and business processes.",
    fullDescription:
      "I build custom Telegram bots that integrate seamlessly with your existing systems. Whether you need automated notifications, user management, order processing, or complex business workflows, I create reliable bots that scale with your needs.",
    icon: "Send",
    features: [
      "Automated notifications and alerts",
      "User management and authentication",
      "Order processing and payment integration",
      "Real-time data synchronization",
      "Multi-language support",
    ],
    technologies: ["Python", "Django", "Telegram Bot API", "Redis", "Celery"],
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks, integrate systems, and streamline workflows to save time and reduce errors.",
    fullDescription:
      "I help businesses eliminate manual, error-prone tasks by building custom automation solutions. From data synchronization between systems to automated reporting and workflow orchestration, I create systems that run reliably in the background so your team can focus on what matters.",
    icon: "Cpu",
    features: [
      "Workflow orchestration and scheduling",
      "System integration (CRM, ERP, etc.)",
      "Automated reporting and analytics",
      "Data synchronization across platforms",
      "Custom alert and notification systems",
    ],
    technologies: ["Python", "Celery", "Redis", "Django", "REST APIs"],
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    description:
      "RESTful APIs, third-party integrations, and microservices architecture for modern applications.",
    fullDescription:
      "I design and build robust, well-documented APIs that power modern web and mobile applications. Whether you need a RESTful API for your frontend, integration with third-party services, or a microservices architecture, I deliver scalable solutions with security and performance in mind.",
    icon: "Database",
    features: [
      "RESTful API design and development",
      "Third-party service integration",
      "Microservices architecture",
      "API security and authentication (JWT, OAuth)",
      "Comprehensive API documentation",
    ],
    technologies: ["Django REST", "Laravel", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    description:
      "End-to-end web applications using Django, Laravel, Next.js, and modern frontend frameworks.",
    fullDescription:
      "I build complete web applications from concept to deployment. With expertise in both backend and frontend technologies, I create seamless, performant, and beautiful web experiences that solve real business problems. I work closely with you to understand your needs and deliver solutions that exceed expectations.",
    icon: "Layout",
    features: [
      "Custom web application development",
      "Responsive and accessible UI design",
      "Database design and optimization",
      "Performance optimization and SEO",
      "Deployment and hosting setup",
    ],
    technologies: ["Django", "Laravel", "Next.js", "React", "Tailwind CSS", "PostgreSQL"],
  },
];