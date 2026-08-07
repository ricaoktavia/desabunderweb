import { db } from '$lib/server/db';
import { berita } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const beritaList = await db.query.berita.findMany({
		orderBy: [desc(berita.createdAt)]
	});

	return { beritaList };
}
