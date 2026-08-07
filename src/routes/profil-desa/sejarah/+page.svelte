<script lang="ts">
	import { History, Sparkles, Map, BookOpen } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Sejarah Desa - Desa Bunder</title>
</svelte:head>

<div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
	<!-- Efek Latar Belakang Bergerak (Blobs) -->
	<div class="absolute -left-40 -top-40 h-96 w-96 animate-[spin_20s_linear_infinite] rounded-full bg-blue-300/20 blur-3xl"></div>
	<div class="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] animate-[spin_25s_linear_infinite_reverse] rounded-full bg-indigo-300/20 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<!-- Judul Utama -->
		<div class="animate-fade-in-up text-center mb-16 mt-12">
			<span class="mb-4 flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase">
				<History class="h-5 w-5" /> Rekam Jejak
			</span>
			<h1 class="text-5xl font-black tracking-tight md:text-7xl drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 pb-2">
				Sejarah Desa Bunder
			</h1>
			<p class="mt-6 text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
				Menyelusuri asal-usul dan cerita kebanggaan dari generasi ke generasi.
			</p>
		</div>

		<!-- Grid Konten -->
		<div class="grid gap-12 lg:grid-cols-2">
			
			<!-- Kotak 1: Asal Usul -->
			<div class="animate-fade-in-up delay-200 group relative overflow-hidden rounded-[3rem] bg-white/70 p-10 md:p-14 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-blue-900/20 border border-white/60">
				<div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/50 transition-transform duration-700 group-hover:scale-[2.5]"></div>
				<div class="relative z-10 flex flex-col h-full">
					<div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl">
						<BookOpen class="h-8 w-8" />
					</div>
					<h2 class="mb-6 text-3xl font-extrabold text-gray-900">Asal Usul Nama</h2>
					<img src="/uploads/balaidesa.jpeg" alt="Balai Desa Bunder" class="mb-6 h-56 w-full rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.02]" />
					<div class="space-y-6 text-lg leading-loose text-gray-600">
						<p>
							Seorang anak yang mencari pamannya. Pada waktu banyak anak-anak yang bermain membentuk lingkaran. Kemudian anak yang mencari pamannya itu mengelilingi anak-anak yang sedang bermain.
						</p>
						<p>
							Selama tiga hari anak itu tetep berdiri di tempat anak-anak bermain yang membentuk lingkaran itu tadi. Seperti bunderan.
						</p>
					</div>
				</div>
			</div>

			<!-- Kotak 2: Selayang Pandang -->
			<div class="animate-fade-in-up delay-300 group relative overflow-hidden rounded-[3rem] bg-white/70 p-10 md:p-14 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-blue-900/20 border border-white/60">
				<div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-100/50 transition-transform duration-700 group-hover:scale-[2.5]"></div>
				<div class="relative z-10 flex flex-col h-full">
					<div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl">
						<Sparkles class="h-8 w-8" />
					</div>
					<h2 class="mb-6 text-3xl font-extrabold text-gray-900">Selayang Pandang</h2>
					<img src="/garam.jpg" alt="Pegaraman Desa Bunder" class="mb-6 h-56 w-full rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.02]" />
					<div class="space-y-4 text-base leading-relaxed text-gray-600 text-justify">
						{#if data.profil?.sejarah}
							{#each data.profil.sejarah.split('\n') as p}
								{#if p.trim()}
									<p>{p}</p>
								{/if}
							{/each}
						{:else}
							<p>Data sejarah belum ditambahkan.</p>
						{/if}
					</div>
				</div>
			</div>
			
			<!-- Kotak 3: Geografis (Tampil Lebar Penuh) -->
			<div class="animate-fade-in-up delay-500 group lg:col-span-2 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-10 md:p-14 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-700/50">
				<div class="absolute inset-0 bg-blue-900 opacity-20 mix-blend-overlay"></div>
				<div class="relative z-10 text-white">
					<div class="mb-10 flex items-center gap-5">
						<div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
							<Map class="h-8 w-8 text-white" />
						</div>
						<h2 class="text-3xl font-extrabold">Kondisi Geografis</h2>
					</div>
					<p class="mb-8 text-blue-100 text-lg leading-relaxed max-w-4xl">
						Desa Bunder adalah sebuah daerah yang berdiri di atas dataran rendah dengan suhu udara rata-rata 39° C dengan ketinggian tanah di atas 250 m dari atas permukaan laut. Ditinjau secara klimatologis Desa Bunder merupakan daerah iklim tropis yang memiliki tingkat curah hujan sedang.
					</p>
					<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div class="rounded-3xl bg-black/20 p-8 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
							<p class="text-sm font-bold uppercase tracking-widest text-blue-300">Topografi</p>
							<p class="mt-4 text-2xl font-black text-white leading-tight">Dataran Rendah</p>
							<p class="text-blue-200 mt-2 text-base">> 250 mdpl</p>
						</div>
						<div class="rounded-3xl bg-black/20 p-8 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
							<p class="text-sm font-bold uppercase tracking-widest text-blue-300">Suhu Udara</p>
							<p class="mt-4 text-2xl font-black text-white leading-tight">39°C</p>
							<p class="text-blue-200 mt-2 text-base">Rata-rata</p>
						</div>
						<div class="rounded-3xl bg-black/20 p-8 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
							<p class="text-sm font-bold uppercase tracking-widest text-blue-300">Iklim</p>
							<p class="mt-4 text-2xl font-black text-white leading-tight">Tropis</p>
							<p class="text-blue-200 mt-2 text-base">Hujan sedang</p>
						</div>
						<div class="rounded-3xl bg-black/20 p-8 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
							<p class="text-sm font-bold uppercase tracking-widest text-blue-300">Lokasi</p>
							<p class="mt-4 text-2xl font-black text-white leading-tight">Pademawu</p>
							<p class="text-blue-200 mt-2 text-base">Pamekasan</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<style>
	/* Animasi Muncul dari Bawah (Fade In Up) */
	.animate-fade-in-up {
		opacity: 0;
		animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	
	/* Jeda Animasi Supaya Muncul Berurutan */
	.delay-200 { animation-delay: 200ms; }
	.delay-300 { animation-delay: 300ms; }
	.delay-500 { animation-delay: 500ms; }

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(60px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
