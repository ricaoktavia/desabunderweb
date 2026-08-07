import { db } from '$lib/server/db';
import { galeri } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const galeriList = await db.query.galeri.findMany({
		orderBy: [desc(galeri.createdAt)]
	});

	return { galeriList };
}
