<script lang="ts">
	import { Image as ImageIcon, Sparkles, Calendar, PlayCircle } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Galeri - Desa Bunder</title>
</svelte:head>

<div class="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header Banner -->
	<div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-12 text-white shadow-xl">
		<div class="relative z-10 max-w-2xl">
			<span class="inline-flex items-center gap-2 rounded-full bg-blue-700/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md mb-4 border border-blue-400/30">
				<Sparkles class="h-3.5 w-3.5" /> Koleksi Momen & Kegiatan
			</span>
			<h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">Galeri Desa Bunder</h1>
			<p class="text-blue-100 text-base md:text-lg leading-relaxed font-light">
				Dokumentasi visual keindahan, potensi, dan beragam kegiatan kemasyarakatan di Desa Bunder.
			</p>
		</div>

		<!-- Decor Blobs -->
		<div class="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
	</div>

	<!-- Video Profil Highlight -->
	<div class="rounded-3xl bg-slate-900 p-6 md:p-10 text-white shadow-xl border border-white/10 overflow-hidden">
		<div class="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-wider mb-4">
			<PlayCircle class="h-5 w-5" /> Video Profil Utama
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
			<div class="lg:col-span-4 space-y-3">
				<h2 class="text-2xl font-bold text-white">Video Profil Resmi Desa Bunder</h2>
				<p class="text-sm text-gray-300 leading-relaxed">
					Saksikan gambaran menyeluruh tentang keasrian, sejarah, budaya, dan potensi unggulan Desa Bunder dalam bentuk tayangan video.
				</p>
			</div>
			<div class="lg:col-span-8">
				<div class="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
					<video controls preload="metadata" poster="/eduwisatagaram.jpg" class="w-full h-full object-cover">
						<source src="/videoprofil.MOV" type="video/mp4" />
						<source src="/videoprofil.MOV" type="video/quicktime" />
						Browser Anda tidak mendukung pemutar video HTML5.
					</video>
				</div>
			</div>
		</div>
	</div>

	<!-- Photos Grid -->
	{#if data.galeriList.length > 0}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each data.galeriList as foto}
				<div class="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
					<div class="aspect-4/3 overflow-hidden bg-gray-100 relative">
						<img
							src={foto.gambar}
							alt={foto.judul || 'Foto Galeri Desa Bunder'}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
					</div>

					<div class="absolute bottom-0 inset-x-0 p-6 text-white">
						{#if foto.judul}
							<h3 class="text-lg font-bold drop-shadow-md mb-1">{foto.judul}</h3>
						{/if}
						{#if foto.deskripsi}
							<p class="text-sm text-gray-200 line-clamp-2 drop-shadow-sm font-light mb-2">{foto.deskripsi}</p>
						{/if}
						<div class="flex items-center gap-1.5 text-xs text-blue-200">
							<Calendar class="h-3.5 w-3.5" />
							<span>{new Date(foto.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="py-20 text-center text-gray-500 bg-white rounded-3xl border border-dashed border-gray-200">
			<ImageIcon class="h-16 w-16 mx-auto mb-4 text-gray-300" />
			<h3 class="text-lg font-bold text-gray-700 mb-1">Belum Ada Foto</h3>
			<p class="text-sm">Dokumentasi galeri desa akan ditampilkan di sini.</p>
		</div>
	{/if}
</div>
