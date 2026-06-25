// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {LinkedinIcon} from "@/components/ui/icons";

const fadeUpScroll = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, },
  },
});

const contactMethods = [
  {
    label: "Telegram",
    icon: Send,
    href: "https://t.me/just_du1t",
    description: "Fastest response",
    color: "text-[#0088cc]",
    bg: "bg-[#0088cc]/10",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:yikeber50@gmail.com",
    description: "yikeber50@gmail.com",
    color: "text-[#7C3AED]",
    bg: "bg-[#7C3AED]/10",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/yikeber-misganaw-735887261/",
    description: "Professional network",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/251946472687",
    description: "+251 946 472 687",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
  },
];

const directInfo = [
  { icon: Mail, label: "Email", value: "yikeber50@gmail.com", href: "mailto:yikeber50@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251 946 472 687", href: "tel:+251946472687" },
  { icon: MapPin, label: "Location", value: "Ethiopia", href: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending via multiple channels
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className="relative bg-background min-h-screen pt-32 pb-20">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0)}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-white/5 px-4 py-1.5 text-sm text-[#8B5CF6]">
            <Sparkles size={14} />
            Let us Connect
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-muted">
            Have a project, collaboration, or just want to say hello?
            <br />
            Choose your preferred way to reach me.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpScroll(0.1)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative flex flex-col items-center rounded-xl border border-border/5 bg-white/5 p-6 text-center transition-all hover:border-[#7C3AED]/30 hover:bg-white/10"
            >
              <div className={`rounded-full ${method.bg} p-3`}>
                <method.icon className={`h-6 w-6 ${method.color}`} />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{method.label}</h3>
              <p className="text-sm text-muted">{method.description}</p>
              <span className="mt-2 text-xs text-[#7C3AED]">Connect →</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form + Direct Info */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpScroll(0.2)}
            className="rounded-xl border border-border/5 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold text-foreground">Send a Message</h2>
            <p className="mt-1 text-sm text-muted">
              I will get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-green-500/10 p-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-muted">
                  I will get back to you soon. Thanks for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-border/10 bg-background px-4 py-2.5 text-foreground placeholder-gray-500 transition-colors focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg border border-border/10 bg-background px-4 py-2.5 text-foreground placeholder-gray-500 transition-colors focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-border/10 bg-background px-4 py-2.5 text-foreground placeholder-gray-500 transition-colors focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-border/10 bg-background px-4 py-2.5 text-foreground placeholder-gray-500 transition-colors focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#8B5CF6] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpScroll(0.3)}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border/5 bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground">Direct Contact</h2>
              <p className="mt-1 text-sm text-muted">Reach me directly via:</p>

              <div className="mt-6 space-y-4">
                {directInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 rounded-lg border border-border/5 p-4 transition-colors hover:border-[#7C3AED]/30 hover:bg-white/5"
                  >
                    <item.icon className="h-5 w-5 text-[#7C3AED]" />
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-[#7C3AED]/5 p-4 border border-[#7C3AED]/10">
                <p className="text-sm text-muted">
                  <span className="text-[#7C3AED]">💡</span> I respond fastest on
                  <span className="text-foreground"> Telegram</span> and
                  <span className="text-foreground"> WhatsApp</span>.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-border/5 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-sm text-muted">Available for freelance projects</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Timezone: GMT+3 (East Africa Time)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}