// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// ✅ Make component async and await params
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;  // ← Note: params is now a Promise
}) {
  const { slug } = await params;        // ← Await the params
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative bg-[#030712] min-h-screen pt-32 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ProjectDetailClient project={project} />
      </div>
    </section>
  );
}