import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Barış Müftüoğlu`,
    description: project.shortDescription,
  };
}

const languageColors: Record<string, string> = {
  Dart: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Python: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  PHP: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  TypeScript: "text-blue-300 bg-blue-300/10 border-blue-300/20",
  YAML: "text-green-400 bg-green-400/10 border-green-400/20",
  "C#": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "C++": "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const descriptionLines = project.description.split("\n");

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0]">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Geri dön
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs px-2 py-1 rounded-full border ${
                languageColors[project.language] ??
                "text-gray-400 bg-gray-400/10 border-gray-400/20"
              }`}
            >
              {project.language}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/30 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub&apos;da Gör
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Canlıya Bak
            </a>
          )}
          {project.appstore && (
            <a
              href={project.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/30 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          )}
          {project.playstore && (
            <a
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/30 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.35.2.74.24 1.12.14l11.9-11.9L12.47 8.3 3.18 23.76zM20.47 10.7l-2.79-1.61-3.56 3.56 3.56 3.56 2.81-1.62c.8-.46.8-1.43-.02-1.89zM2.1.46C1.8.78 1.63 1.27 1.63 1.9v20.2c0 .63.17 1.12.48 1.44l.08.07 11.32-11.32v-.27L2.18.38 2.1.46zM15.97 7.32l-3.5-3.5L1.63.46c.38-.1.78-.06 1.12.14l11.9 11.9-3.56-3.56 3.56-3.56 1.32 1.94z" />
              </svg>
              Google Play
            </a>
          )}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-lg font-semibold mb-6 text-purple-400">Proje Hakkında</h2>
          <div className="space-y-3 text-gray-300 leading-relaxed">
            {descriptionLines.map((line, i) => {
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <h3 key={i} className="text-white font-semibold mt-6 first:mt-0">
                    {line.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="flex items-start gap-2 list-none">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    {line.slice(2)}
                  </li>
                );
              }
              if (line.trim() === "") return null;
              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
