<script lang="ts">
	import type { PageData } from './$types';
	import { 
		Search, 
		Newspaper, 
		Calendar, 
		Bell, 
		Store, 
		ChevronRight,
		FileQuestion
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	function getIcon(type: string) {
		switch (type) {
			case 'Berita': return Newspaper;
			case 'Agenda': return Calendar;
			case 'Pengumuman': return Bell;
			case 'UMKM': return Store;
			case 'Halaman Utama': return Search;
			case 'Halaman Profil': return Search;
			default: return Search;
		}
	}

	function getColor(type: string) {
		switch (type) {
			case 'Berita': return 'text-blue-600 bg-blue-50 border-blue-200';
			case 'Agenda': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
			case 'Pengumuman': return 'text-orange-600 bg-orange-50 border-orange-200';
			case 'UMKM': return 'text-purple-600 bg-purple-50 border-purple-200';
			case 'Halaman Utama': return 'text-teal-600 bg-teal-50 border-teal-200';
			case 'Halaman Profil': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
			default: return 'text-gray-600 bg-gray-50 border-gray-200';
		}
	}
</script>

<svelte:head>
	<title>Pencarian: {data.q} - Desa Bunder</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<!-- Header -->
	<div class="bg-blue-900 py-16 text-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
			<div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-200 mb-6 backdrop-blur-sm">
				<Search class="h-8 w-8" />
			</div>
			<h1 class="text-3xl font-extrabold md:text-5xl mb-4">Hasil Pencarian</h1>
			<p class="text-blue-200 text-lg">
				{#if data.q}
					Menampilkan hasil untuk: <span class="font-bold text-white">"{data.q}"</span>
				{:else}
					Ketikkan kata kunci untuk mencari informasi di Desa Bunder.
				{/if}
			</p>
		</div>
	</div>

	<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		{#if !data.q}
			<div class="text-center bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
				<Search class="h-16 w-16 text-gray-300 mx-auto mb-4" />
				<h3 class="text-xl font-bold text-gray-900 mb-2">Mulai Pencarian</h3>
				<p class="text-gray-500">Gunakan kotak pencarian di bagian atas untuk menemukan Berita, Pengumuman, Agenda, atau UMKM.</p>
			</div>
		{:else if data.results.length === 0}
			<div class="text-center bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
				<FileQuestion class="h-16 w-16 text-gray-300 mx-auto mb-4" />
				<h3 class="text-xl font-bold text-gray-900 mb-2">Tidak Ditemukan</h3>
				<p class="text-gray-500">Maaf, kami tidak dapat menemukan informasi terkait <span class="font-bold text-gray-700">"{data.q}"</span>.</p>
				<p class="text-gray-500 mt-2">Coba gunakan kata kunci lain yang lebih umum.</p>
			</div>
		{:else}
			<div class="space-y-6">
				<p class="text-gray-500 font-medium mb-6">Ditemukan {data.results.length} hasil untuk "{data.q}"</p>
				
				{#each data.results as item}
					<a 
						href={item.url} 
						class="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-blue-200 group"
					>
						<div class="flex items-start gap-4">
							<div class={`shrink-0 flex items-center justify-center h-12 w-12 rounded-xl border ${getColor(item.type)}`}>
								<svelte:component this={getIcon(item.type)} class="h-6 w-6" />
							</div>
							<div class="flex-1 min-w-0">
								<div class="flex items-center gap-2 mb-1">
									<span class={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getColor(item.type)} uppercase tracking-wider`}>
										{item.type}
									</span>
									<span class="text-sm text-gray-400">
										{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
									</span>
								</div>
								<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
									{item.title}
								</h3>
								<p class="text-gray-600 text-sm line-clamp-2">
									{item.description.replace(/<[^>]*>?/gm, '')}
								</p>
							</div>
							<div class="shrink-0 self-center">
								<ChevronRight class="h-5 w-5 text-gray-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" />
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
