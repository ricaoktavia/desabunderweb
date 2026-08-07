<script lang="ts">
	import { enhance } from '$app/forms';
	import { Save, Loader2, Users, User, CheckCircle2 } from 'lucide-svelte';
	import type { PageData, ActionData } from './$types';
	import { fade, scale, slide } from 'svelte/transition';

	let { data, form } = $props<{ data: PageData; form: ActionData }>();
	
	let loading = $state(false);
</script>

<div class="relative max-w-4xl space-y-6">
	<div>
		<h1 class="text-2xl font-bold text-gray-900">Kelola Data Statistik Desa</h1>
		<p class="mt-1 text-sm text-gray-500">Perbarui jumlah total penduduk, laki-laki, dan perempuan yang akan ditampilkan di website publik.</p>
	</div>

	{#if form?.error && !loading}
		<div class="rounded-xl bg-red-50 p-4 border border-red-200" in:slide>
			<p class="text-sm font-medium text-red-800">{form.error}</p>
		</div>
	{/if}

	{#if form?.success && !loading}
		<div class="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-emerald-800 shadow-sm" in:slide>
			<CheckCircle2 class="h-5 w-5 text-emerald-600 shrink-0" />
			<p class="text-sm font-semibold">{form.message || 'Data statistik berhasil diperbarui!'}</p>
		</div>
	{/if}

	<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
		<form action="?/update" method="POST" use:enhance={() => {
			loading = true;
			const startTime = Date.now();
			return async ({ update }) => {
				const elapsedTime = Date.now() - startTime;
				const minDelay = 2000; // Tepat 2 detik loading
				if (elapsedTime < minDelay) {
					await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));
				}
				await update();
				loading = false;
			};
		}}>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Total Penduduk -->
				<div class="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-3 transition-all hover:bg-blue-50/30">
					<div class="flex items-center gap-3 text-blue-700">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
							<Users class="h-5 w-5" />
						</div>
						<span class="font-bold text-sm text-gray-900">Total Penduduk</span>
					</div>
					<div>
						<label for="totalPenduduk" class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Jumlah (Jiwa)</label>
						<input
							type="text"
							id="totalPenduduk"
							name="totalPenduduk"
							value={data.totalPenduduk}
							required
							placeholder="Contoh: 2.955 Jiwa"
							class="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-lg font-bold text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>

				<!-- Laki-Laki -->
				<div class="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-3 transition-all hover:bg-blue-50/30">
					<div class="flex items-center gap-3 text-blue-700">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
							<User class="h-5 w-5" />
						</div>
						<span class="font-bold text-sm text-gray-900">Penduduk Laki-Laki</span>
					</div>
					<div>
						<label for="lakiLaki" class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Jumlah (Jiwa)</label>
						<input
							type="text"
							id="lakiLaki"
							name="lakiLaki"
							value={data.lakiLaki}
							required
							placeholder="Contoh: 1.450 Jiwa"
							class="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-lg font-bold text-blue-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>

				<!-- Perempuan -->
				<div class="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-3 transition-all hover:bg-rose-50/30">
					<div class="flex items-center gap-3 text-rose-600">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
							<User class="h-5 w-5" />
						</div>
						<span class="font-bold text-sm text-gray-900">Penduduk Perempuan</span>
					</div>
					<div>
						<label for="perempuan" class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Jumlah (Jiwa)</label>
						<input
							type="text"
							id="perempuan"
							name="perempuan"
							value={data.perempuan}
							required
							placeholder="Contoh: 1.505 Jiwa"
							class="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-lg font-bold text-rose-600 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
						/>
					</div>
				</div>
			</div>

			<div class="mt-8 flex justify-end">
				<button
					type="submit"
					disabled={loading}
					class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg disabled:opacity-50"
				>
					{#if loading}
						<Loader2 class="h-4 w-4 animate-spin" />
						Menyimpan...
					{:else}
						<Save class="h-4 w-4" />
						Simpan Perubahan
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>

<!-- Modal Loading Lingkaran (2 Detik) -->
{#if loading}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm px-4"
	>
		<div
			transition:scale={{ duration: 200, start: 0.95 }}
			class="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-2xl border border-gray-100 max-w-xs w-full space-y-4"
		>
			<!-- Lingkaran Loading Spinner Ring Clean -->
			<div class="h-14 w-14 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>

			<div>
				<h3 class="text-base font-bold text-gray-900">Menyimpan...</h3>
				<p class="text-xs text-gray-500 mt-1">Memperbarui statistik desa</p>
			</div>
		</div>
	</div>
{/if}
