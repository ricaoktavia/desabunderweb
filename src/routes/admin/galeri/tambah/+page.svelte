<script lang="ts">
	import { ArrowLeft, Upload, Loader2, Image as ImageIcon } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let loading = $state(false);
	let previewUrl = $state<string | null>(null);

	function handleImageChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			previewUrl = URL.createObjectURL(input.files[0]);
		} else {
			previewUrl = null;
		}
	}
</script>

<div class="mb-6 flex items-center justify-between">
	<div class="flex items-center gap-4">
		<a href="/admin/galeri" class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft class="h-5 w-5" /></a>
		<h1 class="text-2xl font-bold text-gray-900">Unggah Foto Galeri</h1>
	</div>
</div>

<div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 max-w-2xl">
	<form method="POST" enctype="multipart/form-data" class="space-y-6" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}>
		
		<div>
			<label for="gambar" class="block text-sm font-semibold text-gray-900 mb-2">Pilih Foto *</label>
			<div class="mt-1 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-10 hover:bg-gray-50 transition-colors">
				<div class="space-y-2 text-center w-full">
					{#if previewUrl}
						<img src={previewUrl} alt="Preview" class="mx-auto h-64 rounded-lg object-contain bg-gray-100 w-full" />
					{:else}
						<ImageIcon class="mx-auto h-12 w-12 text-gray-400" />
					{/if}
					<div class="flex text-sm text-gray-600 justify-center mt-4">
						<label for="gambar" class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none hover:text-blue-500">
							<span>Upload file gambar</span>
							<input id="gambar" name="gambar" type="file" required class="sr-only" accept="image/*" onchange={handleImageChange} />
						</label>
					</div>
					<p class="text-xs text-gray-500">PNG, JPG up to 5MB</p>
				</div>
			</div>
		</div>

		<div>
			<label for="judul" class="block text-sm font-semibold text-gray-900 mb-2">Judul Foto (Opsional)</label>
			<input type="text" id="judul" name="judul" class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Misal: Lomba 17 Agustus" />
		</div>
		
		<div>
			<label for="deskripsi" class="block text-sm font-semibold text-gray-900 mb-2">Deskripsi (Opsional)</label>
			<textarea id="deskripsi" name="deskripsi" rows="3" class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Tambahkan keterangan foto..."></textarea>
		</div>

		<div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
			<a href="/admin/galeri" class="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Batal</a>
			<button type="submit" disabled={loading} class="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70">
				{#if loading}<Loader2 class="h-4 w-4 animate-spin" />{:else}<Upload class="h-4 w-4" />{/if} Unggah Foto
			</button>
		</div>
	</form>
</div>
