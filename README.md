# Portfolio Website

Struktur folder portfolio website yang telah dipisahkan menjadi file-file terpisah untuk kemudahan maintenance dan pengembangan.

## 📁 Struktur Folder

```
porto/
├── portfolio.html           # File HTML utama
├── README.md               # File dokumentasi ini
└── assets/
    ├── css/
    │   └── style.css       # Semua styling CSS
    ├── js/
    │   └── script.js       # Semua JavaScript (behavior)
    └── images/
        └── profile.jpg     # Folder untuk menyimpan foto profil
```

## 📝 Cara Menambahkan Foto Profil

1. **Siapkan foto Anda:**
   - Format: JPG, PNG, atau format gambar lainnya
   - Resolusi: Minimal 400x400px (optimal 500x500px)
   - Ukuran file: Kurang dari 500KB untuk loading optimal

2. **Simpan foto ke folder:**
   - Letakkan foto pada path: `assets/images/profile.jpg`
   - Atau gunakan nama file yang sesuai dengan keinginan Anda

3. **Update referensi di HTML (jika menggunakan nama berbeda):**
   - Buka `portfolio.html`
   - Cari baris: `<img src="assets/images/profile.jpg"`
   - Ganti `profile.jpg` dengan nama file Anda

## 🎨 Struktur File

### `portfolio.html`
File HTML utama yang berisi struktur dan konten website. Referensi ke CSS dan JavaScript sudah dipisahkan.

### `assets/css/style.css`
File CSS yang berisi semua styling:
- Variabel warna dan tema
- Layout dan positioning
- Responsive design
- Animasi dan transisi

### `assets/js/script.js`
File JavaScript yang berisi semua interaktivitas:
- Navbar scroll effect
- Mobile menu toggle
- Scroll reveal animation
- Skill bar animation
- Form submission
- Active nav highlight

### `assets/images/`
Folder untuk menyimpan semua gambar, khususnya foto profil:
- Simpan foto profil dengan nama `profile.jpg`
- Bisa menambahkan gambar proyek atau asset lainnya

## 🚀 Tips Pengembangan

1. **CSS Modifications:**
   - Edit `assets/css/style.css` untuk mengubah styling
   - Gunakan CSS variables (--gold, --dark, dll) untuk konsistensi

2. **JavaScript Modifications:**
   - Edit `assets/js/script.js` untuk menambah interaktivitas
   - Jangan lupa test di berbagai browser

3. **Menambah Konten:**
   - Edit `portfolio.html` untuk menambah konten baru
   - Pastikan struktur tetap rapi

4. **Optimasi Gambar:**
   - Compress gambar sebelum upload
   - Gunakan format WebP untuk performa lebih baik

## 📱 Responsive Design

Website sudah responsive dan teruji untuk:
- Desktop (1200px dan lebih)
- Tablet (768px - 899px)
- Mobile (kurang dari 768px)

## 🔗 Links Referensi

Font menggunakan Google Fonts:
- Playfair Display (serif)
- DM Sans (sans-serif)
- JetBrains Mono (monospace)

## 💡 Catatan

- Foto profil otomatis menampilkan placeholder jika file tidak ditemukan
- Semua CSS dan JS sudah dioptimasi untuk performa
- Gunakan nama file yang deskriptif untuk gambar baru

---

**Last Updated:** February 2026
