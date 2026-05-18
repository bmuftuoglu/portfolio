export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  language: string;
}

export const projects: Project[] = [
  {
    slug: "student-help-desk",
    title: "Student Help Desk",
    shortDescription:
      "Google Gemini 2.5 Flash destekli, öğrencilere akademik destek sağlayan Flutter mobil uygulaması.",
    description: `Student Help Desk, öğrencilerin akademik sorularına yapay zeka desteğiyle yanıt alabildiği bir Flutter mobil uygulamasıdır.

Google Gemini 2.5 Flash API'si üzerine inşa edilen uygulama; metin, görsel ve PDF dosyalarını destekleyen çok modlu bir AI tutor deneyimi sunmaktadır.

**Öne Çıkan Özellikler:**
- Çok modlu AI desteği: metin, görsel ve PDF dosyaları üzerinden soru sorabilme
- Firebase Authentication ile Google ve e-posta/şifre girişi
- Cloud Firestore ile konuşma geçmişi ve veri kalıcılığı
- MinIO (S3 uyumlu) ile dosya yönetimi
- Türkçe ve İngilizce dil desteği
- Karanlık / aydınlık tema
- Görsel görüntüleyicide sıkıştırma ile zoom
- Sohbet arama özelliği
- Yeniden kimlik doğrulama ile güvenli profil yönetimi`,
    tags: ["Flutter", "Dart", "Firebase", "Google Gemini", "MinIO", "Firestore"],
    github: "https://github.com/bmuftuoglu/student-help-desk",
    language: "Dart",
  },
  {
    slug: "instagram-unfollowers",
    title: "Instagram Unfollowers",
    shortDescription:
      "Seni takip etmeyenleri listeleyen Python tabanlı Instagram araç.",
    description: `Instagram Unfollowers, takip ettiğin ancak seni geri takip etmeyen hesapları tespit eden bir Python aracıdır.

Instagram'da tek tek kontrol etmek yerine bu araç ile hızlıca takip listeni analiz edebilir ve karşılıklı takip durumunu görebilirsin.

**Özellikler:**
- Takip ettiğin ama seni takip etmeyen hesapları listeler
- Sade ve kullanımı kolay Python scripti
- Instagram verisi üzerinde çalışır`,
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
    tags: ["PHP", "HTML", "CSS", "Web Development"],
    github: "https://github.com/bmuftuoglu/PersonalBlog",
    language: "PHP",
  },
  {
    slug: "photo-port",
    title: "PhotoPort",
    shortDescription: "PHP ile geliştirilmiş fotoğraf portföy uygulaması.",
    description: `PhotoPort, fotoğraflarını sergilemek için PHP ile yazılmış bir portföy platformudur.

Görsellerin düzenli ve estetik bir şekilde sunulmasına olanak tanıyan bu proje, web programlamanın temellerini uygulamalı olarak öğrenmek amacıyla geliştirilmiştir.

**Özellikler:**
- Fotoğraf yükleme ve galeri yönetimi
- PHP tabanlı backend
- Portföy odaklı tasarım`,
    tags: ["PHP", "HTML", "CSS", "Gallery"],
    github: "https://github.com/bmuftuoglu/PhotoPort",
    language: "PHP",
  },
  {
    slug: "openshift",
    title: "OpenShift",
    shortDescription:
      "OpenShift üzerinde uygulama deploy etmek için hazırlanmış konfigürasyon ve kaynak dosyaları.",
    description: `Bu repo, Red Hat OpenShift platformunda uygulama deployment süreçlerini kolaylaştırmak için hazırlanmış konfigürasyon dosyalarını içermektedir.

OpenShift'in container orchestration yeteneklerinden yararlanarak uygulama deploy etme deneyimi kazanmak amacıyla oluşturulmuştur.

**İçerik:**
- OpenShift deployment konfigürasyonları
- Container orkestrasyon yapılandırması
- Altyapı yönetimi dosyaları`,
    tags: ["OpenShift", "DevOps", "Kubernetes", "Infrastructure"],
    github: "https://github.com/bmuftuoglu/openshift",
    language: "YAML",
  },
];
