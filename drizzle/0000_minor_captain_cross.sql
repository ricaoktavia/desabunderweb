-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `agenda` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) NOT NULL,
	`deskripsi` text DEFAULT 'NULL',
	`tanggal_kegiatan` datetime NOT NULL,
	`lokasi` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `berita` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`konten` text NOT NULL,
	`gambar` varchar(255) DEFAULT 'NULL',
	`author_id` int(11) DEFAULT 'NULL',
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `dokumen` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nama_dokumen` varchar(255) NOT NULL,
	`deskripsi` text DEFAULT 'NULL',
	`file_path` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `galeri` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) DEFAULT 'NULL',
	`deskripsi` text DEFAULT 'NULL',
	`gambar` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `pengumuman` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`judul` varchar(255) NOT NULL,
	`konten` text NOT NULL,
	`author_id` int(11) DEFAULT 'NULL',
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `profil_desa` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nama_desa` varchar(100) NOT NULL,
	`visi` text DEFAULT 'NULL',
	`misi` text DEFAULT 'NULL',
	`sejarah` text DEFAULT 'NULL',
	`alamat` text DEFAULT 'NULL',
	`email` varchar(100) DEFAULT 'NULL',
	`telepon` varchar(20) DEFAULT 'NULL',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `umkm` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nama_usaha` varchar(255) NOT NULL,
	`nama_pemilik` varchar(100) NOT NULL,
	`deskripsi` text DEFAULT 'NULL',
	`kontak` varchar(50) DEFAULT 'NULL',
	`alamat` text DEFAULT 'NULL',
	`gambar` varchar(255) DEFAULT 'NULL',
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nama` varchar(100) NOT NULL,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) DEFAULT 'NULL',
	`role` enum('admin','user') NOT NULL DEFAULT '''user''',
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`updated_at` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`username`)
);
--> statement-breakpoint
ALTER TABLE `berita` ADD CONSTRAINT `berita_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `pengumuman` ADD CONSTRAINT `pengumuman_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE restrict;--> statement-breakpoint
CREATE INDEX `author_id` ON `berita` (`author_id`);--> statement-breakpoint
CREATE INDEX `author_id` ON `pengumuman` (`author_id`);
*/