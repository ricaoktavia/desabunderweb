<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus, Trash2, Loader2, Image as ImageIcon } from 'lucide-svelte';
	import type { PageData, ActionData } from './$types';
	import { slide } from 'svelte/transition';

	let { data, form } = $props<{ data: PageData; form: ActionData }>();
	
	let loading = $state(false);
	let isModalOpen = $state(false);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Struktur Perangkat Desa</h1>
			<p class="mt-1 text-sm text-gray-500">Kelola data aparatur dan perangkat desa Bunder.</p>
		</div>
		<button
			onclick={() => isModalOpen = true}
			class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
		>
			<Plus class="h-4 w-4" />
			Tambah Aparatur
		</button>
	</div>

	{#if form?.error}
		<div class="rounded-lg bg-red-50 p-4 border border-red-200" in:slide>
			<p class="text-sm font-medium text-red-800">{form.error}</p>
		</div>
	{/if}

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.aparaturList as aparatur}
			<div class="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
				<form action="?/delete" method="POST" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }} class="absolute right-4 top-4 z-10">
					<input type="hidden" name="id" value={aparatur.id} />
					<button type="submit" disabled={loading} class="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100 transition-colors">
						<Trash2 class="h-4 w-4" />
					</button>
				</form>

				<div class="flex flex-col items-center text-center">
					{#if aparatur.foto}
						<img src={aparatur.foto} alt={aparatur.nama} class="h-24 w-24 rounded-full object-cover shadow-sm mb-4" />
					{:else}
						<div class="h-24 w-24 rounded-full bg-blue-50 text-blue-200 flex items-center justify-center mb-4">
							<ImageIcon class="h-10 w-10" />
						</div>
					{/if}
					
					<h3 class="text-lg font-bold text-gray-900">{aparatur.nama}</h3>
					<p class="text-sm font-medium text-blue-600 mt-1">{aparatur.jabatan}</p>
					<p class="text-xs text-gray-400 mt-2">Urutan: {aparatur.urutan}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

{#if isModalOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm px-4" in:slide>
		<div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
			<h2 class="mb-4 text-xl font-bold text-gray-900">Tambah Aparatur</h2>
			
			<form action="?/create" method="POST" enctype="multipart/form-data" use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					await update();
					loading = false;
					isModalOpen = false;
				};
			}}>
				<div class="space-y-4">
					<div>
						<label for="nama" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
						<input type="text" id="nama" name="nama" required class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
					</div>
					<div>
						<label for="jabatan" class="block text-sm font-medium text-gray-700">Jabatan</label>
						<input type="text" id="jabatan" name="jabatan" required placeholder="Contoh: Kepala Desa" class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
					</div>
					<div>
						<label for="urutan" class="block text-sm font-medium text-gray-700">Nomor Urutan (1 untuk Kades)</label>
						<input type="number" id="urutan" name="urutan" value="99" class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
					</div>
					<div>
						<label for="foto" class="block text-sm font-medium text-gray-700">Foto</label>
						<input type="file" id="foto" name="foto" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100" />
					</div>
				</div>

				<div class="mt-6 flex justify-end gap-3">
					<button type="button" onclick={() => isModalOpen = false} class="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Batal</button>
					<button type="submit" disabled={loading} class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
						{#if loading}<Loader2 class="h-4 w-4 animate-spin" />{/if} Simpan
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
