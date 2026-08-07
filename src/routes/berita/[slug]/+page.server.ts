import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { berita, users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const slug = params.slug;

	const article = await db.query.berita.findFirst({
		where: eq(berita.slug, slug),
		with: {
			// Since authorId points to users, we can fetch author details if relations are set up.
			// But wait, relations are set up in db/index.ts? Let's check. 
			// If not, we can just do a manual join or return without author name if we don't need it.
		}
	});

	if (!article) {
		throw error(404, 'Berita tidak ditemukan');
	}

	let authorName = 'Admin';
	if (article.authorId) {
		const author = await db.query.users.findFirst({ where: eq(users.id, article.authorId) });
		if (author) authorName = author.nama;
	}

	return { 
		article: {
			...article,
			authorName
		}
	};
}
