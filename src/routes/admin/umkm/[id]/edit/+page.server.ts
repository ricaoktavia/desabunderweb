import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { umkm } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { uploadFile } from '$lib/server/upload';

export async function load({ params }) {
	const id = parseInt(params.id);
	const item = await db.query.umkm.findFirst({ where: eq(umkm.id, id) });
	if (!item) throw error(404, 'UMKM tidak ditemukan');
	return { item };
}

export const actions = {
	update: async ({ request, params }) => {
		const id = parseInt(params.id);
		const data = await request.formData();
		const namaUsaha = data.get('namaUsaha')?.toString();
		const namaPemilik = data.get('namaPemilik')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const kontak = data.get('kontak')?.toString();
		const alamat = data.get('alamat')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!namaUsaha || !namaPemilik) return fail(400, { error: 'Nama Usaha dan Pemilik wajib diisi' });

		let imageUrl = data.get('currentGambar')?.toString() || null;
		if (imageFile && imageFile.size > 0) {
			const newImage = await uploadFile(imageFile);
			if (newImage) imageUrl = newImage;
		}

		try {
			await db.update(umkm)
				.set({ namaUsaha, namaPemilik, deskripsi, kontak, alamat, gambar: imageUrl })
				.where(eq(umkm.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal memperbarui UMKM' });
		}
		throw redirect(303, '/admin/umkm');
	},
	delete: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.delete(umkm).where(eq(umkm.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menghapus UMKM' });
		}
		throw redirect(303, '/admin/umkm');
	},
	approve: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.update(umkm).set({ status: 'approved' }).where(eq(umkm.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menyetujui UMKM' });
		}
		throw redirect(303, '/admin/umkm');
	},
	reject: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.update(umkm).set({ status: 'rejected' }).where(eq(umkm.id, id));
		} catch (e) {
			return fail(500, { error: 'Gagal menolak UMKM' });
		}
		throw redirect(303, '/admin/umkm');
	}
};
