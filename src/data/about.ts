// src/data/about.ts
export interface AboutData {
  name: string;
  title: string;
  bio: string;
  bioFull: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    year: string;
    description: string;
  };
  philosophy: string;
  skills: {
    category: string;
    items: string[];
    icon: string;
  }[];
  personal: {
    email: string;
    phone: string;
    location: string;
    country: string;
    timezone: string;
  };
  social: {
    label: string;
    href: string;
    icon: string;
  }[];
  funFacts: string[];
  availability: string;
  photo: string;
}

export const aboutData: AboutData = {
  name: "Yikeber Misganaw",
  title: "Software Engineer",
  bio: "Building scalable web applications, Telegram bots, and automation systems that solve real-world problems.",
  bioFull: `I'm a passionate Software Engineer with a strong foundation in building robust, scalable, and high-performance digital solutions. My journey began with a deep curiosity for technology, leading me to pursue a BSc in Software Engineering from Bahir Dar University, Ethiopia.

Over the years, I've had the privilege of working on diverse projects — from full-stack web applications and e-commerce platforms to Telegram bots and business automation systems. I specialize in Django, Laravel, and modern frontend frameworks like Next.js and React.

I believe in writing clean, maintainable code that not only works but also delivers exceptional user experiences. My goal is to bridge the gap between complex technical challenges and practical business needs, delivering solutions that drive real growth.`,

  education: {
    degree: "BSc in Software Engineering",
    field: "Software Engineering",
    institution: "Bahir Dar University",
    location: "Ethiopia",
    year: "2016 – 2020",
    description:
      "Graduated with a focus on artificial intelligence, data structures, algorithms, and system design. Completed a Full Year Project that was recognized among the top 3 in the Software Engineering Department.",
  },

  philosophy:
    "I believe in building software that makes a difference. My approach combines technical excellence with a deep understanding of user needs. I prioritize clean architecture, performance, and maintainability, ensuring that every solution I deliver is built to last and scale.",

  skills: [
    {
      category: "Backend",
      icon: "Database",
      items: ["Django", "Laravel", "Python", "PHP", "Node.js", "Django REST"],
    },
    {
      category: "Frontend",
      icon: "Layout",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Database & DevOps",
      icon: "Server",
      items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Git", "AWS"],
    },
    {
      category: "Specialized",
      icon: "Bot",
      items: ["Telegram Bot API", "Celery", "WebSockets", "REST APIs"],
    },
  ],

  // ✅ NEW: Personal info
  personal: {
    email: "yikeber50@gmail.com",
    phone: "+251 946 472 687",
    location: "Ethiopia",
    country: "🇪🇹 Ethiopia",
    timezone: "GMT+3 (East Africa Time)",
  },

  // ✅ NEW: Social links
  social: [
    { label: "GitHub", href: "https://github.com/yourhandle", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle", icon: "LinkedIn" },
    { label: "Telegram", href: "https://t.me/yikeber_dev", icon: "Telegram" },
    { label: "WhatsApp", href: "https://wa.me/251946472687", icon: "WhatsApp" },
  ],

  funFacts: [
    "🎓 Graduated from Bahir Dar University with a BSc in Software Engineering",
    "🏆 Full Year Project recognized among Top 3 in the department",
    "🤖 Love building Telegram bots that automate real-world workflows",
    "☕ Coffee enthusiast – it fuels my code",
    "📚 Continuous learner — always exploring new technologies",
    "🌍 Based in Ethiopia, working with clients worldwide",
  ],

  availability: "Available for freelance projects and full-time opportunities",
  photo: "/images/about/portrait.png",
};