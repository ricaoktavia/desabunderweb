import { db } from '$lib/server/db';
import { pengumuman } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const list = await db.query.pengumuman.findMany({
		orderBy: [desc(pengumuman.createdAt)]
	});

	return { list };
}
