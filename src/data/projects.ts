export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Proje Adı 1",
    description:
      "Bu projeyi buraya açıklayabilirsin. Hangi sorunu çözdüğünü, ne öğrendiğini ve hangi teknolojileri kullandığını yaz.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Proje Adı 2",
    description:
      "İkinci projenin açıklaması. Kullandığın teknolojiler, öne çıkan özellikler ve projenin amacı hakkında bilgi ver.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Proje Adı 3",
    description:
      "Üçüncü projenin açıklaması. Bu alan daha sonra gerçek proje bilgileriyle güncellenecek.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Proje Adı 4",
    description:
      "Dördüncü projenin açıklaması. İstediğin kadar proje ekleyebilirsin.",
    tags: ["Vue.js", "Firebase"],
    github: "https://github.com",
    featured: false,
  },
];
