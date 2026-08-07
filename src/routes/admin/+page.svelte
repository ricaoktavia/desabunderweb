<script lang="ts">
	import { Users, FileText, Image as ImageIcon, Store, TrendingUp } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props();
	
	let stats = $derived([
		{ name: 'Total Berita', value: data.beritaCount.toString(), change: '+2', icon: FileText, color: 'bg-blue-500' },
		{ name: 'Total UMKM', value: data.umkmCount.toString(), change: '+5', icon: Store, color: 'bg-emerald-500' },
		{ name: 'Galeri Foto', value: data.galeriCount.toString(), change: '+12', icon: ImageIcon, color: 'bg-purple-500' },
	]);
</script>

<div class="space-y-6">
	<div>
		<h1 class="text-2xl font-bold tracking-tight text-gray-900">Beranda Utama</h1>
		<p class="mt-1 text-sm text-gray-500">Selamat datang di panel admin Desa Bunder. Berikut adalah ringkasan sistem Anda.</p>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<div class="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-gray-200">
				<div class="flex items-center gap-4">
					<div class={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${stat.color}`}>
						<stat.icon class="h-6 w-6" />
					</div>
					<div>
						<p class="text-sm font-medium text-gray-500">{stat.name}</p>
						<p class="text-2xl font-bold text-gray-900">{stat.value}</p>
					</div>
				</div>
				<div class="mt-4 flex items-center text-sm">
					<span class="font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.change}</span>
					<span class="ml-2 text-gray-500">dari bulan lalu</span>
				</div>
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
		<!-- Shortcut Actions -->
		<div class="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
			<h2 class="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
			<div class="grid grid-cols-2 gap-4">
				<a href="/admin/berita/tambah" class="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-blue-50 hover:border-blue-100 hover:text-blue-700">
					<FileText class="h-6 w-6" />
					<span class="text-sm font-medium">Tulis Berita</span>
				</a>
				<a href="/admin/umkm/tambah" class="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-emerald-50 hover:border-emerald-100 hover:text-emerald-700">
					<Store class="h-6 w-6" />
					<span class="text-sm font-medium">Tambah UMKM</span>
				</a>
			</div>
		</div>

		<!-- Info / Status -->
		<div class="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 p-6 shadow-lg text-white">
			<h2 class="text-lg font-semibold mb-2">Status Sistem</h2>
			<p class="text-blue-100 text-sm mb-6">Website dan database berjalan dengan normal. Jangan lupa untuk secara rutin memperbarui informasi desa.</p>
			<a href="/" target="_blank" class="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
				Lihat Website Publik &rarr;
			</a>
		</div>
	</div>
</div>
