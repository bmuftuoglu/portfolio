export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "REST API", "GraphQL"],
  },
  {
    category: "Veritabanı",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Araçlar",
    skills: ["Docker", "Git", "Linux", "Coolify", "CI/CD"],
  },
];
