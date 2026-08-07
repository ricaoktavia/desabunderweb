<script lang="ts">
	import { Plus, Edit, Trash2, Phone, MapPin, Store, CheckCircle, XCircle } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Manajemen UMKM</h1>
		<p class="text-sm text-gray-500">Kelola direktori UMKM desa.</p>
	</div>
	<a href="/admin/umkm/tambah" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
		<Plus class="h-5 w-5" /> Tambah UMKM
	</a>
</div>

<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Usaha & Pemilik</th>
					<th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Kontak & Lokasi</th>
					<th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
					<th class="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each data.list as item}
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="px-6 py-4">
							<div class="flex items-center gap-4">
								{#if item.gambar}
									<img src={item.gambar} alt={item.namaUsaha} class="h-12 w-12 rounded-lg object-cover hidden sm:block" />
								{:else}
									<div class="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center hidden sm:flex">
										<Store class="h-5 w-5 text-gray-400" />
									</div>
								{/if}
								<div>
									<div class="font-bold text-gray-900">{item.namaUsaha}</div>
									<div class="text-sm text-gray-500">{item.namaPemilik}</div>
									<!-- Mobile View Info -->
									<div class="text-sm text-gray-500 md:hidden mt-2 flex flex-col gap-1">
										<span class="flex items-center gap-1"><Phone class="w-3 h-3"/> {item.kontak || '-'}</span>
										<span class="flex items-center gap-1"><MapPin class="w-3 h-3"/> {item.alamat || '-'}</span>
									</div>
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap hidden md:table-cell">
							<div class="flex flex-col gap-1 text-sm text-gray-500">
								<span class="flex items-center gap-2"><Phone class="w-4 h-4 text-gray-400"/> {item.kontak || '-'}</span>
								<span class="flex items-center gap-2"><MapPin class="w-4 h-4 text-gray-400"/> {item.alamat || '-'}</span>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm">
							{#if item.status === 'pending'}
								<span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">Menunggu</span>
							{:else if item.status === 'approved'}
								<span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">Disetujui</span>
							{:else}
								<span class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">Ditolak</span>
							{/if}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<div class="flex justify-end gap-2">
								{#if item.status === 'pending'}
									<form action={`/admin/umkm/${item.id}/edit?/approve`} method="POST">
										<button type="submit" title="Setujui" class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
											<CheckCircle class="h-4 w-4" />
										</button>
									</form>
									<form action={`/admin/umkm/${item.id}/edit?/reject`} method="POST">
										<button type="submit" title="Tolak" class="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
											<XCircle class="h-4 w-4" />
										</button>
									</form>
								{/if}
								<a href={`/admin/umkm/${item.id}/edit`} class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
									<Edit class="h-4 w-4" />
								</a>
								<form action={`/admin/umkm/${item.id}/edit?/delete`} method="POST" onsubmit={() => confirm('Yakin ingin menghapus data UMKM ini?')}>
									<button type="submit" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
										<Trash2 class="h-4 w-4" />
									</button>
								</form>
							</div>
						</td>
					</tr>
				{:else}
					<tr><td colspan="3" class="px-6 py-12 text-center text-sm text-gray-500">Belum ada data UMKM.</td></tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
