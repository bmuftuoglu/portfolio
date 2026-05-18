export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Barış Müftüoğlu. Tüm hakları saklıdır.</p>
        <p className="font-mono">
          Next.js + Tailwind CSS ile yapıldı
        </p>
      </div>
    </footer>
  );
}
