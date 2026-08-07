import { db } from '$lib/server/db';
import { berita, agenda, pengumuman, galeri } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const beritaList = await db.query.berita.findMany({
		orderBy: [desc(berita.createdAt)],
		limit: 3
	});

	const agendaList = await db.query.agenda.findMany({
		orderBy: [desc(agenda.tanggalKegiatan)],
		limit: 3
	});

	const pengumumanList = await db.query.pengumuman.findMany({
		orderBy: [desc(pengumuman.createdAt)],
		limit: 2
	});

	const galeriList = await db.query.galeri.findMany({
		orderBy: [desc(galeri.createdAt)],
		limit: 6
	});

	return { beritaList, agendaList, pengumumanList, galeriList };
}
