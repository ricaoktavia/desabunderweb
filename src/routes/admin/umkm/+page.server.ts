import { db } from '$lib/server/db';
import { umkm } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const list = await db.query.umkm.findMany({
		orderBy: [desc(umkm.createdAt)]
	});

	return { list };
}
