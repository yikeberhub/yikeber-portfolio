// src/data/experience.ts
export interface Experience {
  id: string;
  period: string;
  title: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "soft-engineer",
    period: "2021 – Present",
    title: "Software Engineer",
    description:
      "Building web applications, Telegram bots, and automation systems for businesses.",
    technologies: ["Django", "Laravel", "React", "Next.js"],
  },
  {
    id: "backend-dev",
    period: "2019 – 2021",
    title: "Backend Developer",
    description:
      "Developed backend systems, REST APIs, and database architectures for various web applications.",
    technologies: ["Laravel", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    id: "fullstack-dev",
    period: "2022 – 2026",
    title: "Full Stack Developer",
    description:
      "Built full stack applications and deployed modern web technologies.",
    technologies: ["Django", "React", "Tailwind", "AWS"],
  },
  {
    id: "education",
    period: "2016 – 2020",
    title: "BSc in Software Engineering",
    description:
      "Aims to become a software engineer with a focus on artificial intelligence, data structures, algorithms, and system design.",
  },
];