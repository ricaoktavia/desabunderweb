import { db } from '$lib/server/db';
import { profilDesa } from '$lib/server/db/schema';

export async function load() {
	const profil = await db.query.profilDesa.findFirst();
	return { profil };
}
