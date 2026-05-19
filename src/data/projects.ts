export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  appstore?: string;
  playstore?: string;
  language: string;
}

export const projects: Project[] = [
  {
    slug: "armoyu",
    title: "ARMOYU — Mobil Uygulama",
    shortDescription:
      "Kullanıcıların paylaşım yapabildiği, birbirlerini anlık takip edebildiği Flutter tabanlı sosyal mobil uygulama. App Store ve Google Play'de yayında.",
    description: `ARMOYU, kullanıcıların paylaşım yapabildiği, beğeni ve yorum ile birbirlerini anlık takip edebildiği sosyal bir mobil uygulamadır.

Flutter ile geliştirilmiş olup API, JSON ve PHP altyapısı üzerine kurulmuştur. Firebase ile push notification entegrasyonu sağlanmış; kullanıcılar oyun etkinlikleri ve haberlerden anlık haberdar olmaktadır.

Uygulama hem App Store hem de Google Play Store'da yayınlanmıştır.

**Özellikler:**
- Anlık paylaşım, beğeni ve yorum sistemi
- Firebase push notification ile bildirim altyapısı
- API ve JSON tabanlı veri yönetimi
- PHP backend entegrasyonu
- App Store ve Google Play Store yayını`,
    tags: ["Flutter", "Dart", "Firebase", "PHP", "API", "JSON"],
    appstore: "https://apps.apple.com/tr/app/armoyu/id6448871009",
    playstore: "https://play.google.com/store/apps/details?id=com.ARMOYU",
    language: "Dart",
  },
  {
    slug: "student-help-desk",
    title: "Student Help Desk",
    shortDescription:
      "Google Gemini 2.5 Flash destekli, öğrencilere akademik destek sağlayan Flutter mobil uygulaması.",
    description: `Student Help Desk, öğrencilerin akademik sorularına yapay zeka desteğiyle yanıt alabildiği bir Flutter mobil uygulamasıdır.

Google Gemini 2.5 Flash API'si üzerine inşa edilen uygulama; metin, görsel ve PDF dosyalarını destekleyen çok modlu bir AI tutor deneyimi sunmaktadır.

**Özellikler:**
- Çok modlu AI desteği: metin, görsel ve PDF dosyaları üzerinden soru sorabilme
- Firebase Authentication ile Google ve e-posta/şifre girişi
- Cloud Firestore ile konuşma geçmişi ve veri kalıcılığı
- MinIO (S3 uyumlu) ile dosya yönetimi
- Türkçe ve İngilizce dil desteği
- Karanlık / aydınlık tema
- Görsel görüntüleyicide zoom desteği
- Sohbet arama özelliği`,
    tags: ["Flutter", "Dart", "Firebase", "Google Gemini", "MinIO", "Firestore"],
    github: "https://github.com/bmuftuoglu/student-help-desk",
    language: "Dart",
  },
  {
    slug: "windows-form-csharp",
    title: "Windows Form Uygulaması (C#)",
    shortDescription:
      "REST API ile anlık veri çeken, dosya yönetimi ve PHP oturum yönetimi içeren C# Windows Form uygulaması.",
    description: `C# ile geliştirilen bu Windows Form uygulaması, REST API entegrasyonu ve dosya yönetimi özelliklerini bir arada sunar.

**Özellikler:**
- REST API üzerinden anlık veri çekme
- Dosya kurulum, taşıma, güncelleme ve silme için File I/O yönetimi
- PHP ile oturum yönetimi
- Git ile versiyon kontrolü`,
    tags: ["C#", ".NET", "REST API", "PHP", "Git", "Windows Forms"],
    language: "C#",
  },
  {
    slug: "caretta-robot",
    title: "Yumurta Toplama Robotu (Caretta Caretta)",
    shortDescription:
      "Belirlenen alanda rakipten önce tüm yumurtaları toplayan algoritma geliştirilen ve Teknofest'e davet edilen robot projesi.",
    description: `Caretta Caretta yumurtalarını korumaya yönelik bu robot projesi, belirlenen bir alanda rakip robottan önce tüm yumurtaları toplayan karmaşık bir algoritma üzerine kurulmuştur.

Robot tasarımı ve üretimi de ekip tarafından özgün fikirler doğrultusunda gerçekleştirilmiştir. Yarışma sonucunda ilk 10'a girerek Teknofest'e davet aldık.

**Özellikler:**
- Alana özel yumurta toplama algoritması geliştirildi
- Robot mekanik parçaları tasarlandı ve üretildi
- Yarışmada ilk 10'a girilerek Teknofest daveti alındı`,
    tags: ["Robotics", "Algorithm", "Embedded Systems", "Teknofest"],
    language: "C++",
  },
  {
    slug: "openshift",
    title: "OpenShift Cluster Otomasyonu",
    shortDescription:
      "OpenShift kümesine yeni node ekleme sürecini Jenkins, Ansible ve shell scripting ile uçtan uca otomatize eden altyapı projesi.",
    description: `Bu proje, Intertech'te System Engineer olarak geliştirilen OpenShift cluster otomasyon altyapısını içermektedir.

Jenkins pipeline, Ansible ve Linux shell scripting kullanılarak yeni node ekleme süreci tamamen otomatize edilmiştir.

**Kapsam:**
- DNS (A ve PTR kayıtları), DHCP, HAProxy load balancer ve PXE/GRUB provisioning dosyalarının otomatik konfigürasyonu
- CI/CD pipeline üzerinden altyapı değişikliklerinin orkestre edilmesi
- Manuel müdahale ihtiyacının ortadan kaldırılması`,
    tags: ["OpenShift", "Jenkins", "Ansible", "Linux", "CI/CD", "Shell"],
    github: "https://github.com/bmuftuoglu/openshift",
    language: "YAML",
  },
  {
    slug: "telegram-home-server",
    title: "Telegram Home Server",
    shortDescription:
      "Kişisel ev otomasyonu için merkezi Telegram bot gateway'i. Harici servislerden gelen bildirimleri Telegram'a iletir, komutları ilgili servislere yönlendirir.",
    description: `Telegram Home Server, ev otomasyonu için geliştirilen modüler bir Telegram bot altyapısıdır.

Bağımsız servisler "homebot" adlı paylaşılan Docker network üzerinden gateway'e bağlanır; her servis kendi komutlarını ve bildirimlerini sisteme ekler.

**Özellikler:**
- Harici servislerden gelen bildirimleri POST /notify endpoint'i ile Telegram'a iletme
- Telegram komutlarını ilgili iç servislere yönlendirme
- Bağlı servislerin dinamik komut listesi (/services komutu)
- Yetkisiz erişime karşı izin listesi tabanlı kullanıcı doğrulaması
- Docker Compose ile kolay kurulum ve ölçeklendirme
- Long polling (açık inbound port gerektirmez)`,
    tags: ["Python", "Docker", "Telegram Bot", "Home Automation", "REST API"],
    github: "https://github.com/bmuftuoglu/telegram-home-server",
    language: "Python",
  },
  {
    slug: "aski-telegram-bot",
    title: "ASKİ Water Watch",
    shortDescription:
      "ASKİ su kesintisi sayfasını periyodik olarak izleyen ve belirlenen ilçe/mahalle için kesinti başlayınca Telegram üzerinden bildirim gönderen Python servisi.",
    description: `ASKİ Water Watch, Ankara Su ve Kanalizasyon İdaresi'nin kesinti sayfasını düzenli aralıklarla kontrol eden bir HTTP servisidir.

telegram-home-server ile entegre çalışır; kesinti başladığında veya sona erdiğinde otomatik Telegram bildirimi gönderir.

**Mimari:**
- ASKİ sitesi → aski-water-watch → telegram-home-server → Telegram

**Özellikler:**
- Her 5 dakikada bir ASKİ sayfasını tarayarak kesinti tespiti
- Kesinti başlangıcı ve bitişinde anlık Telegram bildirimi
- /aski_durum ve /aski_kontrol Telegram komutları
- REST API ile manuel kontrol ve durum sorgulama
- Docker Compose ile kurulum; homebot Docker network üzerinden entegrasyon
- Pytest ile test kapsamı`,
    tags: ["Python", "Docker", "Telegram Bot", "Automation", "Web Scraping", "REST API"],
    github: "https://github.com/bmuftuoglu/aski-telegram-bot",
    language: "Python",
  },
  {
    slug: "instagram-unfollowers",
    title: "Instagram Unfollowers",
    shortDescription:
      "Seni takip etmeyenleri listeleyen Python tabanlı Instagram aracı.",
    description: `Instagram Unfollowers, takip ettiğin ancak seni geri takip etmeyen hesapları tespit eden bir Python aracıdır.

Instagram'da tek tek kontrol etmek yerine bu araç ile hızlıca takip listeni analiz edebilir ve karşılıklı takip durumunu görebilirsin.

**Özellikler:**
- Takip ettiğin ama seni takip etmeyen hesapları listeler
- Sade ve kullanımı kolay Python scripti`,
    tags: ["Python", "Instagram", "Automation"],
    github: "https://github.com/bmuftuoglu/InstagramUnfollowers",
    language: "Python",
  },
  {
    slug: "personal-blog",
    title: "Personal Blog",
    shortDescription: "PHP ile geliştirilmiş kişisel blog uygulaması.",
    description: `PersonalBlog, PHP ile yazılmış kişisel bir blog platformudur.

Yazı oluşturma, düzenleme ve yayınlama imkânı sunan bu proje, web geliştirme temellerini pekiştirmek amacıyla geliştirilmiştir.

**Özellikler:**
- Blog yazısı oluşturma ve yönetimi
- PHP tabanlı backend
- Dinamik içerik yönetimi`,
    tags: ["PHP", "HTML", "CSS"],
    github: "https://github.com/bmuftuoglu/PersonalBlog",
    language: "PHP",
  },
  {
    slug: "photo-port",
    title: "PhotoPort",
    shortDescription: "PHP ile geliştirilmiş fotoğraf portföy uygulaması.",
    description: `PhotoPort, fotoğraflarını sergilemek için PHP ile yazılmış bir portföy platformudur.

**Özellikler:**
- Fotoğraf yükleme ve galeri yönetimi
- PHP tabanlı backend
- Portföy odaklı tasarım`,
    tags: ["PHP", "HTML", "CSS", "Gallery"],
    github: "https://github.com/bmuftuoglu/PhotoPort",
    language: "PHP",
  },
];
