import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { umkm } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const namaUsaha = data.get('namaUsaha')?.toString();
		const namaPemilik = data.get('namaPemilik')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const kontak = data.get('kontak')?.toString();
		const alamat = data.get('alamat')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!namaUsaha || !namaPemilik) {
			return fail(400, { error: 'Nama Usaha dan Pemilik wajib diisi' });
		}

		let imageUrl = null;
		if (imageFile && imageFile.size > 0) {
			imageUrl = await uploadFile(imageFile);
		}

		try {
			await db.insert(umkm).values({
				namaUsaha,
				namaPemilik,
				deskripsi,
				kontak,
				alamat,
				gambar: imageUrl,
				status: 'approved'
			});
		} catch (e) {
			return fail(500, { error: 'Gagal menyimpan UMKM' });
		}

		throw redirect(303, '/admin/umkm');
	}
};
