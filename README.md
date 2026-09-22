# Taman Kecil Griselda
Portofolio HTML, CSS, JavaScript untuk Griselda Helga Dana — X RPL 3, absen 26, SMK Krian 1.

## Membuka website
Ekstrak ZIP, buka `index.html`. Seluruh font, foto, dan dekorasi tersimpan lokal. Tidak memerlukan npm install untuk membuka halaman. Untuk deployment dengan galeri otomatis, gunakan build di bawah.

## Foto profil dan latar
Kedua foto asli dari pesanan sudah disertakan, tanpa perubahan wajah.
- `assets/fotoprofil.jpg`: foto pertama, tampil dalam bingkai profil.
- `assets/latar-griselda.jpg`: foto kedua, latar halaman utama dengan lapisan warna agar teks terbaca.
- Buka `config.js`: `imageUrl` untuk foto profil, `backgroundUrl` untuk latar. Bisa menggunakan URL gambar HTTPS publik atau path lokal.
- `objectPosition` dan `backgroundPosition` mengatur posisi pemotongan visual CSS, misalnya `center 35%`.
- URL harus langsung menuju gambar, bukan halaman album/login. URL bermasalah akan memakai foto bawaan.

## Kontak
Isi `PORTFOLIO_CONTACT.email` dan `PORTFOLIO_CONTACT.instagram` di `config.js`. Instagram ditulis username saja. Data kontak belum diberikan, sehingga ditampilkan sebagai “Belum dicantumkan”.

## Galeri prestasi
Masukkan file ke folder `asset` dengan nama `prestasi1.png`, `prestasi2.jpg`, `prestasi3.jpeg`, dan seterusnya.
- Jika langsung membuka HTML tanpa build, gunakan nomor urut dari 1 tanpa celah. Pemindaian berhenti pada nomor pertama yang tidak ada.
- Build memindai semua gambar sesuai pola nama, mendukung celah nomor, tanpa batas nomor tetap.
- Jalankan `node scripts/build-prestasi.mjs` dari folder proyek. Hasil website ada di `dist`.
- Foto profil tidak dimasukkan ke galeri prestasi. Belum ada sertifikat yang diberikan.

## GitHub dan Vercel
1. Ekstrak ZIP, unggah isinya ke root repository GitHub. Pastikan index.html dan vercel.json ada di root, bukan ZIP-nya saja.
2. Import repository tersebut di Vercel.
3. Konfigurasi sudah ada di vercel.json: build `node scripts/build-prestasi.mjs`, output `dist`, tanpa framework.
4. Deploy. Setelah menambahkan prestasi baru, commit dan deploy ulang agar daftar diperbarui.
Untuk hosting statis lain, gunakan isi `dist` setelah build. Untuk GitHub Pages tanpa build, halaman tetap bisa memakai pemindaian gambar berurutan.

## Isi & interaksi
- Identitas, riwayat sekolah dan kemampuan 70% / 80% / 75% / 80% sesuai formulir.
- Tiga demo baru: Rangkai Buket, Kelopak Kembar, Lily Kecilku. Demo dibuat untuk portofolio ini, bukan klaim proyek terdahulu atau penghargaan siswa.
- Halaman prestasi, perbesar gambar, navigasi hamburger, tema pagi/malam, dan kembali ke atas.
- Kelopak sakura jatuh, bunga lily bergoyang, kupu-kupu, animasi saat bagian halaman masuk layar dan hover kartu.
- Tombol jeda animasi tersedia di kanan bawah. Pengaturan reduced motion sistem juga dihormati.
- Judul memakai serif, isi memakai sans-serif lokal. Lisensi font disertakan di assets/fonts.
- Ilustrasi lily dibuat sebagai SVG ringan. Tidak ada pelacak atau layanan formulir eksternal.
