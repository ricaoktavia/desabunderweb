import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { pengumuman } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const konten = data.get('konten')?.toString();

		if (!judul || !konten) {
			return fail(400, { error: 'Judul dan konten wajib diisi' });
		}

		const authorId = locals.user?.id ? parseInt(locals.user.id) : null;

		try {
			await db.insert(pengumuman).values({ judul, konten, authorId });
		} catch (e) {
			return fail(500, { error: 'Gagal menyimpan pengumuman' });
		}

		throw redirect(303, '/admin/pengumuman');
	}
};
