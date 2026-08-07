<script lang="ts">
	import { ShieldCheck, Map, Users, ChevronRight, FileText, Calendar, Eye, Siren, ShieldPlus, CheckCircle2, Banknote, Store, PlayCircle, Target, History, MapPin, Check, PieChart, TrendingUp, Home, FileBadge, MessageSquare, Megaphone, Image as ImageIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	function reveal(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('animate-in');
						observer.unobserve(node);
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(node);
		node.classList.add('reveal');

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>Beranda - Desa Bunder</title>
</svelte:head>

<!-- Hero Full Width -->
<section class="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
	<!-- Background Video/Image -->
	<img
		src="https://images.unsplash.com/photo-1590242491689-08207906d0be?auto=format&fit=crop&q=80&w=1920"
		alt="Background Desa"
		class="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-[20s] hover:scale-110 ease-out"
	/>
	
	<!-- Tech/Futuristic Overlay (inspired by the reference) -->
	<div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
		<div class="w-[800px] h-[800px] border border-white/30 rounded-full border-dashed animate-[spin_120s_linear_infinite]"></div>
		<div class="absolute w-[600px] h-[600px] border border-white/20 rounded-full animate-[spin_90s_linear_infinite_reverse]"></div>
		<div class="absolute w-[100vw] h-[1px] bg-white/10"></div>
		<div class="absolute h-[100vh] w-[1px] bg-white/10"></div>
	</div>

	<!-- Overlay Gradient -->
	<div class="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900"></div>

	<!-- Hero Content -->
	<div class="relative z-10 text-center text-white px-4 flex flex-col items-center mt-12">
		<div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-white mb-6 uppercase tracking-widest">
			Selamat Datang di
		</div>
		
		<h1 class="text-6xl md:text-8xl font-black tracking-tight mb-4 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
			DESA BUNDER
		</h1>
		<p class="text-lg md:text-xl font-light mb-12 opacity-80 drop-shadow-md max-w-2xl">
			Kecamatan Pademawu, Kabupaten Pamekasan, Jawa Timur. <br/> Desa pendidikan yang asri, maju, dan harmonis.
		</p>
		
		<!-- Play Button -->
		<div class="flex flex-col items-center">
			<button class="group relative flex items-center justify-center h-20 w-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 hover:border-blue-400">
				<PlayCircle class="h-10 w-10 text-white transition-transform group-hover:scale-110 group-hover:text-blue-400" />
				<!-- Ping effect -->
				<div class="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-20 group-hover:border-blue-400"></div>
			</button>
			<p class="mt-5 text-xs font-bold tracking-[0.25em] uppercase text-white/60">Tonton Video Profil</p>
			<p class="mt-1 text-[10px] text-white/40 italic">(Video menyusul)</p>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl space-y-32 px-4 py-20 sm:px-6 lg:px-8">
	
	<!-- 1. Profil Desa (Spoiler) -->
	<section use:reveal class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
		<div class="relative group cursor-pointer order-2 lg:order-1">
			<div class="aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[2rem] shadow-2xl relative bg-gray-900">
				<img
					src="/perangkat-desa.jpg"
					alt="Perangkat Desa Bunder"
					class="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
				<div class="absolute bottom-8 left-8 text-white">
					<h3 class="text-2xl font-bold mb-2">Pemerintah Desa</h3>
					<p class="text-sm opacity-90 text-gray-200 max-w-sm">Berkomitmen memberikan pelayanan terbaik bagi seluruh lapisan masyarakat.</p>
				</div>
			</div>
			<!-- decorative blob -->
			<div class="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-50 blur-2xl"></div>
		</div>

		<div class="space-y-6 order-1 lg:order-2">
			<div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 uppercase tracking-wider">
				<History class="h-4 w-4" />
				<span>Profil Desa</span>
			</div>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
				Mengenal Lebih Dekat <br/> <span class="text-blue-700">Desa Bunder</span>
			</h2>
			
			<div class="space-y-4 text-gray-600 leading-relaxed text-lg">
				<p>
					Terletak di Kecamatan Pademawu, desa kami kaya akan potensi alam berupa Pegaraman dan pertanian. Desa Bunder juga dikenal sebagai desa pendidikan se-Kecamatan Pademawu.
				</p>
				<p class="text-base text-gray-500">
					Visi kami adalah mewujudkan kehidupan masyarakat yang religius, aman, harmonis, maju, adil dan tertib demi kesejahteraan bersama.
				</p>
			</div>
			
			<div class="pt-4">
				<a href="/profil-desa" class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-800 hover:-translate-y-1">
					Lihat Profil Lengkap <ChevronRight class="ml-2 h-5 w-5" />
				</a>
			</div>
		</div>
	</section>

	<!-- 2. Statistik (Spoiler) -->
	<section use:reveal class="relative rounded-3xl bg-blue-900 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
		<!-- BG Decoration -->
		<div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
		<div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-30 blur-3xl"></div>
		
		<div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
			<div class="lg:w-1/3 space-y-4 text-center lg:text-left">
				<div class="inline-flex items-center gap-2 rounded-full bg-blue-800/50 border border-blue-700 px-3 py-1 text-sm font-medium text-blue-200 uppercase tracking-widest backdrop-blur-sm">
					<PieChart class="h-4 w-4" /> Demografi
				</div>
				<h2 class="text-3xl md:text-4xl font-bold text-white">Statistik Penduduk</h2>
				<p class="text-blue-200 text-lg">Angka sekilas tentang komposisi penduduk Desa Bunder berdasarkan data terbaru.</p>
				
				<div class="pt-4">
					<a href="/statistik" class="inline-flex items-center font-medium text-blue-300 hover:text-white transition-colors">
						Lihat Data Statistik <ChevronRight class="ml-1 h-4 w-4" />
					</a>
				</div>
			</div>
			
			<div class="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
				<div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-center transition-transform hover:-translate-y-2">
					<Users class="h-8 w-8 text-blue-300 mx-auto mb-3" />
					<div class="text-3xl font-bold text-white mb-1">5.432</div>
					<div class="text-xs text-blue-200 uppercase tracking-wider">Total Penduduk</div>
				</div>
				<div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-center transition-transform hover:-translate-y-2">
					<Home class="h-8 w-8 text-blue-300 mx-auto mb-3" />
					<div class="text-3xl font-bold text-white mb-1">1.250</div>
					<div class="text-xs text-blue-200 uppercase tracking-wider">Kepala Keluarga</div>
				</div>
				<div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-center transition-transform hover:-translate-y-2">
					<TrendingUp class="h-8 w-8 text-blue-300 mx-auto mb-3" />
					<div class="text-3xl font-bold text-white mb-1">2.750</div>
					<div class="text-xs text-blue-200 uppercase tracking-wider">Laki-Laki</div>
				</div>
				<div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-center transition-transform hover:-translate-y-2">
					<TrendingUp class="h-8 w-8 text-blue-300 mx-auto mb-3 transform -scale-y-100" />
					<div class="text-3xl font-bold text-white mb-1">2.682</div>
					<div class="text-xs text-blue-200 uppercase tracking-wider">Perempuan</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 3. Potensi & UMKM (Spoiler) -->
	<section use:reveal class="space-y-10">
		<div class="flex flex-col md:flex-row items-end justify-between gap-4">
			<div class="space-y-2">
				<div class="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700 uppercase tracking-wider">
					<Store class="h-4 w-4" />
					<span>Kekayaan Desa</span>
				</div>
				<h2 class="text-3xl font-bold text-gray-900">Potensi & Produk UMKM</h2>
				<p class="text-gray-500 max-w-xl">Mendukung pertumbuhan ekonomi warga melalui optimalisasi potensi desa dan produk lokal unggulan.</p>
			</div>
			<a
				href="/potensi-umkm"
				class="inline-flex items-center font-medium text-blue-700 transition-colors hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg"
			>
				Eksplorasi Semua <ChevronRight class="ml-1 h-4 w-4" />
			</a>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- Potensi 1 -->
			<a href="/potensi-umkm" class="group relative overflow-hidden rounded-2xl aspect-[4/3]">
				<img src="/sawahh.jpeg" alt="Pertanian" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
				<div class="absolute bottom-6 left-6 right-6">
					<span class="inline-block px-2 py-1 bg-green-500 text-white text-xs font-bold rounded mb-2">Potensi Alam</span>
					<h3 class="text-xl font-bold text-white mb-1">Pertanian</h3>
					<p class="text-sm text-gray-300 line-clamp-2">Lahan pertanian yang subur menjadi tulang punggung ketahanan pangan desa.</p>
				</div>
			</a>
			<!-- Potensi 2 -->
			<a href="/potensi-umkm" class="group relative overflow-hidden rounded-2xl aspect-[4/3]">
				<img src="/garam.jpg" alt="Garam" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
				<div class="absolute bottom-6 left-6 right-6">
					<span class="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded mb-2">Potensi Alam</span>
					<h3 class="text-xl font-bold text-white mb-1">Tambak Garam</h3>
					<p class="text-sm text-gray-300 line-clamp-2">Kawasan pesisir dimanfaatkan sebagai area pegaraman berkualitas tinggi.</p>
				</div>
			</a>
			<!-- UMKM 1 -->
			<a href="/potensi-umkm" class="group relative overflow-hidden rounded-2xl aspect-[4/3]">
				<img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600" alt="Kerajinan" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
				<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
				<div class="absolute bottom-6 left-6 right-6">
					<span class="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded mb-2">UMKM Lokal</span>
					<h3 class="text-xl font-bold text-white mb-1">Aneka Jajanan</h3>
					<p class="text-sm text-gray-300 line-clamp-2">Produk olahan makanan ringan hasil kreativitas ibu-ibu warga desa.</p>
				</div>
			</a>
		</div>
	</section>

	<!-- 4. Layanan (Spoiler) -->
	<section use:reveal class="space-y-8 bg-gray-50 -mx-4 px-4 py-16 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[3rem]">
		<div class="flex flex-col items-center text-center space-y-3 mb-8">
			<div class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-800 uppercase tracking-wider">
				<FileText class="h-4 w-4" />
				<span>Akses Cepat</span>
			</div>
			<h2 class="text-3xl font-bold text-gray-900">Panduan Layanan Publik</h2>
			<p class="text-gray-500 max-w-2xl">Cek syarat kelengkapan berkas layanan administrasi sebelum Anda datang ke Balai Desa.</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
			<!-- Card 1 -->
			<a href="/layanan" class="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
				<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
					<FileText class="h-8 w-8" />
				</div>
				<h3 class="mb-2 font-bold text-gray-900 text-lg">Kependudukan</h3>
				<p class="text-sm text-gray-500">IKD, KK, Akta & Surat Pindah</p>
			</a>
			<!-- Card 2 -->
			<a href="/layanan" class="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
				<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition-transform group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
					<FileBadge class="h-8 w-8" />
				</div>
				<h3 class="mb-2 font-bold text-gray-900 text-lg">Perizinan & Surat</h3>
				<p class="text-sm text-gray-500">IUMK, SKTM, & Izin Keramaian</p>
			</a>
			<!-- Card 3 -->
			<a href="/layanan" class="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
				<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 transition-transform group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white">
					<ShieldPlus class="h-8 w-8" />
				</div>
				<h3 class="mb-2 font-bold text-gray-900 text-lg">Layanan Kesehatan</h3>
				<p class="text-sm text-gray-500">Posyandu, Puskesmas & Ambulans</p>
			</a>
			<!-- Card 4 -->
			<a href="/layanan" class="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
				<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-transform group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
					<MessageSquare class="h-8 w-8" />
				</div>
				<h3 class="mb-2 font-bold text-gray-900 text-lg">Aspirasi & Keluhan</h3>
				<p class="text-sm text-gray-500">Infrastruktur, Sosial & Keamanan</p>
			</a>
		</div>
		
		<div class="text-center pt-6">
			<a href="/layanan" class="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-blue-700 hover:text-blue-700">
				Lihat Semua Layanan
			</a>
		</div>
	</section>

	<!-- 4.5. Galeri Foto Desa -->
	<section use:reveal class="space-y-10">
		<div class="flex flex-col md:flex-row items-end justify-between gap-4">
			<div class="space-y-2">
				<div class="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 uppercase tracking-wider">
					<ImageIcon class="h-4 w-4" />
					<span>Dokumentasi Kegiatan</span>
				</div>
				<h2 class="text-3xl font-bold text-gray-900">Galeri Foto Desa</h2>
				<p class="text-gray-500 max-w-xl">Dokumentasi momen, kegiatan, dan pembangunan di Desa Bunder.</p>
			</div>
			<a
				href="/galeri"
				class="inline-flex items-center font-medium text-blue-700 transition-colors hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg"
			>
				Lihat Semua Foto <ChevronRight class="ml-1 h-4 w-4" />
			</a>
		</div>

		{#if data.galeriList && data.galeriList.length > 0}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{#each data.galeriList as foto}
					<a href="/galeri" class="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-sm border border-gray-100">
						<img src={foto.gambar} alt={foto.judul || 'Galeri Desa'} class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
						<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
						<div class="absolute bottom-4 left-4 right-4 text-white">
							{#if foto.judul}
								<h3 class="text-lg font-bold line-clamp-1">{foto.judul}</h3>
							{/if}
							{#if foto.deskripsi}
								<p class="text-xs text-gray-300 line-clamp-1 mt-0.5">{foto.deskripsi}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
				Belum ada foto kegiatan di galeri.
			</div>
		{/if}
	</section>

	<!-- 5. Berita & Agenda -->
	<section use:reveal class="grid grid-cols-1 gap-12 lg:grid-cols-3">
		<!-- Berita Terkini -->
		<div class="space-y-6 lg:col-span-2">
			<div class="flex items-center justify-between border-b-2 border-gray-100 pb-4">
				<div class="flex items-center gap-3">
					<div class="bg-blue-100 p-2 rounded-lg"><FileText class="h-5 w-5 text-blue-700" /></div>
					<h2 class="text-2xl font-bold text-gray-900">Kabar Desa</h2>
				</div>
			</div>

			<div class="space-y-6">
				{#if data.beritaList.length > 0}
					<!-- Featured News -->
					<a href={`/berita/${data.beritaList[0].slug}`} class="group block bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
						<div class="relative aspect-video overflow-hidden bg-gray-100">
							{#if data.beritaList[0].gambar}
								<img
									src={data.beritaList[0].gambar}
									alt={data.beritaList[0].judul}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							{:else}
								<div class="flex h-full w-full items-center justify-center text-gray-400">
									<FileText class="h-16 w-16" />
								</div>
							{/if}
							<div class="absolute top-4 left-4">
								<span class="rounded-lg bg-blue-700/90 backdrop-blur px-3 py-1 text-xs font-bold text-white shadow-sm">
									Terbaru
								</span>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-700 line-clamp-2">
								{data.beritaList[0].judul}
							</h3>
							<p class="mb-4 line-clamp-2 text-gray-600 text-lg">
								{data.beritaList[0].konten}
							</p>
							<div class="flex items-center gap-2 text-sm font-medium text-gray-500">
								<Calendar class="h-4 w-4" /> {new Date(data.beritaList[0].createdAt).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}
							</div>
						</div>
					</a>

					<div class="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
						{#each data.beritaList.slice(1) as item}
							<!-- Small News -->
							<a href={`/berita/${item.slug}`} class="group flex flex-col gap-3 rounded-2xl border border-gray-100 p-3 hover:bg-gray-50 transition-colors">
								<div class="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 relative">
									{#if item.gambar}
										<img src={item.gambar} alt={item.judul} class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
									{:else}
										<div class="flex h-full w-full items-center justify-center text-gray-400">
											<FileText class="h-6 w-6" />
										</div>
									{/if}
								</div>
								<div>
									<h4 class="mb-1 line-clamp-2 text-base font-bold text-gray-900 group-hover:text-blue-700">
										{item.judul}
									</h4>
									<div class="flex items-center gap-1 text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</div>
								</div>
							</a>
						{/each}
					</div>
				{:else}
					<div class="py-16 text-center text-gray-500 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
						Belum ada berita yang dipublikasikan.
					</div>
				{/if}
			</div>
		</div>

		<!-- Agenda & Pengumuman & Emergency -->
		<div class="space-y-8">
			<!-- Pengumuman Resmi -->
			{#if data.pengumumanList && data.pengumumanList.length > 0}
				<div class="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 shadow-sm">
					<div class="mb-4 flex items-center gap-3 border-b border-amber-200/60 pb-3">
						<div class="bg-amber-500 text-white p-2 rounded-xl shadow-sm"><Megaphone class="h-5 w-5" /></div>
						<h2 class="text-xl font-bold text-amber-950">Pengumuman Resmi</h2>
					</div>
					<div class="space-y-4">
						{#each data.pengumumanList as item}
							<div class="rounded-2xl bg-white p-4 shadow-sm border border-amber-100">
								<h3 class="font-bold text-gray-900 text-base mb-1">{item.judul}</h3>
								<p class="text-xs text-gray-600 line-clamp-3 leading-relaxed">{item.konten}</p>
								<div class="mt-2 text-[10px] font-semibold text-amber-700">
									{new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Agenda Desa -->
			<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
				<div class="mb-6 flex items-center gap-3 border-b-2 border-gray-50 pb-4">
					<div class="bg-orange-100 p-2 rounded-lg"><Calendar class="h-5 w-5 text-orange-600" /></div>
					<h2 class="text-xl font-bold text-gray-900">Agenda Terdekat</h2>
				</div>

				<div class="space-y-4">
					{#each data.agendaList as agenda}
						<div class="group flex gap-4 rounded-2xl border border-transparent p-2 hover:bg-gray-50 transition-colors">
							<div class="flex min-w-[3.5rem] flex-col items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
								<span class="text-lg leading-none font-bold mt-1">{new Date(agenda.tanggalKegiatan).getDate()}</span>
								<span class="mb-1 text-[10px] tracking-wider uppercase opacity-80">{new Date(agenda.tanggalKegiatan).toLocaleDateString('id-ID', {month: 'short'})}</span>
							</div>
							<div class="flex-1 py-1">
								<h4 class="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700">{agenda.judul}</h4>
								<p class="mt-1 flex items-center gap-1 text-xs text-gray-500">
									<MapPin class="h-3 w-3" /> {agenda.lokasi}
								</p>
							</div>
						</div>
					{:else}
						<div class="py-8 text-center text-gray-500 text-sm bg-gray-50 rounded-2xl">
							Belum ada agenda terdekat.
						</div>
					{/each}
				</div>
			</div>

			<!-- Kontak Darurat -->
			<div class="relative overflow-hidden rounded-3xl bg-rose-600 p-6 text-white shadow-lg shadow-rose-200">
				<Siren class="absolute -right-4 -bottom-4 h-32 w-32 text-rose-500 opacity-50" />
				<div class="relative z-10">
					<div class="inline-flex bg-white/20 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">Darurat</div>
					<h3 class="mb-2 text-2xl font-bold">Butuh Bantuan?</h3>
					<p class="mb-6 text-sm text-rose-100">
						Hubungi layanan siaga desa untuk keadaan darurat.
					</p>

					<div class="space-y-3">
						<a href="tel:081234567890" class="flex items-center gap-3 rounded-2xl bg-black/20 p-3 backdrop-blur-sm transition-colors hover:bg-black/30">
							<div class="rounded-xl bg-white text-rose-600 p-2"><Siren class="h-5 w-5" /></div>
							<div>
								<div class="text-xs text-rose-100">Ambulans Desa</div>
								<div class="text-sm font-bold">0812-3456-XXXX</div>
							</div>
						</a>
						<a href="tel:081278901234" class="flex items-center gap-3 rounded-2xl bg-black/20 p-3 backdrop-blur-sm transition-colors hover:bg-black/30">
							<div class="rounded-xl bg-white text-rose-600 p-2"><ShieldPlus class="h-5 w-5" /></div>
							<div>
								<div class="text-xs text-rose-100">Kamtibmas</div>
								<div class="text-sm font-bold">0812-7890-XXXX</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	:global(.reveal) {
		opacity: 0;
		transform: translateY(40px);
		transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
	}
	:global(.reveal.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
