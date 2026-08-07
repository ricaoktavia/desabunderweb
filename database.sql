CREATE DATABASE IF NOT EXISTS desabunder_db;
USE desabunder_db;

-- Tabel Users (Admin & User)
-- User biasa tidak perlu password, Admin butuh password
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NULL, -- Bisa NULL untuk role 'user'
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Data Admin Default (Password disarankan di-hash pakai bcrypt nanti di backend)
-- Contoh password: 'admin' (silakan sesuaikan atau hash sebelum dipakai)
INSERT INTO users (nama, username, password, role) 
VALUES ('Administrator', 'admin', 'admin', 'admin');

-- Tabel Profil Desa (Hanya butuh 1 baris untuk informasi desa)
CREATE TABLE profil_desa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_desa VARCHAR(100) NOT NULL,
    visi TEXT,
    misi TEXT,
    sejarah TEXT,
    alamat TEXT,
    email VARCHAR(100),
    telepon VARCHAR(20),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Default Profil Desa
INSERT INTO profil_desa (nama_desa, visi, misi, sejarah, alamat, email, telepon) 
VALUES ('Desa Bunder', 'Menjadi desa yang mandiri dan sejahtera', '1. Meningkatkan pelayanan\n2. Membangun infrastruktur', 'Desa Bunder didirikan pada...', 'Jl. Raya Desa Bunder No.1', 'kontak@desabunder.id', '081234567890');

-- Tabel Berita
CREATE TABLE berita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    konten TEXT NOT NULL,
    gambar VARCHAR(255), -- Menyimpan nama/path file gambar
    author_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabel Pengumuman
CREATE TABLE pengumuman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    konten TEXT NOT NULL,
    author_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabel Agenda Kegiatan
CREATE TABLE agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    tanggal_kegiatan DATETIME NOT NULL,
    lokasi VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel UMKM
CREATE TABLE umkm (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_usaha VARCHAR(255) NOT NULL,
    nama_pemilik VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    kontak VARCHAR(50),
    alamat TEXT,
    gambar VARCHAR(255), -- Menyimpan nama/path file foto UMKM
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel Galeri Foto
CREATE TABLE galeri (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255),
    deskripsi TEXT,
    gambar VARCHAR(255) NOT NULL, -- Menyimpan nama/path file foto
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Dokumen (Untuk file yang bisa diunduh)
CREATE TABLE dokumen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_dokumen VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    file_path VARCHAR(255) NOT NULL, -- Menyimpan path file PDF/Docx
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
