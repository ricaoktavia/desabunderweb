import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { galeri } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!imageFile || imageFile.size === 0) {
			return fail(400, { error: 'Foto wajib diunggah' });
		}

		const imageUrl = await uploadFile(imageFile);
		if (!imageUrl) {
			return fail(500, { error: 'Gagal mengunggah foto' });
		}

		try {
			await db.insert(galeri).values({
				judul,
				deskripsi,
				gambar: imageUrl
			});
		} catch (e) {
			return fail(500, { error: 'Gagal menyimpan ke database' });
		}

		throw redirect(303, '/admin/galeri');
	}
};
