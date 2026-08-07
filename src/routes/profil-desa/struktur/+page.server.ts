import { db } from '$lib/server/db';

export async function load() {
	const aparaturList = await db.query.aparaturDesa.findMany({
		orderBy: (aparatur, { asc }) => [asc(aparatur.urutan)]
	});

	return { aparaturList };
}
