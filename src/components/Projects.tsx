import Link from "next/link";
import { projects } from "@/data/projects";

const languageColors: Record<string, string> = {
  Dart: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Python: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  PHP: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  TypeScript: "text-blue-300 bg-blue-300/10 border-blue-300/20",
  YAML: "text-green-400 bg-green-400/10 border-green-400/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
            Projeler
          </span>
          <h2 className="text-4xl font-bold mt-3">Neler Yaptım?</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            GitHub&apos;daki gerçek projelerim. Her birine tıklayarak detaylara ulaşabilirsin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full border ${
                    languageColors[project.language] ??
                    "text-gray-400 bg-gray-400/10 border-gray-400/20"
                  }`}
                >
                  {project.language}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-gray-500 group-hover:text-purple-400 transition-colors">
                Detayları gör
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
