import { db } from '$lib/server/db';
import { berita, agenda, pengumuman, umkm } from '$lib/server/db/schema';
import { like, or, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q') || '';
	
	if (!q.trim()) {
		return {
			q,
			results: []
		};
	}

	const keyword = `%${q}%`;

	// Fetch from Berita
	const beritaResults = await db
		.select()
		.from(berita)
		.where(or(like(berita.judul, keyword), like(berita.konten, keyword)))
		.limit(10);

	// Fetch from Agenda
	const agendaResults = await db
		.select()
		.from(agenda)
		.where(or(like(agenda.judul, keyword), like(agenda.deskripsi, keyword)))
		.limit(10);

	// Fetch from Pengumuman
	const pengumumanResults = await db
		.select()
		.from(pengumuman)
		.where(or(like(pengumuman.judul, keyword), like(pengumuman.konten, keyword)))
		.limit(10);

	// Fetch from UMKM (only approved)
	const umkmResults = await db
		.select()
		.from(umkm)
		.where(
			or(
				like(umkm.namaUsaha, keyword),
				like(umkm.deskripsi, keyword)
			)
		)
		.limit(10);

	// Static Pages Search
	const staticPages = [
		{ title: 'Profil Desa Bunder', url: '/profil-desa', description: 'Informasi umum, potensi, dan keunggulan Desa Bunder.', type: 'Halaman Utama' },
		{ title: 'Sejarah Desa', url: '/profil-desa/sejarah', description: 'Sejarah singkat berdirinya Desa Bunder dan perkembangannya.', type: 'Halaman Profil' },
		{ title: 'Peta Desa', url: '/profil-desa/peta', description: 'Peta wilayah dan batas-batas geografis Desa Bunder.', type: 'Halaman Profil' },
		{ title: 'Struktur Pemerintah Desa', url: '/profil-desa/struktur', description: 'Susunan organisasi pemerintah desa dan lembaga kemasyarakatan.', type: 'Halaman Profil' },
		{ title: 'Visi & Misi', url: '/profil-desa/visi-misi', description: 'Visi dan misi pembangunan Desa Bunder.', type: 'Halaman Profil' },
		{ title: 'Statistik Desa', url: '/statistik', description: 'Data statistik kependudukan, pendidikan, dan pekerjaan warga Desa Bunder.', type: 'Halaman Utama' },
		{ title: 'Layanan Desa', url: '/layanan', description: 'Daftar layanan administrasi dan publik untuk warga.', type: 'Halaman Utama' },
		{ title: 'Potensi & UMKM', url: '/potensi-umkm', description: 'Katalog potensi desa dan produk unggulan UMKM lokal.', type: 'Halaman Utama' },
	];

	const lowerQ = q.toLowerCase();
	const staticResults = staticPages
		.filter(page => page.title.toLowerCase().includes(lowerQ) || page.description.toLowerCase().includes(lowerQ))
		.map(page => ({
			type: page.type,
			title: page.title,
			description: page.description,
			url: page.url,
			date: new Date().toISOString() // use current date so they appear at the top or bottom
		}));

	// Transform and combine results
	const combinedResults = [
		...staticResults,
		...beritaResults.map((item) => ({
			type: 'Berita',
			title: item.judul,
			description: item.konten.substring(0, 150) + '...',
			url: `/berita/${item.slug}`,
			date: item.createdAt
		})),
		...agendaResults.map((item) => ({
			type: 'Agenda',
			title: item.judul,
			description: item.deskripsi ? item.deskripsi.substring(0, 150) + '...' : '',
			url: `/layanan`, // Agenda doesn't have individual pages in public usually, link to layanan/agenda if exists, or just root
			date: item.tanggalKegiatan
		})),
		...pengumumanResults.map((item) => ({
			type: 'Pengumuman',
			title: item.judul,
			description: item.konten.substring(0, 150) + '...',
			url: `/layanan`,
			date: item.createdAt
		})),
		...umkmResults.filter(u => u.status === 'approved').map((item) => ({
			type: 'UMKM',
			title: item.namaUsaha,
			description: item.deskripsi ? item.deskripsi.substring(0, 150) + '...' : '',
			url: `/potensi-umkm`,
			date: item.createdAt
		}))
	];

	// Sort by date descending
	combinedResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		q,
		results: combinedResults
	};
};
