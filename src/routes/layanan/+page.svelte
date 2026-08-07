<script lang="ts">
	import {
		FileText,
		FileBadge,
		ShieldPlus,
		MessageSquare,
		ChevronRight,
		Phone,
		Clock,
		Download,
		MapPin,
		ScanLine
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Layanan Publik - Desa Bunder</title>
</svelte:head>

<div class="bg-gray-50 py-12 md:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 max-w-3xl">
			<h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
				Pusat Layanan Publik Digital
			</h1>
			<p class="text-lg text-gray-600">
				Akses berbagai layanan administrasi, kesehatan, dan pengaduan masyarakat secara cepat,
				transparan, dan terintegrasi untuk warga Desa Bunder.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Left Column (Services) -->
			<div class="space-y-8 lg:col-span-2">
				<!-- Kategori Layanan -->
				<section>
					<div class="mb-6 flex items-end justify-between">
						<h2 class="text-2xl font-bold text-gray-900">Kategori Layanan</h2>
						<a
							href="#"
							class="hidden items-center text-sm font-medium text-blue-700 transition-colors hover:text-blue-800 sm:flex"
						>
							Lihat Semua <ChevronRight class="ml-1 h-4 w-4" />
						</a>
					</div>

					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<!-- Kependudukan -->
						<a
							href="https://wa.me/6285196157757?text=Halo%20Admin%20Desa%20Bunder,%20saya%20ingin%20mengurus%20dokumen%20kependudukan."
							target="_blank"
							class="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
						>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white"
							>
								<FileText class="h-6 w-6" />
							</div>
							<h3 class="mb-2 text-lg font-bold text-gray-900">Kependudukan</h3>
							<p class="mb-4 text-sm text-gray-500 leading-relaxed">
								Melayani Aktivasi IKD, KK, Akta Kelahiran & KIA, Akta Kematian, serta Surat Pindah. Hubungi admin via WhatsApp untuk menyiapkan berkas sebelum datang ke Balai Desa.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-md bg-green-50 text-green-700 border border-green-200 px-2 py-1 text-xs font-semibold flex items-center gap-1">
									<MessageSquare class="h-3 w-3" /> Chat Admin
								</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">IKD & KK</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Akta & KIA</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Surat Pindah</span>
							</div>
						</a>

						<!-- Perizinan -->
						<a
							href="#"
							class="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
						>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white"
							>
								<FileBadge class="h-6 w-6" />
							</div>
							<h3 class="mb-2 text-lg font-bold text-gray-900">Perizinan & Surat</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-500">
								Izin Usaha Mikro, Surat Keterangan Tidak Mampu, dan Izin Keramaian.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">IUMK</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">SKTM</span>
							</div>
						</a>

						<!-- Kesehatan -->
						<a
							href="#"
							class="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
						>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white"
							>
								<ShieldPlus class="h-6 w-6" />
							</div>
							<h3 class="mb-2 text-lg font-bold text-gray-900">Layanan Kesehatan</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-500">
								Informasi Jadwal Posyandu, Puskesmas, dan Ambulans Desa.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Posyandu</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Vaksinasi</span
								>
							</div>
						</a>

						<!-- Aspirasi -->
						<a
							href="#"
							class="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
						>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white"
							>
								<MessageSquare class="h-6 w-6" />
							</div>
							<h3 class="mb-2 text-lg font-bold text-gray-900">Aspirasi & Keluhan</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-500">
								Saluran pengaduan infrastruktur, sosial, dan keamanan lingkungan.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Lapor!</span>
								<span class="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">Saran</span>
							</div>
						</a>
					</div>
				</section>


			</div>

			<!-- Right Column (Sidebar) -->
			<div class="space-y-6">
				<!-- Emergency Contacts -->
				<div class="rounded-2xl border border-rose-100 bg-rose-50 p-6 shadow-sm">
					<div class="mb-6 flex items-center gap-2 text-rose-700">
						<ShieldPlus class="h-5 w-5" />
						<h3 class="text-lg font-bold">Kontak Darurat</h3>
					</div>

					<div class="space-y-4">
						<a
							href="tel:110"
							class="group flex items-center justify-between rounded-xl border border-rose-50 bg-white p-4 shadow-sm transition-colors hover:border-rose-200"
						>
							<div>
								<div class="mb-0.5 text-xs font-semibold tracking-wider text-rose-600">
									POLISI BUNDER
								</div>
								<div class="font-bold text-gray-900">110 / 021-12345</div>
							</div>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 transition-colors group-hover:bg-rose-200"
							>
								<Phone class="h-4 w-4 text-rose-700" />
							</div>
						</a>

						<a
							href="tel:113"
							class="group flex items-center justify-between rounded-xl border border-rose-50 bg-white p-4 shadow-sm transition-colors hover:border-rose-200"
						>
							<div>
								<div class="mb-0.5 text-xs font-semibold tracking-wider text-rose-600">
									PEMADAM KEBAKARAN
								</div>
								<div class="font-bold text-gray-900">113</div>
							</div>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 transition-colors group-hover:bg-rose-200"
							>
								<Phone class="h-4 w-4 text-rose-700" />
							</div>
						</a>

						<a
							href="tel:08129999888"
							class="group flex items-center justify-between rounded-xl border border-rose-50 bg-white p-4 shadow-sm transition-colors hover:border-rose-200"
						>
							<div>
								<div class="mb-0.5 text-xs font-semibold tracking-wider text-rose-600">
									AMBULANS DESA
								</div>
								<div class="font-bold text-gray-900">0812-9999-888</div>
							</div>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 transition-colors group-hover:bg-rose-200"
							>
								<Phone class="h-4 w-4 text-rose-700" />
							</div>
						</a>
					</div>
				</div>

				<!-- Office Hours -->
				<div class="group relative h-48 overflow-hidden rounded-2xl shadow-sm">
					<img
						src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
						alt="Kantor Desa"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
					<div class="absolute bottom-0 left-0 w-full p-5 text-white">
						<h3 class="mb-2 flex items-center gap-2 text-lg font-bold">
							<Clock class="h-5 w-5 text-white/80" /> Jam Operasional Kantor
						</h3>
						<div class="space-y-1 text-sm text-gray-200">
							<p>Senin - Jumat: 08:00 - 15:30 WIB</p>
							<p>Sabtu: 08:00 - 12:00 WIB</p>
						</div>
					</div>
				</div>


			</div>
		</div>
	</div>
</div>
