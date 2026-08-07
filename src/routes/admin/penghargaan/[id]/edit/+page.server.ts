import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { penghargaan } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';
import { eq } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id);
	
	if (isNaN(id)) {
		throw redirect(303, '/admin/penghargaan');
	}

	const result = await db.select().from(penghargaan).where(eq(penghargaan.id, id));
	
	if (result.length === 0) {
		throw redirect(303, '/admin/penghargaan');
	}

	return {
		item: result[0]
	};
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const id = Number(params.id);
		if (isNaN(id)) return fail(400, { error: 'ID tidak valid' });

		const data = await request.formData();
		const judul = data.get('judul')?.toString();
		const deskripsi = data.get('deskripsi')?.toString();
		const pemberi = data.get('pemberi')?.toString();
		const tahun = data.get('tahun')?.toString();
		const imageFile = data.get('gambar') as File | null;

		if (!judul) {
			return fail(400, { error: 'Judul penghargaan wajib diisi' });
		}

		let imageUrl: string | undefined;
		if (imageFile && imageFile.size > 0) {
			const uploadedUrl = await uploadFile(imageFile);
			if (!uploadedUrl) {
				return fail(500, { error: 'Gagal mengunggah foto' });
			}
			imageUrl = uploadedUrl;
		}

		try {
			await db.update(penghargaan)
				.set({
					judul,
					deskripsi: deskripsi || null,
					pemberi: pemberi || null,
					tahun: tahun || null,
					...(imageUrl && { gambar: imageUrl })
				})
				.where(eq(penghargaan.id, id));
		} catch (e) {
			console.error('Error update penghargaan:', e);
			return fail(500, { error: 'Gagal mengupdate database' });
		}

		throw redirect(303, '/admin/penghargaan');
	}
};
