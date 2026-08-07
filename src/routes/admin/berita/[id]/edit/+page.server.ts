import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { berita } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { uploadFile } from '$lib/server/upload';

export async function load({ params }) {
	const id = parseInt(params.id);
	
	const item = await db.query.berita.findFirst({
		where: eq(berita.id, id)
	});

	if (!item) {
		throw error(404, 'Berita tidak ditemukan');
	}

	return {
		berita: item
	};
}

export const actions = {
	update: async ({ request, params }) => {
		const id = parseInt(params.id);
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const konten = data.get('konten')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!judul || !konten) {
			return fail(400, { error: 'Judul dan konten wajib diisi' });
		}

		let imageUrl = data.get('currentGambar')?.toString() || null;
		if (imageFile && imageFile.size > 0) {
			const newImage = await uploadFile(imageFile);
			if (newImage) imageUrl = newImage;
		}

		const slug = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

		try {
			await db.update(berita)
				.set({
					judul,
					slug,
					konten,
					gambar: imageUrl,
				})
				.where(eq(berita.id, id));
		} catch (e) {
			console.error(e);
			return fail(500, { error: 'Gagal memperbarui berita' });
		}

		throw redirect(303, '/admin/berita');
	},
	
	delete: async ({ params }) => {
		const id = parseInt(params.id);
		try {
			await db.delete(berita).where(eq(berita.id, id));
		} catch (e) {
			console.error(e);
			return fail(500, { error: 'Gagal menghapus berita' });
		}
		throw redirect(303, '/admin/berita');
	}
};
