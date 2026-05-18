export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Mobil & Frontend",
    skills: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Backend & Scripting",
    skills: ["Python", "Java", "C#", "C++", "PHP", "Shell Scripting"],
  },
  {
    category: "DevOps & Altyapı",
    skills: ["OpenShift", "Jenkins", "Ansible", "Docker", "Linux", "CI/CD"],
  },
  {
    category: "Veritabanı & Bulut",
    skills: ["PostgreSQL", "SQL", "Firebase", "Firestore", "MinIO (S3)"],
  },
  {
    category: "Araçlar & Diğer",
    skills: ["Git", "Tailwind CSS", "REST API", "Adobe Photoshop", "Blender", "3ds Max"],
  },
];
