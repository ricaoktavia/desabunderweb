<script lang="ts">
	import { ArrowLeft, Save, Loader2, Image as ImageIcon } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
	let loading = $state(false);
	let previewUrl = $state<string | null>(data.item.gambar);

	function handleImageChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			previewUrl = URL.createObjectURL(input.files[0]);
		}
	}
</script>

<div class="mb-6 flex items-center justify-between">
	<div class="flex items-center gap-4">
		<a href="/admin/umkm" class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft class="h-5 w-5" /></a>
		<h1 class="text-2xl font-bold text-gray-900">Edit UMKM</h1>
	</div>
</div>

<div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 max-w-3xl">
	<form action="?/update" method="POST" enctype="multipart/form-data" class="space-y-6" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}>
		<input type="hidden" name="currentGambar" value={data.item.gambar || ''} />

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			<div>
				<label for="namaUsaha" class="block text-sm font-semibold text-gray-900 mb-2">Nama Usaha *</label>
				<input type="text" id="namaUsaha" name="namaUsaha" value={data.item.namaUsaha} required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" />
			</div>
			<div>
				<label for="namaPemilik" class="block text-sm font-semibold text-gray-900 mb-2">Nama Pemilik *</label>
				<input type="text" id="namaPemilik" name="namaPemilik" value={data.item.namaPemilik} required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" />
			</div>
		</div>

		<div>
			<label for="gambar" class="block text-sm font-semibold text-gray-900 mb-2">Foto Produk/Usaha</label>
			<div class="mt-1 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-6 hover:bg-gray-50 transition-colors">
				<div class="space-y-2 text-center">
					{#if previewUrl}
						<img src={previewUrl} alt="Preview" class="mx-auto h-32 rounded-lg object-cover" />
					{:else}
						<ImageIcon class="mx-auto h-10 w-10 text-gray-400" />
					{/if}
					<div class="flex text-sm text-gray-600 justify-center mt-4">
						<label for="gambar" class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none hover:text-blue-500">
							<span>Ubah foto</span>
							<input id="gambar" name="gambar" type="file" class="sr-only" accept="image/*" onchange={handleImageChange} />
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			<div>
				<label for="kontak" class="block text-sm font-semibold text-gray-900 mb-2">No. HP / WA</label>
				<input type="text" id="kontak" name="kontak" value={data.item.kontak} class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" />
			</div>
			<div>
				<label for="alamat" class="block text-sm font-semibold text-gray-900 mb-2">Alamat Usaha</label>
				<input type="text" id="alamat" name="alamat" value={data.item.alamat} class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" />
			</div>
		</div>

		<div>
			<label for="deskripsi" class="block text-sm font-semibold text-gray-900 mb-2">Deskripsi Produk/Usaha</label>
			<textarea id="deskripsi" name="deskripsi" rows="4" class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50">{data.item.deskripsi}</textarea>
		</div>

		<div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
			<a href="/admin/umkm" class="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Batal</a>
			<button type="submit" disabled={loading} class="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70">
				{#if loading}<Loader2 class="h-4 w-4 animate-spin" />{:else}<Save class="h-4 w-4" />{/if} Simpan Perubahan
			</button>
		</div>
	</form>
</div>
