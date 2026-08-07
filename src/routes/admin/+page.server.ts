import { db } from '$lib/server/db';
import { berita, umkm, galeri } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const beritaCountResult = await db.select({ count: sql<number>`count(*)` }).from(berita);
    const umkmCountResult = await db.select({ count: sql<number>`count(*)` }).from(umkm);
    const galeriCountResult = await db.select({ count: sql<number>`count(*)` }).from(galeri);

    const beritaCount = beritaCountResult[0]?.count || 0;
    const umkmCount = umkmCountResult[0]?.count || 0;
    const galeriCount = galeriCountResult[0]?.count || 0;

    return {
        beritaCount,
        umkmCount,
        galeriCount
    };
};
