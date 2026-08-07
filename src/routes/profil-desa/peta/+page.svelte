<script lang="ts">
	import { MapPin, Navigation, Info, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Peta Desa - Desa Bunder</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<!-- Hero Section -->
	<div class="relative bg-blue-900 py-16 text-white overflow-hidden">
		<div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
		<div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<span class="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-800 px-4 py-1.5 text-sm font-semibold text-blue-100 border border-blue-700">
				<MapPin class="h-4 w-4" /> Peta Wilayah
			</span>
			<h1 class="mb-4 text-4xl font-black md:text-5xl drop-shadow-md">Peta Desa Bunder</h1>
			<p class="mx-auto max-w-2xl text-lg text-blue-200">
				Kecamatan Pademawu, Kabupaten Pamekasan, Jawa Timur. Temukan lokasi strategis dan batas wilayah desa kami.
			</p>
		</div>
	</div>

	<!-- Main Content -->
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 -mt-8 relative z-10">
		<div class="grid gap-8 lg:grid-cols-3">
			
			<!-- Informasi Sidebar -->
			<div class="lg:col-span-1 space-y-6">
				<div class="rounded-3xl bg-white p-8 shadow-xl border border-gray-100 animate-fade-in-up">
					<div class="flex items-center gap-3 mb-6">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<Info class="h-6 w-6" />
						</div>
						<h2 class="text-2xl font-bold text-gray-900">Info Lokasi</h2>
					</div>
					
					<div class="space-y-6">
						<div>
							<p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Negara</p>
							<p class="text-lg font-bold text-gray-900">Indonesia</p>
						</div>
						<div>
							<p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Provinsi</p>
							<p class="text-lg font-bold text-gray-900">Jawa Timur</p>
						</div>
						<div>
							<p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Kabupaten</p>
							<p class="text-lg font-bold text-gray-900">Pamekasan</p>
						</div>
						<div>
							<p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Kecamatan</p>
							<p class="text-lg font-bold text-gray-900">Pademawu</p>
						</div>
						<div>
							<p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Kode Pos</p>
							<p class="text-lg font-bold text-gray-900">69323</p>
						</div>
					</div>

					<div class="mt-8 pt-8 border-t border-gray-100">
						<a 
							href="https://maps.google.com/?q=Desa+Bunder+Pademawu+Pamekasan" 
							target="_blank" 
							rel="noopener noreferrer"
							class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 shadow-md hover:shadow-lg"
						>
							<ExternalLink class="h-4 w-4" /> Buka di Google Maps
						</a>
					</div>
				</div>
			</div>

			<!-- Peta Interaktif -->
			<div class="lg:col-span-2 animate-fade-in-up delay-200">
				<div class="h-[600px] w-full overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 relative group">
					<!-- Note: Menggunakan embed Google Maps standar. Ganti src dengan link embed yang spesifik untuk Desa Bunder jika ada -->
					<iframe 
						title="Peta Desa Bunder"
						src="https://maps.google.com/maps?q=Desa+Bunder,+Pademawu,+Pamekasan,+Jawa+Timur&t=&z=14&ie=UTF8&iwloc=&output=embed" 
						class="h-full w-full border-0" 
						allowfullscreen={true} 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					
					<div class="absolute bottom-6 right-6 flex gap-2">
						<div class="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-blue-900 shadow-lg backdrop-blur-md">
							<Navigation class="h-4 w-4" /> Pademawu, Pamekasan
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>

<style>
	.animate-fade-in-up {
		opacity: 0;
		animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	
	.delay-200 { animation-delay: 200ms; }

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
