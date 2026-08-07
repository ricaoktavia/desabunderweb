<script lang="ts">
	import { Plus, Trash2, Award, Edit } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Manajemen Penghargaan</h1>
		<p class="text-sm text-gray-500">Kelola penghargaan dan prestasi desa.</p>
	</div>
	<a href="/admin/penghargaan/tambah" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
		<Plus class="h-5 w-5" /> Tambah Penghargaan
	</a>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
	{#each data.list as item}
		<div class="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200 flex flex-col">
			{#if item.gambar}
				<div class="aspect-[4/3] w-full overflow-hidden">
					<img src={item.gambar} alt={item.judul} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
				</div>
			{:else}
				<div class="aspect-[4/3] w-full bg-blue-50 flex flex-col items-center justify-center text-blue-200">
					<Award class="h-16 w-16 mb-2" />
					<span class="text-sm font-medium">Tanpa Gambar</span>
				</div>
			{/if}
			
			<div class="p-5 flex-1 flex flex-col">
				<div class="flex justify-between items-start gap-2 mb-2">
					<h3 class="font-bold text-gray-900 leading-tight">{item.judul}</h3>
					{#if item.tahun}
						<span class="inline-flex shrink-0 items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">{item.tahun}</span>
					{/if}
				</div>
				
				{#if item.pemberi}
					<p class="text-sm text-blue-700 font-medium mb-3 text-xs uppercase tracking-wider">Oleh: {item.pemberi}</p>
				{/if}
				
				<p class="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">{item.deskripsi || 'Tidak ada deskripsi'}</p>
				
				<div class="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
					<a href="/admin/penghargaan/{item.id}/edit" class="flex-1 inline-flex justify-center items-center gap-1 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
						<Edit class="h-4 w-4" /> Edit
					</a>
					<form action="?/delete" method="POST" onsubmit={() => confirm('Yakin ingin menghapus penghargaan ini?')} class="flex-1">
						<input type="hidden" name="id" value={item.id} />
						<button type="submit" class="w-full inline-flex justify-center items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors">
							<Trash2 class="h-4 w-4" /> Hapus
						</button>
					</form>
				</div>
			</div>
		</div>
	{:else}
		<div class="col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 border-dashed">
			<Award class="h-12 w-12 text-gray-300 mb-3" />
			<p class="text-gray-500 font-medium">Belum ada penghargaan.</p>
			<p class="text-sm text-gray-400 mt-1">Tambahkan pencapaian desa di sini.</p>
		</div>
	{/each}
</div>
