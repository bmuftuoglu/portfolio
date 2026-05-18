import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
            Beceriler
          </span>
          <h2 className="text-4xl font-bold mt-3">Teknoloji Yığını</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Proje geliştirirken sıklıkla kullandığım teknolojiler ve araçlar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-purple-400 font-semibold text-sm mb-4 tracking-wider uppercase">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
