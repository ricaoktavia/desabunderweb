<script lang="ts">
	import { Plus, Edit, Trash2, MapPin, CalendarClock } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Manajemen Agenda</h1>
		<p class="text-sm text-gray-500">Kelola agenda dan acara kegiatan desa.</p>
	</div>
	<a href="/admin/agenda/tambah" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
		<Plus class="h-5 w-5" /> Tambah Agenda
	</a>
</div>

<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Judul Agenda</th>
					<th class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Waktu & Tempat</th>
					<th class="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each data.list as item}
					<tr class="hover:bg-gray-50 transition-colors">
						<td class="px-6 py-4">
							<div class="font-medium text-gray-900">{item.judul}</div>
							<div class="text-sm text-gray-500 sm:hidden mt-2 flex flex-col gap-1">
								<span class="flex items-center gap-1"><CalendarClock class="w-3 h-3"/> {new Date(item.tanggalKegiatan).toLocaleString('id-ID')}</span>
								<span class="flex items-center gap-1"><MapPin class="w-3 h-3"/> {item.lokasi}</span>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
							<div class="flex flex-col gap-1 text-sm text-gray-500">
								<span class="flex items-center gap-2"><CalendarClock class="w-4 h-4 text-gray-400"/> {new Date(item.tanggalKegiatan).toLocaleString('id-ID')}</span>
								<span class="flex items-center gap-2"><MapPin class="w-4 h-4 text-gray-400"/> {item.lokasi}</span>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<div class="flex justify-end gap-2">
								<a href={`/admin/agenda/${item.id}/edit`} class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
									<Edit class="h-4 w-4" />
								</a>
								<form action={`/admin/agenda/${item.id}/edit?/delete`} method="POST" onsubmit={() => confirm('Yakin ingin menghapus agenda ini?')}>
									<button type="submit" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
										<Trash2 class="h-4 w-4" />
									</button>
								</form>
							</div>
						</td>
					</tr>
				{:else}
					<tr><td colspan="3" class="px-6 py-12 text-center text-sm text-gray-500">Belum ada agenda.</td></tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
