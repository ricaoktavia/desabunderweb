import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { umkm } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const namaUsaha = data.get('namaUsaha')?.toString();
		const namaPemilik = data.get('namaPemilik')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const kategori = data.get('kategori')?.toString();
		const kontak = data.get('kontak')?.toString();
		const alamat = data.get('alamat')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!namaUsaha || !namaPemilik || !kontak || !alamat || !deskripsi || !kategori) {
			return fail(400, { error: 'Harap lengkapi semua field yang wajib diisi.' });
		}

		let imageUrl = null;
		if (imageFile && imageFile.size > 0) {
			const newImage = await uploadFile(imageFile);
			if (newImage) imageUrl = newImage;
		}

		try {
			await db.insert(umkm).values({
				namaUsaha,
				namaPemilik,
				deskripsi,
				kategori,
				kontak,
				alamat,
				gambar: imageUrl,
				status: 'pending' // Set status explicitly to pending just to be sure
			});
			return { success: true };
		} catch (e) {
			console.error('Gagal menyimpan UMKM:', e);
			return fail(500, { error: 'Terjadi kesalahan sistem. Silakan coba lagi.' });
		}
	}
};
