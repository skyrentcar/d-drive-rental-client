# Rental Car Client Website

Template website rental mobil multi-halaman berbasis HTML, CSS, dan JavaScript.

## Halaman
- `index.html` — Beranda
- `layanan.html` — Layanan
- `armada.html` — Katalog armada contoh
- `tentang.html` — Profil perusahaan
- `kontak.html` — Kontak dan formulir WhatsApp

## Sebelum website diserahkan ke klien
1. Ganti nama sementara **Drive Rental** dengan nama bisnis yang benar.
2. Ganti konten contoh dan katalog dengan informasi armada, harga, serta layanan yang telah dikonfirmasi.
3. Ganti nomor WhatsApp di `script.js` dengan nomor bisnis format internasional tanpa `+` atau spasi (contoh format: `62812XXXXXXXX`).
4. Ganti email, alamat, dan tautan Maps di `kontak.html`.
5. Tambahkan foto asli ke folder `assets/images` dan sesuaikan HTML jika diperlukan.
6. Uji semua halaman, navigasi, serta formulir sebelum dipublikasikan.

## Jalankan secara lokal
Di Terminal, dari folder proyek:

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000`. Tekan `Ctrl+C` di Terminal untuk menghentikan server.

## Publikasikan dengan GitHub Pages
1. Buat repository baru di GitHub.
2. Di folder proyek, jalankan:

```bash
git init
git add .
git commit -m "Create multi-page rental car website"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPOSITORY` dengan URL repository yang benar. Jika Git sudah diinisialisasi atau remote sudah ada, periksa `git status` dan `git remote -v` sebelum mengulang perintah.

3. Di GitHub buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu klik **Save**.
5. Tunggu deployment. URL biasanya `https://USERNAME.github.io/NAMA-REPOSITORY/`.

Formulir WhatsApp hanya menyiapkan pesan untuk dikirim oleh pengunjung. Template ini tidak menyimpan data ke database.
