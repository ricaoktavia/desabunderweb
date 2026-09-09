<script lang="ts">
	import { 
		MapPin, 
		Users, 
		Home, 
		Trees, 
		Sun, 
		TrendingUp,
		Shield,
		BookOpen,
		Award,
		Star,
		PlayCircle
	} from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Profil - Desa Bunder</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<!-- Hero Header -->
	<div class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-24 pb-32 text-white overflow-hidden">
		<!-- Background pattern -->
		<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at center, white 1px, transparent 1px); background-size: 30px 30px;"></div>
		<div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
		
		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
			<div class="flex flex-col md:flex-row items-center gap-12">
				<div class="flex-1 text-center md:text-left">
					<span class="inline-flex items-center gap-2 rounded-full bg-blue-800/50 px-4 py-2 text-sm font-bold tracking-widest text-blue-200 backdrop-blur-md mb-6 border border-blue-700/50 uppercase">
						<MapPin class="h-4 w-4" /> Profil Desa Bunder
					</span>
					<h1 class="text-4xl font-black md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-lg">
						Desa Harmoni <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Kaya Potensi</span>
					</h1>
					<p class="text-lg md:text-xl text-blue-100 max-w-2xl font-light leading-relaxed">
						Desa Bunder, sebuah permata di Kecamatan Pademawu, Pamekasan. Dikenal dengan sebutan "Desa Pendidikan", kami memadukan kearifan lokal, potensi pertanian dan pegaraman, serta tata kelola pemerintahan yang berintegritas.
					</p>
				</div>
				<!-- Main Image / Illustration -->
				<div class="flex-1 w-full max-w-md hidden md:block">
					<div class="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
						<img src="/eduwisatagaram.jpg" alt="Pemandangan Desa Bunder" class="w-full h-full object-cover" />
						<div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
						<div class="absolute bottom-6 left-6 right-6">
							<p class="text-white font-bold text-xl">Jejak Eduwisata Garam</p>
							<p class="text-blue-200 text-sm">Potensi Alam Desa Bunder</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
		<!-- Quick Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in-up delay-200">
			{#each [
				{ label: "Penduduk", value: "± 4.500", suffix: "Jiwa", icon: Users, color: "text-blue-600" },
				{ label: "Luas Wilayah", value: "320", suffix: "Hektar", icon: Home, color: "text-indigo-600" },
				{ label: "Ketinggian", value: "250", suffix: "mdpl", icon: Trees, color: "text-green-600" },
				{ label: "Suhu Rata-rata", value: "39", suffix: "°C", icon: Sun, color: "text-orange-500" }
			] as stat}
				<div class="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
					<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-colors {stat.color}">
						<svelte:component this={stat.icon} class="h-7 w-7" />
					</div>
					<p class="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
					<div class="mt-2 flex items-baseline gap-1">
						<span class="text-3xl font-black text-gray-900">{stat.value}</span>
						<span class="text-sm font-semibold text-gray-500">{stat.suffix}</span>
					</div>
				</div>
			{/each}
		</div>

		<!-- About Section -->
		<div class="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-up delay-300">
			<div class="space-y-6">
				<h2 class="text-3xl font-black text-gray-900">Mengenal Lebih Dekat Desa Bunder</h2>
				<p class="text-lg text-gray-600 leading-relaxed">
					Berada di wilayah tropis yang strategis, Desa Bunder dikaruniai potensi alam yang mendukung kehidupan agraris dan maritim. 
					Tanah pertanian tadah hujan yang subur dan hamparan pegaraman menjadi tulang punggung perekonomian masyarakat kami.
				</p>
				<p class="text-lg text-gray-600 leading-relaxed">
					Kami bangga dengan semangat gotong royong dan ikatan sosial yang kuat. Masyarakat Desa Bunder selalu mengedepankan nilai-nilai kebersamaan dalam setiap aspek kehidupan, mulai dari pengelolaan lahan hingga pelestarian tradisi lokal.
				</p>
				<a href="/profil-desa/sejarah" class="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800 hover:underline mt-4">
					Baca Sejarah Desa <ChevronRight class="h-4 w-4" />
				</a>
			</div>
			<div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
				<img src="/sawahh.jpeg" alt="Sawah Desa Bunder" class="w-full h-full min-h-[300px] object-cover hover:scale-105 transition-transform duration-700" />
			</div>
		</div>

		<!-- Video Profil Section -->
		<div class="mb-20 animate-fade-in-up delay-350">
			<div class="rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 md:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
				<div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"></div>
				
				<div class="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
					<div class="lg:col-span-5 space-y-4">
						<span class="inline-flex items-center gap-2 rounded-full bg-blue-800/50 border border-blue-700/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 backdrop-blur-md">
							<PlayCircle class="h-4 w-4 text-blue-400" /> Video Dokumenter
						</span>
						<h2 class="text-3xl md:text-4xl font-black text-white leading-tight">
							Video Profil <br/><span class="text-blue-400">Desa Bunder</span>
						</h2>
						<p class="text-blue-100/80 leading-relaxed text-base">
							Saksikan keindahan alam, kehidupan kemasyarakatan, serta potensi pendidikan dan ekonomi yang ada di Desa Bunder melalui tayangan video profil resmi ini.
						</p>
					</div>
					
					<div class="lg:col-span-7">
						<div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
							<video 
								controls 
								preload="metadata" 
								class="w-full h-full object-cover"
								poster="/eduwisatagaram.jpg"
							>
								<source src="/videoprofil.MOV" type="video/mp4" />
								<source src="/videoprofil.MOV" type="video/quicktime" />
								Browser Anda tidak mendukung pemutar video HTML5.
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Keunggulan / Potensi -->
		<div class="rounded-[3rem] bg-white p-10 md:p-16 shadow-xl border border-gray-100 animate-fade-in-up delay-400">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-black text-gray-900">Potensi & Keunggulan</h2>
				<p class="text-gray-500 mt-4 max-w-2xl mx-auto">Tiga pilar utama yang menjadikan Desa Bunder istimewa dan terus berkembang.</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group">
					<div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
						<TrendingUp class="h-6 w-6" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Ekonomi & Pertanian</h3>
					<p class="text-gray-600 leading-relaxed">
						Hamparan sawah tadah hujan dan pegaraman yang dikelola secara optimal, menggerakkan roda ekonomi kerakyatan dan UMKM lokal.
					</p>
				</div>

				<div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-100 transition-colors group">
					<div class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
						<BookOpen class="h-6 w-6" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Desa Pendidikan</h3>
					<p class="text-gray-600 leading-relaxed">
						Memiliki fasilitas pendidikan terlengkap se-Kecamatan Pademawu, menjadikan kami pelopor majunya generasi penerus desa.
					</p>
				</div>

				<div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-cyan-50 hover:border-cyan-100 transition-colors group">
					<div class="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
						<Shield class="h-6 w-6" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Tata Kelola Baik</h3>
					<p class="text-gray-600 leading-relaxed">
						Pemerintahan desa yang transparan, inovatif, dan responsif dalam memberikan pelayanan publik terbaik kepada masyarakat.
					</p>
				</div>
			</div>
		</div>

		<!-- Prestasi & Penghargaan -->
		<div class="mt-20 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-blue-900 to-indigo-900 p-6 sm:p-10 md:p-16 shadow-2xl text-white animate-fade-in-up delay-500 relative overflow-hidden">
			<!-- Background Deco -->
			<div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
			<div class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
			
			<div class="relative z-10 text-center mb-12">
				<div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-yellow-400 mb-6 backdrop-blur-sm border border-white/20">
					<Award class="h-8 w-8" />
				</div>
				<h2 class="text-3xl font-black md:text-4xl">Prestasi & Penghargaan</h2>
				<p class="text-blue-200 mt-4 max-w-2xl mx-auto">
					Bukti nyata dari dedikasi dan kerja keras seluruh elemen masyarakat dan pemerintah Desa Bunder dalam membangun desa yang lebih baik.
				</p>
			</div>

			<div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each data.daftarPenghargaan as item}
					<div class="group relative overflow-hidden rounded-3xl bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-2 border border-white/10 shadow-lg">
						<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
							{#if item.gambar}
								<img 
									src={item.gambar} 
									alt={item.judul}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							{:else}
								<div class="h-full w-full bg-blue-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
									<Award class="h-16 w-16 text-blue-500/50" />
								</div>
							{/if}
							<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
							
							<div class="absolute bottom-0 left-0 w-full p-6">
								<div class="flex items-center gap-2 text-yellow-400 mb-2">
									<Star class="h-4 w-4 fill-yellow-400" />
									<span class="text-xs font-bold uppercase tracking-wider">{item.tahun || 'Penghargaan'}</span>
								</div>
								<h3 class="text-xl font-bold text-white mb-1">{item.judul}</h3>
								{#if item.pemberi}
									<p class="text-sm font-medium text-blue-200">Oleh: {item.pemberi}</p>
								{/if}
								{#if item.deskripsi}
									<div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
										<div class="overflow-hidden">
											<p class="text-sm text-gray-300 mt-3 line-clamp-3">{item.deskripsi}</p>
										</div>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{:else}
					<div class="col-span-full py-12 flex flex-col items-center justify-center text-center text-white/50">
						<Award class="h-12 w-12 mb-3 opacity-50" />
						<p>Belum ada data prestasi dan penghargaan.</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<script context="module">
	import { ChevronRight } from 'lucide-svelte';
</script>

<style>
	.animate-fade-in-up {
		opacity: 0;
		animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	.delay-200 { animation-delay: 200ms; }
	.delay-300 { animation-delay: 300ms; }
	.delay-400 { animation-delay: 400ms; }
	.delay-500 { animation-delay: 500ms; }

	@keyframes fadeInUp {
		from { opacity: 0; transform: translateY(40px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
