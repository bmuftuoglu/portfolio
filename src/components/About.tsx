export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
              Hakkımda
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Kodla hayaller inşa ediyorum
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                ODTÜ Bilgisayar Mühendisliği ve Bilişim Teknolojileri (CEIT) bölümü öğrencisiyim.
              </p>
              <p>
                Yazılım geliştirme tutkuyla yaklaştığım bir alan. Modern web teknolojilerini
                kullanarak hem estetik hem de performanslı uygulamalar geliştirmeyi seviyorum.
              </p>
              <p>
                Front-end&apos;den back-end&apos;e, veritabanı tasarımından deployment&apos;a kadar
                full-stack bir perspektifle projelere yaklaşıyorum.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Üniversite</p>
                <p className="text-sm text-white font-medium">ODTÜ — CEIT (Bilgisayar Müh. ve Bilişim Tek.)</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/bmuftuoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/barışmüftüoğlu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Tamamlanan Proje" },
              { value: "3+", label: "Yıl Deneyim" },
              { value: "5+", label: "Kullanılan Teknoloji" },
              { value: "100%", label: "Müşteri Memnuniyeti" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-colors"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
