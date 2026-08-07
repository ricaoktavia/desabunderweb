<script lang="ts">
	import { ArrowLeft, Save, Loader2 } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let loading = $state(false);
</script>

<div class="mb-6 flex items-center justify-between">
	<div class="flex items-center gap-4">
		<a href="/admin/pengumuman" class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft class="h-5 w-5" /></a>
		<h1 class="text-2xl font-bold text-gray-900">Tambah Pengumuman</h1>
	</div>
</div>

<div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 max-w-3xl">
	<form method="POST" class="space-y-6" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}>
		<div>
			<label for="judul" class="block text-sm font-semibold text-gray-900 mb-2">Judul Pengumuman *</label>
			<input type="text" id="judul" name="judul" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50" />
		</div>
		<div>
			<label for="konten" class="block text-sm font-semibold text-gray-900 mb-2">Isi Pengumuman *</label>
			<textarea id="konten" name="konten" rows="8" required class="block w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50"></textarea>
		</div>
		<div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
			<a href="/admin/pengumuman" class="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Batal</a>
			<button type="submit" disabled={loading} class="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-70">
				{#if loading}<Loader2 class="h-4 w-4 animate-spin" />{:else}<Save class="h-4 w-4" />{/if} Simpan
			</button>
		</div>
	</form>
</div>
