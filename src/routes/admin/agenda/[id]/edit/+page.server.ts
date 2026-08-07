import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { agenda } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const id = parseInt(params.id);
	const item = await db.query.agenda.findFirst({ where: eq(agenda.id, id) });
	if (!item) throw error(404, 'Agenda tidak ditemukan');
	return { item };
}

export const actions = {
	update: async ({ request, params }) => {
		const id = parseInt(params.id);
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const tanggalKegiatan = data.get('tanggalKegiatan')?.toString();
		const lokasi = data.get('lokasi')?.toString();

		if (!judul || !tanggalKegiatan || !lokasi) return fail(400, { error: 'Data wajib diisi' });

		try {
			await db.update(agenda).set({ judul, deskripsi, tanggalKegiatan, lokasi }).where(eq(agenda.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal memperbarui agenda' });
		}
		throw redirect(303, '/admin/agenda');
	},
	delete: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.delete(agenda).where(eq(agenda.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menghapus agenda' });
		}
		throw redirect(303, '/admin/agenda');
	}
};
