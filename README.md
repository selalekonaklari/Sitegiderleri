# Gelir–Gider Defteri (2024 – 2026)

Site yönetimi gelir-gider tablolarının, tüm ayları ve yılları kapsayan, grafikli çok sayfalı web sitesi. Sadece HTML/CSS/JS ile hazırlandı, herhangi bir kurulum ya da internet bağlantısı gerektirmez (grafikler saf CSS ile çizilir, dış kütüphane kullanılmaz).

## Kapsam

**30 ay** (Ocak 2024 – Haziran 2026), `2024_Bilanço.xlsx` dosyasındaki ilgili sayfalardan otomatik çıkarılmıştır.

## Sayfalar

- `index.html` — Seçili ayın genel bakışı (özet rakamlar + gelir/gider dengesi + özet tablo)
- `giderler.html` — Seçili ayın gider dağılımı (donut grafik + kalem kalem tablo)
- `gelirler.html` — Seçili ayın gelir dağılımı (donut grafik + kalem kalem tablo, ödeme sayılarıyla)
- `kasa.html` — Banka kasası nakit miktarı ve görevli tazminatı fon durumu (ay bazlı; fon dökümü olmayan erken aylarda otomatik gizlenir)
- `arsiv.html` — Tüm ayları yıl yıl gruplayarak listeler, her yılın toplam gelir/gider/farkını gösterir; bir aya tıklayınca o ayın raporuna gider

Sayfa üstündeki **ay seçici** ile (yıllara göre gruplanmış açılır menü) istediğiniz aya anında geçebilirsiniz — URL'de `?ay=2025-03` gibi bir parametre olarak tutulur, dilediğiniz ayın linkini doğrudan paylaşabilirsiniz.

## Dosya yapısı

- `assets/months-data.js` — **Tüm veri burada.** `MONTH_LIST` (ay listesi, kronolojik) ve `MONTHS` (her ayın gider/gelir/kasa/fon verisi) bu dosyada.
- `assets/common.js` — Ay seçme, para birimi biçimlendirme, yıl bazlı toplama fonksiyonları
- `assets/charts.js` — Kütüphane kullanmadan CSS `conic-gradient` ile donut grafik çizen ve renk paleti üreten kod
- `assets/style.css` — Ortak tasarım

## GitHub Pages ile yayınlama

1. GitHub'da bir repo oluşturun.
2. Bu klasördeki tüm dosya ve klasörleri (özellikle `assets/` klasörünün **tamamını**) repoya yükleyin.
3. Settings → Pages → Source: `main` branch, `/ (root)` klasörü, Save.
4. Birkaç dakika içinde site `https://KULLANICI_ADINIZ.github.io/REPO_ADINIZ/` adresinde yayında olur.

## Yeni bir ay eklemek

`assets/months-data.js` dosyasında iki yeri güncellemeniz yeterli:

1. `MONTH_LIST` dizisinin **sonuna** yeni ayı ekleyin:
   ```js
   { id: '2026-07', label: 'Temmuz 2026' },
   ```
2. Dosyanın sonuna yeni ayın verisini ekleyin (mevcut bir ayın bloğunu kopyalayıp rakamları değiştirmek en kolayı):
   ```js
   MONTHS['2026-07'] = {
     label: 'Temmuz 2026',
     period: '01 Temmuz 2026 - 31 Temmuz 2026',
     expenses: [ { name: '...', amount: 0, desc: '...' }, ... ],
     incomes:  [ { name: '...', amount: 0, count: 0, desc: '' }, ... ],
     cash: { banka: 0, bankaLabel: null, fonYatan: 0, fonKar: 0, fonToplam: 0 },
     totals: { gelir: 0, gider: 0, fark: 0 }
   };
   ```

Başka hiçbir dosyayı değiştirmenize gerek yok — ay seçici, arşiv sayfası ve tüm grafikler otomatik olarak güncellenir. (Yeni bir aya ait tabloyu bana ilettiğinizde bu iki adımı ben de sizin yerinize yapıp güncel dosyayı verebilirim.)

## Yerel önizleme

Tüm veriler ve grafikler yerelde (internet olmadan) da çalışır. `index.html` dosyasını çift tıklayarak tarayıcıda açabilirsiniz. İsterseniz bir yerel sunucu da başlatabilirsiniz:

```bash
python3 -m http.server 8000
```
