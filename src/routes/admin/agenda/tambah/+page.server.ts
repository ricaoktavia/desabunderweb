import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { agenda } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const tanggalKegiatan = data.get('tanggalKegiatan')?.toString();
		const lokasi = data.get('lokasi')?.toString();

		if (!judul || !tanggalKegiatan || !lokasi) {
			return fail(400, { error: 'Judul, Tanggal, dan Lokasi wajib diisi' });
		}

		try {
			await db.insert(agenda).values({ judul, deskripsi, tanggalKegiatan, lokasi });
		} catch (e) {
			return fail(500, { error: 'Gagal menyimpan agenda' });
		}

		throw redirect(303, '/admin/agenda');
	}
};
