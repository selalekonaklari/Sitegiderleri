# Haziran 2026 Gelir–Gider Defteri

Site yönetimi Haziran 2026 gelir-gider tablosunun grafikli, çok sayfalı web sitesi. Sadece HTML/CSS/JS ile hazırlandı, herhangi bir kurulum gerektirmez.

## Sayfalar

- `index.html` — Genel bakış (özet rakamlar + gelir/gider dengesi)
- `giderler.html` — Gider dağılımı (pasta + çubuk grafik, kalem kalem döküm)
- `gelirler.html` — Gelir dağılımı (pasta + çubuk grafik, kalem kalem döküm)
- `kasa.html` — Banka kasası nakit miktarı ve fon durumu
- `assets/data.js` — Tüm rakamlar tek dosyada; **verileri güncellemek için sadece bu dosyayı düzenlemeniz yeterli**
- `assets/style.css` — Ortak tasarım

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir repo oluşturun (örn. `gelir-gider-defteri`).
2. Bu klasördeki tüm dosyaları repoya yükleyin (sürükle-bırak ile veya `git push` ile).
3. Repo ayarlarında **Settings → Pages** bölümüne gidin.
4. **Source** kısmından `main` branch ve `/ (root)` klasörünü seçip **Save** deyin.
5. Birkaç dakika içinde siteniz şu adreste yayında olur:
   `https://KULLANICI_ADINIZ.github.io/REPO_ADINIZ/`

## Yerel önizleme

İnternet bağlantınız varsa (grafikler ve yazı tipleri CDN üzerinden yükleniyor), `index.html` dosyasını doğrudan tarayıcıda çift tıklayarak açabilir ya da bir yerel sunucu ile çalıştırabilirsiniz:

```bash
python3 -m http.server 8000
```

sonra tarayıcıdan `http://localhost:8000` adresine gidin.

## Verileri sonraki ay için güncelleme

`assets/data.js` içindeki `EXPENSES`, `INCOMES` ve `CASH` dizilerindeki tutarları değiştirmeniz yeterli — tüm grafikler ve sayfalar otomatik olarak güncellenir.
