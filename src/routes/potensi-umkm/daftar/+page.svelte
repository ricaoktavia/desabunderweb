<script lang="ts">
	import { ArrowLeft, Send, Loader2, Image as ImageIcon } from 'lucide-svelte';
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

<svelte:head>
	<title>Daftar UMKM - Desa Bunder</title>
</svelte:head>

<div class="bg-blue-900 pt-16 pb-32 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<a href="/potensi-umkm" class="mb-6 inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
				<ArrowLeft class="h-4 w-4" /> Kembali ke Potensi UMKM
			</a>
			<h1 class="mb-6 text-4xl leading-tight font-extrabold md:text-5xl">
				Daftarkan Usaha Anda
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-blue-200">
				Mari majukan ekonomi desa bersama. Lengkapi formulir di bawah ini untuk mendaftarkan UMKM Anda ke dalam direktori Desa Bunder. Data akan diverifikasi oleh tim admin sebelum ditampilkan.
			</p>
		</div>
	</div>
</div>

<div class="relative z-10 mx-auto -mt-20 mb-12 max-w-3xl px-4 sm:px-6 lg:px-8">
	<div class="rounded-2xl border border-gray-100 bg-white shadow-xl p-6 sm:p-10">
		<form method="POST" enctype="multipart/form-data" class="space-y-6" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}>
			
			{#if $page?.form?.success}
				<div class="rounded-xl bg-green-50 p-4 text-green-800 border border-green-200">
					<h3 class="font-bold">Pengajuan Berhasil!</h3>
					<p class="text-sm mt-1">Terima kasih telah mendaftarkan UMKM Anda. Data Anda sedang dalam proses peninjauan oleh admin. Mohon ditunggu.</p>
				</div>
			{/if}

			{#if $page?.form?.error}
				<div class="rounded-xl bg-red-50 p-4 text-red-800 border border-red-200">
					<h3 class="font-bold">Terjadi Kesalahan</h3>
					<p class="text-sm mt-1">{$page.form.error}</p>
				</div>
			{/if}

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<div>
					<label for="namaUsaha" class="block text-sm font-semibold text-gray-900 mb-2">Nama Usaha *</label>
					<input type="text" id="namaUsaha" name="namaUsaha" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Misal: Keripik Singkong Makmur" />
				</div>
				<div>
					<label for="namaPemilik" class="block text-sm font-semibold text-gray-900 mb-2">Nama Pemilik *</label>
					<input type="text" id="namaPemilik" name="namaPemilik" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Nama lengkap Anda" />
				</div>
			</div>
			
			<div>
				<label for="kategori" class="block text-sm font-semibold text-gray-900 mb-2">Kategori Usaha *</label>
				<select id="kategori" name="kategori" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50">
					<option value="" disabled selected>Pilih Kategori</option>
					<option value="Kuliner">Kuliner</option>
					<option value="Kerajinan">Kerajinan</option>
					<option value="Fashion">Fashion</option>
					<option value="Agrobisnis">Agrobisnis</option>
					<option value="Lainnya">Lainnya</option>
				</select>
			</div>

			<div>
				<label for="gambar" class="block text-sm font-semibold text-gray-900 mb-2">Foto Produk/Usaha</label>
				<div class="mt-1 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-8 hover:bg-gray-50 transition-colors">
					<div class="space-y-2 text-center">
						{#if previewUrl}
							<img src={previewUrl} alt="Preview" class="mx-auto h-40 rounded-lg object-cover" />
						{:else}
							<ImageIcon class="mx-auto h-12 w-12 text-gray-400" />
						{/if}
						<div class="flex text-sm text-gray-600 justify-center mt-4">
							<label for="gambar" class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none hover:text-blue-500">
								<span>Upload foto terbaik Anda</span>
								<input id="gambar" name="gambar" type="file" class="sr-only" accept="image/*" onchange={handleImageChange} />
							</label>
						</div>
						<p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<div>
					<label for="kontak" class="block text-sm font-semibold text-gray-900 mb-2">No. HP / WA Aktif *</label>
					<input type="text" id="kontak" name="kontak" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Misal: 08123456789" />
				</div>
				<div>
					<label for="alamat" class="block text-sm font-semibold text-gray-900 mb-2">Alamat Lengkap Usaha *</label>
					<input type="text" id="alamat" name="alamat" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Nama jalan, RT/RW, Dusun" />
				</div>
			</div>

			<div>
				<label for="deskripsi" class="block text-sm font-semibold text-gray-900 mb-2">Deskripsi Produk/Usaha *</label>
				<textarea id="deskripsi" name="deskripsi" required rows="4" class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" placeholder="Ceritakan tentang usaha dan produk yang Anda jual..."></textarea>
			</div>

			<div class="pt-6 border-t border-gray-100">
				<button type="submit" disabled={loading} class="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70 transition-colors">
					{#if loading}<Loader2 class="h-5 w-5 animate-spin" />{:else}<Send class="h-5 w-5" />{/if} Kirim Pengajuan UMKM
				</button>
			</div>
		</form>
	</div>
</div>

<script context="module">
	import { page } from '$app/stores';
</script>
