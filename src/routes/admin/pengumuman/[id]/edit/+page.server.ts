import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { pengumuman } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const id = parseInt(params.id);
	const item = await db.query.pengumuman.findFirst({ where: eq(pengumuman.id, id) });
	if (!item) throw error(404, 'Pengumuman tidak ditemukan');
	return { item };
}

export const actions = {
	update: async ({ request, params }) => {
		const id = parseInt(params.id);
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const konten = data.get('konten')?.toString();

		if (!judul || !konten) return fail(400, { error: 'Judul dan konten wajib diisi' });

		try {
			await db.update(pengumuman).set({ judul, konten }).where(eq(pengumuman.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal memperbarui pengumuman' });
		}
		throw redirect(303, '/admin/pengumuman');
	},
	delete: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.delete(pengumuman).where(eq(pengumuman.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menghapus pengumuman' });
		}
		throw redirect(303, '/admin/pengumuman');
	}
};
