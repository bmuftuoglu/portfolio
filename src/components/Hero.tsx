export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Yeni projeler için müsait
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Merhaba, ben{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Barış
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Yazılım geliştirici. Modern web uygulamaları ve kullanıcı deneyimi odaklı projeler üretiyorum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
