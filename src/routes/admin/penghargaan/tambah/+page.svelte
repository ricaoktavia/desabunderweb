<script lang="ts">
	import { ArrowLeft, Save, Upload, Image as ImageIcon } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let loading = $state(false);
	let previewUrl = $state<string | null>(null);

	function handleImageChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				previewUrl = e.target?.result as string;
			};
			reader.readAsDataURL(input.files[0]);
		} else {
			previewUrl = null;
		}
	}
</script>

<div class="mb-6 flex items-center justify-between">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Tambah Penghargaan</h1>
		<p class="text-sm text-gray-500">Masukkan detail penghargaan baru yang diraih desa.</p>
	</div>
	<a href="/admin/penghargaan" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
		<ArrowLeft class="h-4 w-4" /> Kembali
	</a>
</div>

<form
	method="POST"
	enctype="multipart/form-data"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	}}
	class="grid grid-cols-1 gap-6 lg:grid-cols-3"
>
	<div class="lg:col-span-2 space-y-6">
		<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<div class="space-y-4">
				<div>
					<label for="judul" class="block text-sm font-medium text-gray-700">Nama Penghargaan <span class="text-red-500">*</span></label>
					<input type="text" id="judul" name="judul" required class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Contoh: Juara 1 Lomba Desa Inovatif" />
				</div>
				
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label for="pemberi" class="block text-sm font-medium text-gray-700">Pemberi Penghargaan</label>
						<input type="text" id="pemberi" name="pemberi" class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Contoh: Gubernur Jawa Timur" />
					</div>
					<div>
						<label for="tahun" class="block text-sm font-medium text-gray-700">Tahun</label>
						<input type="text" id="tahun" name="tahun" class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Contoh: 2026" />
					</div>
				</div>

				<div>
					<label for="deskripsi" class="block text-sm font-medium text-gray-700">Deskripsi/Keterangan</label>
					<textarea id="deskripsi" name="deskripsi" rows="4" class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Tuliskan keterangan singkat tentang penghargaan ini..."></textarea>
				</div>
			</div>
		</div>
	</div>

	<div class="space-y-6">
		<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<h3 class="text-base font-semibold text-gray-900 mb-4">Foto / Sertifikat</h3>
			
			<div class="space-y-4">
				<div class="flex items-center justify-center w-full">
					<label for="gambar" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors overflow-hidden relative">
						{#if previewUrl}
							<img src={previewUrl} alt="Preview" class="absolute inset-0 w-full h-full object-cover" />
							<div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
								<p class="text-white font-medium flex items-center gap-2"><Upload class="w-5 h-5"/> Ganti Foto</p>
							</div>
						{:else}
							<div class="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
								<ImageIcon class="w-10 h-10 mb-3 text-gray-400" />
								<p class="mb-2 text-sm font-semibold">Klik untuk unggah foto</p>
								<p class="text-xs text-gray-400">PNG, JPG atau WEBP (Maks. 2MB)</p>
							</div>
						{/if}
						<input id="gambar" name="gambar" type="file" accept="image/*" class="hidden" onchange={handleImageChange} />
					</label>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-end gap-4">
			<button type="submit" disabled={loading} class="w-full flex justify-center items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70 disabled:cursor-not-allowed">
				{#if loading}
					<div class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
					Menyimpan...
				{:else}
					<Save class="h-5 w-5" />
					Simpan Penghargaan
				{/if}
			</button>
		</div>
	</div>
</form>
