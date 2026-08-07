<script lang="ts">
	import { Phone, MapPin } from 'lucide-svelte';
</script>

<footer class="bg-blue-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Logo and About -->
			<div class="col-span-1">
				<a href="/" class="mb-4 flex flex-col items-start gap-3 text-xl font-bold">
					<img src="/logo.jpeg" alt="Logo Desa Bunder" class="h-16 w-16 object-cover rounded-full shadow-lg border-2 border-white/20" />
					<span>Desa Bunder</span>
				</a>
				<p class="mb-6 max-w-sm text-sm leading-relaxed text-blue-200">
					Portal digital resmi Pemerintah Desa Bunder. Memberikan layanan publik terbaik dan
					informasi terkini untuk masyarakat.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-blue-300 uppercase">
					Tautan Cepat
				</h3>
				<ul class="space-y-3">
					<li>
						<a href="/profil-desa" class="text-sm text-blue-100 transition-colors hover:text-white"
							>Profil Desa</a
						>
					</li>
					<li>
						<a href="/statistik" class="text-sm text-blue-100 transition-colors hover:text-white"
							>Data Statistik</a
						>
					</li>
					<li>
						<a href="/potensi-umkm" class="text-sm text-blue-100 transition-colors hover:text-white">Potensi & UMKM</a
						>
					</li>
					<li>
						<a href="/layanan" class="text-sm text-blue-100 transition-colors hover:text-white"
							>Layanan Publik</a
						>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-blue-300 uppercase">
					Kontak Kami
				</h3>
				<ul class="space-y-3 text-sm text-blue-100">
					<li class="flex items-start gap-3">
						<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
						<span>Kantor Desa Bunder<br />Kecamatan Pademawu, Pamekasan</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-4 w-4 shrink-0 text-blue-300" />
						<a href="tel:085196157757" class="transition-colors hover:text-white">085196157757</a>
					</li>
				</ul>
			</div>

            <!-- Social Media -->
            <div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-blue-300 uppercase">
					Sosial Media
				</h3>
				<ul class="space-y-3 text-sm text-blue-100">
					<li class="flex items-center gap-3">
						<!-- Instagram SVG -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-blue-300">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
						</svg>
						<a href="https://instagram.com/desa.bunder" target="_blank" rel="noreferrer" class="transition-colors hover:text-white">@desa.bunder</a>
					</li>
					<li class="flex items-center gap-3">
						<!-- TikTok SVG -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-blue-300">
							<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
						</svg>
						<a href="https://tiktok.com/@pemdes_bunder" target="_blank" rel="noreferrer" class="transition-colors hover:text-white">@pemdes_bunder</a>
					</li>
					<li class="flex items-center gap-3">
						<!-- Facebook SVG -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-blue-300">
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
						</svg>
						<a href="https://facebook.com/perpusdesmelati" target="_blank" rel="noreferrer" class="transition-colors hover:text-white">@perpusdesmelati Desa Bunder</a>
					</li>
					<li class="flex items-center gap-3">
						<!-- YouTube SVG -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 text-blue-300">
							<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
							<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
						</svg>
						<a href="https://youtube.com/@pemerintahdesabunder" target="_blank" rel="noreferrer" class="transition-colors hover:text-white">@pemerintahdesabunder</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 flex flex-col items-center justify-between border-t border-blue-800 pt-8 md:flex-row">
			<p class="text-sm text-blue-300">
				&copy; {new Date().getFullYear()} Pemerintah Desa Bunder. Seluruh Hak Cipta Dilindungi.
			</p>
		</div>
	</div>
</footer>
