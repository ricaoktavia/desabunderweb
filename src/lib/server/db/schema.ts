import { mysqlTable, mysqlSchema, int, varchar, text, datetime, timestamp, index, foreignKey, unique, mysqlEnum } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const agenda = mysqlTable("agenda", {
	id: int().autoincrement().notNull(),
	judul: varchar({ length: 255 }).notNull(),
	deskripsi: text(),
	tanggalKegiatan: datetime("tanggal_kegiatan", { mode: 'string'}).notNull(),
	lokasi: varchar({ length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const berita = mysqlTable("berita", {
	id: int().autoincrement().notNull(),
	judul: varchar({ length: 255 }).notNull(),
	slug: varchar({ length: 255 }).notNull(),
	konten: text().notNull(),
	gambar: varchar({ length: 255 }),
	authorId: int("author_id").references(() => users.id, { onDelete: "set null", onUpdate: "restrict" } ),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
},
(table) => [
	index("author_id").on(table.authorId),
	unique("slug").on(table.slug),
]);

export const dokumen = mysqlTable("dokumen", {
	id: int().autoincrement().notNull(),
	namaDokumen: varchar("nama_dokumen", { length: 255 }).notNull(),
	deskripsi: text(),
	filePath: varchar("file_path", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const galeri = mysqlTable("galeri", {
	id: int().autoincrement().notNull(),
	judul: varchar({ length: 255 }),
	deskripsi: text(),
	gambar: varchar({ length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const pengumuman = mysqlTable("pengumuman", {
	id: int().autoincrement().notNull(),
	judul: varchar({ length: 255 }).notNull(),
	konten: text().notNull(),
	authorId: int("author_id").references(() => users.id, { onDelete: "set null", onUpdate: "restrict" } ),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
},
(table) => [
	index("author_id").on(table.authorId),
]);

export const profilDesa = mysqlTable("profil_desa", {
	id: int().autoincrement().notNull(),
	namaDesa: varchar("nama_desa", { length: 100 }).notNull(),
	visi: text(),
	misi: text(),
	sejarah: text(),
	alamat: text(),
	email: varchar({ length: 100 }),
	telepon: varchar({ length: 20 }),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const umkm = mysqlTable("umkm", {
	id: int().autoincrement().notNull(),
	namaUsaha: varchar("nama_usaha", { length: 255 }).notNull(),
	namaPemilik: varchar("nama_pemilik", { length: 100 }).notNull(),
	deskripsi: text(),
	kategori: varchar({ length: 100 }),
	kontak: varchar({ length: 50 }),
	alamat: text(),
	gambar: varchar({ length: 255 }),
	status: mysqlEnum(['pending', 'approved', 'rejected']).default('pending').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const users = mysqlTable("users", {
	id: int().autoincrement().notNull(),
	nama: varchar({ length: 100 }).notNull(),
	username: varchar({ length: 50 }).notNull(),
	password: varchar({ length: 255 }),
	role: mysqlEnum(['admin','user']).default('user').notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
},
(table) => [
	unique("username").on(table.username),
]);

export const aparaturDesa = mysqlTable("aparatur_desa", {
	id: int().autoincrement().notNull(),
	nama: varchar({ length: 150 }).notNull(),
	jabatan: varchar({ length: 100 }).notNull(),
	foto: varchar({ length: 255 }),
	urutan: int().default(0),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const statistikDesa = mysqlTable("statistik_desa", {
	id: int().autoincrement().notNull(),
	key: varchar({ length: 50 }).notNull().unique(), // e.g., 'total_penduduk', 'laki_laki'
	label: varchar({ length: 100 }).notNull(), // e.g., 'Total Penduduk', 'Laki-laki'
	value: varchar({ length: 100 }).notNull(),
	icon: varchar({ length: 50 }),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});

export const penghargaan = mysqlTable("penghargaan", {
	id: int().autoincrement().notNull(),
	judul: varchar({ length: 255 }).notNull(),
	deskripsi: text(),
	pemberi: varchar({ length: 255 }),
	tahun: varchar({ length: 10 }),
	gambar: varchar({ length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default('current_timestamp()').notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('current_timestamp()').notNull(),
});
