const workExperience = [
  {
    title: "System Engineer",
    company: "Intertech",
    period: "Kasım 2025 — Günümüz",
    bullets: [
      "Jenkins pipeline, Ansible ve Linux shell scripting kullanarak OpenShift kümelerine yeni node ekleme sürecini uçtan uca otomatize etti.",
      "DNS (A ve PTR kayıtları), DHCP, HAProxy load balancer ve PXE/GRUB provisioning dosyaları dahil kritik altyapı bileşenlerinde konfigürasyon güncellemelerini otomatikleştirdi.",
      "CI/CD pipeline üzerinden altyapı değişikliklerini orkestre ederek node provisioning sürecindeki manuel müdahaleyi tamamen ortadan kaldırdı.",
    ],
    tags: ["OpenShift", "Jenkins", "Ansible", "Linux", "CI/CD"],
  },
];

const volunteerWork = [
  {
    title: "Trainer Mentor & Sosyal Medya Koordinatörü",
    company: "T3 Vakfı",
    period: "Mart 2024 — Aralık 2025",
    bullets: [
      "Trainer mentor scholar olarak görev aldı.",
      "T3 Vakfı Ankara Sosyal Medya Koordinatörlüğü yaptı.",
    ],
    tags: ["Mentorluk", "Sosyal Medya"],
  },
  {
    title: "Yazılım ve Mekanik Ekip Üyesi",
    company: "ODTÜ Robotik Topluluğu",
    period: "Ekim 2022 — Ağustos 2024",
    bullets: [
      "3 farklı ekipte görev aldı.",
      "İTÜ Robot Olimpiyatları'na katıldı.",
      "2 yıl boyunca ODTÜ Robotik Günleri etkinliğinde koordinatör olarak yer aldı.",
    ],
    tags: ["Robotics", "Koordinatörlük"],
  },
  {
    title: "Yazılım Geliştirici",
    company: "Aramızdaki Oyuncu",
    period: "Eylül 2018 — Günümüz",
    bullets: [
      "aramizdakioyuncu.com web sitesinin front-end geliştirmesinde yer aldı.",
      "C# ve MS Access ile masaüstü uygulaması geliştirdi.",
      "Flutter ile mobil uygulama geliştirip yayınladı.",
    ],
    tags: ["Flutter", "C#", "Web", "MS Access"],
  },
];

function TimelineItem({
  title,
  company,
  period,
  bullets,
  tags,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}) {
  return (
    <div className="relative pl-8 border-l border-white/10 pb-10 last:pb-0">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0f0f0f]" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-purple-400 text-sm">{company}</p>
        </div>
        <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-1.5 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full mt-1.5 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
            Deneyim
          </span>
          <h2 className="text-4xl font-bold mt-3">İş & Gönüllülük</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">
              İş Deneyimi
            </h3>
            {workExperience.map((item) => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </div>

          {/* Volunteer */}
          <div>
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">
              Gönüllülük
            </h3>
            {volunteerWork.map((item) => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
