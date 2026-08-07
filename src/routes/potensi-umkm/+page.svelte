<script lang="ts">
	import { Store, ShoppingBag, Factory, Users, ChevronRight, MapPin, Search } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Potensi & UMKM - Desa Bunder</title>
</svelte:head>

<div class="bg-blue-900 pt-16 pb-32 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<span
				class="mb-6 inline-block rounded-full bg-blue-800 px-3 py-1 text-xs font-bold tracking-wider text-blue-200 uppercase"
				>Potensi Desa</span
			>
			<h1 class="mb-6 text-4xl leading-tight font-extrabold md:text-5xl">
				Mendorong Ekonomi Lokal Lewat UMKM Desa Bunder
			</h1>
			<p class="mb-8 max-w-2xl text-lg leading-relaxed text-blue-200">
				Jelajahi berbagai produk unggulan dan usaha kreatif warga desa yang menjadi pilar
				kemandirian ekonomi masyarakat kami.
			</p>
			<div class="flex flex-wrap gap-4">
				<button
					class="rounded-lg bg-white px-6 py-3 font-bold text-blue-900 shadow-sm transition-colors hover:bg-gray-100"
				>
					Lihat Katalog Produk
				</button>
				<a
					href="/potensi-umkm/daftar"
					class="rounded-lg border border-blue-700 bg-blue-800 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
				>
					Daftarkan Usaha Anda
				</a>
			</div>
		</div>
	</div>
</div>


<div class="relative z-10 mx-auto -mt-20 mb-12 max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
	<!-- Direktori UMKM -->
	<section class="rounded-3xl border border-gray-100 bg-gray-50 p-8 lg:p-12">
		<div class="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
			<div>
				<h2 class="text-2xl font-bold text-gray-900">Direktori UMKM</h2>
				<p class="mt-1 text-gray-500">
					Dukung pertumbuhan ekonomi dengan berbelanja di tetangga sendiri.
				</p>
			</div>
			<div class="relative">
				<select
					class="appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-4 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				>
					<option>Semua Kategori</option>
					<option>Kuliner</option>
					<option>Kerajinan</option>
					<option>Fashion</option>
					<option>Agrobisnis</option>
				</select>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
				>
					<ChevronRight class="h-4 w-4 rotate-90" />
				</div>
			</div>
		</div>

		<div class="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.umkmList as item}
				<div
					class="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
				>
					<div class="relative h-40 overflow-hidden bg-gray-100">
						{#if item.gambar}
							<img
								src={item.gambar}
								alt={item.namaUsaha}
								class="h-full w-full object-cover"
							/>
						{:else}
							<div class="flex h-full w-full items-center justify-center text-gray-400">
								<Store class="h-10 w-10" />
							</div>
						{/if}
						<div
							class="absolute top-3 right-3 rounded bg-white/90 px-2 py-1 text-xs font-bold text-gray-700 backdrop-blur-sm"
						>
							UMKM
						</div>
					</div>
					<div class="flex flex-1 flex-col p-5">
						<h3 class="mb-1 text-lg font-bold text-gray-900">{item.namaUsaha}</h3>
						<p class="mb-2 text-xs font-semibold text-gray-500">Oleh: {item.namaPemilik}</p>
						<p class="mb-4 flex-1 text-xs text-gray-600 line-clamp-3">
							{item.deskripsi || 'Tidak ada deskripsi'}
						</p>
						
						{#if item.alamat}
							<div class="mb-2 flex items-start gap-1.5 text-xs text-gray-500">
								<MapPin class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
								<span class="line-clamp-2">{item.alamat}</span>
							</div>
						{/if}
						
						<div class="mt-auto flex flex-col gap-2">
							<a
								href={item.kontak ? `https://wa.me/${item.kontak.replace(/[^0-9]/g, '')}` : '#'}
								target="_blank"
								class="w-full text-center rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 hover:border-green-300"
							>
								Hubungi Penjual
							</a>
							<a
								href={`https://maps.google.com/?q=${item.namaUsaha} ${item.alamat || ''}`}
								target="_blank"
								class="w-full text-center rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
							>
								Lihat Peta
							</a>
						</div>
					</div>
				</div>
			{:else}
				<div class="col-span-full py-12 text-center text-gray-500">
					Belum ada data UMKM yang didaftarkan.
				</div>
			{/each}
		</div>

		<div class="text-center">
			<button
				class="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
			>
				Muat Lebih Banyak
			</button>
		</div>
	</section>



	<!-- CTA -->
	<section
		class="relative mt-16 overflow-hidden rounded-3xl bg-blue-700 p-10 text-center text-white shadow-lg md:p-16"
	>
		<div class="relative z-10 mx-auto max-w-2xl">
			<h2 class="mb-4 text-3xl font-bold">Punya Usaha di Desa Bunder?</h2>
			<p class="mb-8 text-lg text-blue-100">
				Daftarkan usaha Anda sekarang untuk mendapatkan akses ke program pelatihan, bantuan modal,
				dan pemasaran digital gratis dari pemerintah desa.
			</p>
			<a
				href="/potensi-umkm/daftar"
				class="inline-block rounded-xl bg-white px-8 py-3.5 font-bold text-blue-900 shadow-md transition-colors hover:bg-gray-100"
			>
				Daftar Sekarang
			</a>
		</div>

		<!-- Decor Background -->
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"
		></div>
	</section>
</div>
