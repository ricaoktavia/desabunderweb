import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { statistikDesa } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load() {
	const list = await db.query.statistikDesa.findMany();
	
	const totalPenduduk = list.find(s => s.key === 'total_penduduk')?.value || '2.955 Jiwa';
	const lakiLaki = list.find(s => s.key === 'laki_laki')?.value || '1.450 Jiwa';
	const perempuan = list.find(s => s.key === 'perempuan')?.value || '1.505 Jiwa';

	return {
		totalPenduduk,
		lakiLaki,
		perempuan
	};
}

export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const totalPenduduk = data.get('totalPenduduk')?.toString() || '';
		const lakiLaki = data.get('lakiLaki')?.toString() || '';
		const perempuan = data.get('perempuan')?.toString() || '';

		if (!totalPenduduk || !lakiLaki || !perempuan) {
			return fail(400, { error: 'Semua bidang statistik wajib diisi' });
		}

		try {
			const formattedNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

			const saveStat = async (key: string, label: string, value: string, icon: string) => {
				const existing = await db.query.statistikDesa.findFirst({
					where: eq(statistikDesa.key, key)
				});
				if (existing) {
					await db.update(statistikDesa)
						.set({ value, label, updatedAt: formattedNow })
						.where(eq(statistikDesa.id, existing.id));
				} else {
					await db.insert(statistikDesa).values({ key, label, value, icon, updatedAt: formattedNow });
				}
			};

			await saveStat('total_penduduk', 'Total Penduduk', totalPenduduk, 'Users');
			await saveStat('laki_laki', 'Laki-Laki', lakiLaki, 'User');
			await saveStat('perempuan', 'Perempuan', perempuan, 'User');

			return { success: true, message: 'Data statistik berhasil diperbarui!' };
		} catch (e) {
			console.error('Error updating statistik:', e);
			return fail(500, { error: 'Gagal memperbarui data statistik: ' + (e instanceof Error ? e.message : String(e)) });
		}
	}
};
