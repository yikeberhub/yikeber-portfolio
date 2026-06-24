// src/data/faq.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What technologies do you work with?",
    answer:
      "I specialize in Django, Laravel, React, Next.js, Telegram Bot API, PostgreSQL, and Redis. I also have experience with Docker, AWS, and CI/CD pipelines.",
  },
  {
    id: "2",
    question: "Do you offer freelance services?",
    answer:
      "Yes, I am available for freelance projects. I can help with building web applications, Telegram bots, or automation solutions for your business.",
  },
  {
    id: "3",
    question: "How long does a typical project take?",
    answer:
      "It depends on the project's complexity. A simple Telegram bot can take 1-2 weeks, while a full web application might take 4-8 weeks.",
  },
];