import { db } from '$lib/server/db';
import { profilDesa, penghargaan } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function load() {
	const profil = await db.query.profilDesa.findFirst();
	const daftarPenghargaan = await db.select().from(penghargaan).orderBy(desc(penghargaan.createdAt));

	return { profil, daftarPenghargaan };
}
