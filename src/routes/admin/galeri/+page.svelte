<script lang="ts">
	import { Plus, Trash2, Image as ImageIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Manajemen Galeri</h1>
		<p class="text-sm text-gray-500">Kelola foto-foto dokumentasi desa.</p>
	</div>
	<a href="/admin/galeri/tambah" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
		<Plus class="h-5 w-5" /> Unggah Foto
	</a>
</div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
	{#each data.list as item}
		<div class="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200 aspect-square">
			<img src={item.gambar} alt={item.judul || 'Galeri'} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
			
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
				<p class="text-white font-medium text-sm line-clamp-1">{item.judul || 'Tanpa Judul'}</p>
				<p class="text-gray-300 text-xs mt-1 line-clamp-1">{item.deskripsi || ''}</p>
				
				<div class="absolute top-3 right-3">
					<form action="?/delete" method="POST" onsubmit={() => confirm('Yakin ingin menghapus foto ini?')}>
						<input type="hidden" name="id" value={item.id} />
						<button type="submit" class="p-2 bg-red-600/90 hover:bg-red-600 text-white rounded-lg backdrop-blur-sm transition-colors shadow-sm" title="Hapus">
							<Trash2 class="h-4 w-4" />
						</button>
					</form>
				</div>
			</div>
		</div>
	{:else}
		<div class="col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 border-dashed">
			<ImageIcon class="h-12 w-12 text-gray-300 mb-3" />
			<p class="text-gray-500 font-medium">Belum ada foto di galeri.</p>
			<p class="text-sm text-gray-400 mt-1">Unggah foto dokumentasi kegiatan desa di sini.</p>
		</div>
	{/each}
</div>
