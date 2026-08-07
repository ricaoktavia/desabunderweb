import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { penghargaan } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const pemberi = data.get('pemberi')?.toString();
		const tahun = data.get('tahun')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!judul) {
			return fail(400, { error: 'Judul penghargaan wajib diisi' });
		}

		let imageUrl = null;
		if (imageFile && imageFile.size > 0) {
			imageUrl = await uploadFile(imageFile);
			if (!imageUrl) {
				return fail(500, { error: 'Gagal mengunggah foto' });
			}
		}

		try {
			await db.insert(penghargaan).values({
				judul,
				deskripsi: deskripsi || null,
				pemberi: pemberi || null,
				tahun: tahun || null,
				gambar: imageUrl
			});
		} catch (e) {
			console.error('Error insert penghargaan:', e);
			return fail(500, { error: 'Gagal menyimpan ke database' });
		}

		throw redirect(303, '/admin/penghargaan');
	}
};
