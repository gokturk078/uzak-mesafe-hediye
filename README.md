# 💕 Uzak Mesafe Romantik Web Sitesi

Uzak mesafe ilişkisindeki çiftler için tasarlanmış, duygusal ve interaktif bir aşk hediyesi web sitesi.

---

## 🌟 Özellikler

### Görsel Efektler
- 🎨 **Premium Tasarım** - Gradient arka planlar, glassmorphism efektleri
- ❤️ **Floating Hearts** - Sürekli yükselen kalpler animasyonu
- ✨ **Cursor Trail** - Mouse hareketinde kalp izi (masaüstü)
- 🎊 **Confetti Animasyonu** - Sürpriz butonu ve özel anlarda

### Bölümler
1. **Hero Section** - Typing effect başlık, gün sayacı
2. **Hikaye Timeline** - Alternating vertical timeline
3. **Mesafe Haritası** - Gerçek zamanlı saatler, animasyonlu kalp
4. **Fotoğraf Galerisi** - Filtrelenebilir, lightbox özellikli
5. **Polaroid Anılar** - Random açılı polaroid kartları
6. **7 Flip Kart** - 3D çevrilebilir mesaj kartları
7. **Gelecek Hayalleri** - Animasyonlu bucket list
8. **İstatistikler** - Sayaç animasyonlu istatistikler
9. **Geri Sayım** - Bir sonraki buluşmaya sayaç
10. **Final Mesajı** - Etkileyici son bölüm

### Easter Eggs 🥚
- **Konami Kodu**: ↑↑↓↓←→←→BA tuşlarına basın!
- **Gizli Mesajlar**: Sayfada gizli tıklanabilir alanlar
- **Telefon Sallama**: Mobilde telefonu sallayın (iOS izin gerektirir)
- **Sürpriz Butonu**: Final bölümündeki altın buton

---

## 📁 Dosya Yapısı

```
uzak-mesafe-hediye/
├── index.html          # Ana HTML dosyası
├── styles.css          # Tüm stiller
├── script.js           # JavaScript işlevleri
├── README.md           # Bu dosya
└── images/             # Tüm görseller
    ├── 00_personA_ref.png
    ├── 01_personB_ref.png
    ├── 02_hero_video_call.png
    ├── 03_city_lights_distance.png
    ├── 04_suitcase_packing.png
    ├── 05_airport_hug_reunion.png
    ├── 06_train_window_thoughtful.png
    ├── 07_shared_playlist_headphones.png
    ├── 08_handwritten_letter_closeup.png
    ├── 09_polaroid_wall_memories.png
    ├── 10_morning_goodnight_ritual.png
    ├── 11_time_difference_clock.png
    ├── 12_map_line_connection.png
    ├── 13_rainy_window_voice_note.png
    └── 14_final_cinematic_together.png
```

---

## ⚙️ Kişiselleştirme

### 1. JavaScript Ayarları (`script.js`)

Dosyanın başındaki `CONFIG` objesini düzenleyin:

```javascript
const CONFIG = {
    // KİŞİSELLEŞTİRME - Bu değerleri değiştirin
    startDate: new Date('2024-02-14'),      // İlişki başlangıç tarihi
    meetingDate: new Date('2025-02-14'),    // Bir sonraki buluşma tarihi
    cityA: 'İstanbul',                       // İlk şehir
    cityB: 'Ankara',                         // İkinci şehir
    distance: 441,                           // Aralarındaki mesafe (km)
    personName: 'Özgür',                     // İmza için isim
    
    // Typing effect text
    typingText: 'Her Kilometre, Her Saniye...',
    typingSpeed: 100,
};
```

### 2. HTML İçeriği (`index.html`)

#### Şehir İsimleri
```html
<!-- distance-map bölümünde -->
<h3>İstanbul</h3>  <!-- İlk şehir -->
<h3>Ankara</h3>    <!-- İkinci şehir -->

<!-- Mesafe -->
<span class="distance-number">441</span>
```

#### İmza
```html
<!-- final-section bölümünde -->
<p class="signature handwritten">- Özgür 💕</p>
```

#### Timeline Tarihleri
```html
<span class="date-text">14 Şubat 2024</span>
```

### 3. Flip Kart İçerikleri

`index.html` dosyasında `messages-section` içindeki 7 flip kartın içeriklerini özelleştirin:

- **Kart 1**: Seni Neden Seviyorum (12 sebep listesi)
- **Kart 2**: Hayalimdeki Geleceğimiz
- **Kart 3**: İlk Görüşme Anısı
- **Kart 4**: Her Zaman Seninleyim
- **Kart 5**: Seni Özlediğim Anlar
- **Kart 6**: Seninle Her Şey Daha Güzel
- **Kart 7**: Kalbimden Geçenler

### 4. Fotoğraflar

`images/` klasöründeki görselleri kendi fotoğraflarınızla değiştirin:
- Aynı dosya isimlerini kullanın VEYA
- `index.html`'deki `src` yollarını güncelleyin

**Önerilen görsel boyutları:**
- Hero görsel: 1920x1080px veya daha büyük
- Galeri görselleri: 800x600px (4:3 oranı)
- Polaroid görselleri: 400x400px (1:1 oranı)

---

## 🚀 Yayınlama (Deploy)

### Seçenek 1: GitHub Pages (Ücretsiz)
1. GitHub'da yeni repo oluşturun
2. Dosyaları yükleyin
3. Settings > Pages > Source: main branch
4. URL: `https://kullaniciadi.github.io/repo-adi/`

### Seçenek 2: Netlify (Ücretsiz)
1. [Netlify](https://netlify.com)'e gidin
2. Klasörü sürükleyip bırakın
3. Otomatik URL alın

### Seçenek 3: Vercel (Ücretsiz)
1. [Vercel](https://vercel.com)'e gidin
2. Projeyi import edin
3. Deploy butonuna tıklayın

### Seçenek 4: Firebase Hosting (Ücretsiz)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 🎨 Renk Paleti

```css
--primary-pink: #FF6B9D;     /* Ana pembe */
--primary-rose: #FFC1E0;     /* Açık pembe */
--primary-purple: #C44569;   /* Mor */
--deep-purple: #9D5C96;      /* Koyu mor */
--accent-gold: #FED766;      /* Altın */
--dark-navy: #1F2833;        /* Koyu lacivert */
```

Renkleri değiştirmek için `styles.css` dosyasının başındaki `:root` bölümünü düzenleyin.

---

## 📱 Responsive Tasarım

Site aşağıdaki cihazlarda test edilmiştir:
- ✅ Desktop (1200px+)
- ✅ Laptop (992px - 1199px)
- ✅ Tablet (768px - 991px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (< 480px)

---

## 🌐 Tarayıcı Uyumluluğu

- ✅ Google Chrome (önerilen)
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ⚠️ Internet Explorer (desteklenmiyor)

---

## 🐛 Sorun Giderme

### Görseller yüklenmiyor
- Dosya yollarının doğru olduğundan emin olun
- Dosya isimlerinde Türkçe karakter kullanmayın
- Büyük/küçük harf duyarlılığına dikkat edin

### Animasyonlar çalışmıyor
- JavaScript konsolunda hata kontrolü yapın (F12)
- Tarayıcınızı güncelleyin

### Countdown çalışmıyor
- `CONFIG.meetingDate` tarihinin gelecekte olduğundan emin olun
- Tarih formatını kontrol edin: `new Date('YYYY-MM-DD')`

### Mobilde shake çalışmıyor
- iOS için kullanıcı izni gereklidir (ilk tıklamada otomatik istenir)
- Bazı Android cihazlarda desteklenmeyebilir

---

## 💕 Katkıda Bulunma

Bu proje sevgiyle yapılmıştır. Geliştirmeler için pull request açabilirsiniz!

---

## 📄 Lisans

Bu proje kişisel kullanım için ücretsizdir. Ticari kullanım için izin alınmalıdır.

---

## 🙏 Teşekkürler

- [Google Fonts](https://fonts.google.com/) - Fontlar
- [Font Awesome](https://fontawesome.com/) - İkonlar
- Sevgiyle geliştiren tüm uzak mesafe çiftleri! 💕

---

**💕 Mutlu olmayı hak ediyorsunuz! 💕**
# uzak-mesafe-hediye
