import { db } from '$lib/server/db';
import { umkm } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function load() {
	const umkmList = await db.query.umkm.findMany({
		where: eq(umkm.status, 'approved'),
		orderBy: [desc(umkm.createdAt)]
	});

	return { umkmList };
}
