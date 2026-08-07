import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { berita } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const konten = data.get('konten')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!judul || !konten) {
			return fail(400, { error: 'Judul dan konten wajib diisi' });
		}

		let imageUrl = null;
		if (imageFile && imageFile.size > 0) {
			imageUrl = await uploadFile(imageFile);
		}

		// Create slug from title
		const slug = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
		const authorId = locals.user?.id ? parseInt(locals.user.id) : null;

		try {
			await db.insert(berita).values({
				judul,
				slug,
				konten,
				gambar: imageUrl,
				authorId
			});
		} catch (e) {
			console.error(e);
			return fail(500, { error: 'Gagal menyimpan berita' });
		}

		throw redirect(303, '/admin/berita');
	}
};
