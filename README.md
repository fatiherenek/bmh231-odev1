Markdown
# BMH231 Web Programlama - Ödev 1

Bu proje, Web Programlama dersi kapsamında Node.js, npm ve Git kullanılarak geliştirilmiş temel bir HTTP web sunucusudur.

## Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu bilgisayarınıza klonlayın:
   git clone https://github.com/fatihrenek/bmh231-odev1.git
2. Proje klasörüne girin:
   cd bmh231-odev1
3. Gerekli paketleri yükleyin:
   npm install
4. Sunucuyu başlatın:
   npm start

Sunucu http://localhost:3000 adresinde çalışmaya başlayacaktır.

## Desteklenen Yollar (Routes)

* `/` : Ana sayfa (HTML formatında).
* `/hakkimda` : Kendimi tanıttığım sayfa (HTML).
* `/api/ders` : Ders bilgilerini içeren JSON yanıtı.
* `/api/agep` : AGEP son teslim tarihi ve kalan gün sayısını içeren JSON yanıtı.