import { db } from '$lib/server/db';
import { agenda } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const list = await db.query.agenda.findMany({
		orderBy: [desc(agenda.tanggalKegiatan)]
	});

	return { list };
}
