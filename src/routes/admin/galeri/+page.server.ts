import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { galeri } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function load() {
	const list = await db.query.galeri.findMany({
		orderBy: [desc(galeri.createdAt)]
	});

	return { list };
}

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = parseInt(data.get('id')?.toString() || '0');
		
		if (!id) return fail(400, { error: 'ID tidak valid' });

		try {
			await db.delete(galeri).where(eq(galeri.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menghapus foto' });
		}
		
		return { success: true };
	}
};
