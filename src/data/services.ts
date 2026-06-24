// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; 
}

export const services: Service[] = [
  {
    id: "telegram-bots",
    title: "Telegram Bot Development",
    description:
      "Custom Telegram bots for notifications, automation, user management, and business processes.",
    icon: "Send",
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks, integrate systems, and streamline workflows.",
    icon: "Cpu",
  },
  {
    id: "api-dev",
    title: "API Development & Integration",
    description:
      "RESTful APIs, third-party integrations, and microservices architecture.",
    icon: "Database",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end web applications using Django, Laravel, Next.js, and modern frontend frameworks.",
    icon: "Layout",
  },
];