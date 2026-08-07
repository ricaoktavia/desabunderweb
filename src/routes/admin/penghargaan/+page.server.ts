import { db } from '$lib/server/db';
import { penghargaan } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const list = await db.select().from(penghargaan).orderBy(desc(penghargaan.createdAt));

	return {
		list
	};
};

export const actions: Actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id) {
			return fail(400, { missing: true });
		}

		try {
			await db.delete(penghargaan).where(eq(penghargaan.id, Number(id)));
			return { success: true };
		} catch (error) {
			console.error('Error deleting penghargaan:', error);
			return fail(500, { error: 'Failed to delete data' });
		}
	}
};
