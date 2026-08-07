import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { aparaturDesa } from '$lib/server/db/schema';
import { uploadFile } from '$lib/server/upload';
import { eq } from 'drizzle-orm';

export async function load() {
	const aparaturList = await db.query.aparaturDesa.findMany({
		orderBy: (aparatur, { asc }) => [asc(aparatur.urutan)]
	});

	return { aparaturList };
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const nama = data.get('nama')?.toString() || '';
		const jabatan = data.get('jabatan')?.toString() || '';
		const urutan = Number(data.get('urutan')) || 0;
		const fotoFile = data.get('foto') as File | null;

		if (!nama || !jabatan) {
			return fail(400, { error: 'Nama dan jabatan wajib diisi' });
		}

		let fotoUrl = null;
		if (fotoFile && fotoFile.size > 0) {
			const newImage = await uploadFile(fotoFile);
			if (newImage) fotoUrl = newImage;
		}

		try {
			await db.insert(aparaturDesa).values({
				nama,
				jabatan,
				urutan,
				foto: fotoUrl
			});
			return { success: true };
		} catch (e) {
			console.error(e);
			return fail(500, { error: 'Gagal menambah aparatur' });
		}
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));

		if (!id) return fail(400, { error: 'ID tidak valid' });

		try {
			await db.delete(aparaturDesa).where(eq(aparaturDesa.id, id));
			return { success: true };
		} catch (e) {
			console.error(e);
			return fail(500, { error: 'Gagal menghapus aparatur' });
		}
	}
};
