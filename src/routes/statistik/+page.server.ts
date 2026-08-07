import { db } from '$lib/server/db';
import { statistikDesa } from '$lib/server/db/schema';

export async function load() {
	const statistikList = await db.query.statistikDesa.findMany();
	return { statistikList };
}
