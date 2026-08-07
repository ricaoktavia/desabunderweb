<script lang="ts">
	import { Target, Flag, CheckCircle2, ChevronRight, Award, Compass, HeartHandshake, Lightbulb } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Visi & Misi - Desa Bunder</title>
</svelte:head>

<div class="relative min-h-screen overflow-hidden bg-gray-50 pb-20">
	<!-- Background Elements -->
	<div class="absolute top-0 w-full h-[500px] bg-gradient-to-b from-blue-900 via-blue-800 to-gray-50"></div>
	<div class="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at center, white 2px, transparent 2px); background-size: 50px 50px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-20 animate-fade-in-up">
			<span class="inline-flex items-center gap-2 rounded-full bg-blue-800/50 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md mb-6 border border-blue-700/50">
				<Compass class="h-4 w-4" /> Arah Pembangunan
			</span>
			<h1 class="text-4xl font-black text-white md:text-6xl tracking-tight drop-shadow-lg">
				Visi & Misi Desa
			</h1>
			<p class="mt-6 text-lg text-blue-100 max-w-2xl mx-auto font-medium">
				Cita-cita dan langkah strategis kami dalam mewujudkan Desa Bunder yang lebih baik, maju, dan sejahtera.
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-12 items-start">
			
			<!-- VISI -->
			<div class="lg:col-span-5 lg:sticky lg:top-32 animate-fade-in-up delay-200">
				<div class="relative group rounded-[2.5rem] bg-white p-10 shadow-2xl transition-all duration-300 hover:shadow-blue-900/10 border border-gray-100 overflow-hidden">
					<div class="absolute -right-20 -top-20 w-48 h-48 bg-blue-50 rounded-full transition-transform duration-700 group-hover:scale-[2]"></div>
					
					<div class="relative z-10 flex flex-col items-center text-center">
						<div class="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/30">
							<Target class="h-12 w-12" />
						</div>
						
						<h2 class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Visi Desa</h2>
						
						<p class="text-2xl font-black text-gray-900 leading-snug md:text-3xl mb-8">
							"{data.profil?.visi || 'Visi Desa Bunder'}"
						</p>
						
						<div class="w-16 h-1.5 bg-blue-600 rounded-full mb-8"></div>
						
						<p class="text-gray-500 leading-relaxed text-sm">
							Visi ini adalah komitmen bersama seluruh elemen masyarakat dan aparatur desa untuk membangun fondasi kemajuan di segala bidang, dari ekonomi hingga sosial budaya.
						</p>
					</div>
				</div>
			</div>

			<!-- MISI -->
			<div class="lg:col-span-7 space-y-6 animate-fade-in-up delay-300">
				<div class="mb-8 flex items-center gap-4">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
						<Flag class="h-6 w-6" />
					</div>
					<div>
						<h2 class="text-3xl font-black text-gray-900">Misi Desa</h2>
						<p class="text-gray-500 mt-1">Langkah strategis mencapai Visi</p>
					</div>
				</div>

				<!-- Misi Items -->
				{#if data.profil?.misi}
					{#each data.profil.misi.split('\n') as misiText, i}
						{#if misiText.trim()}
							<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100/50">
								<div class="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
								<div class="flex items-start gap-6">
									<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
										<CheckCircle2 class="h-6 w-6" />
									</div>
									<div>
										<div class="flex items-center gap-3 mb-2">
											<span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
												{i + 1}
											</span>
											<h3 class="text-xl font-bold text-gray-900">Misi {i + 1}</h3>
										</div>
										<p class="text-gray-600 leading-relaxed pl-9">
											{misiText}
										</p>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{:else}
					<p>Data misi belum ditambahkan.</p>
				{/if}
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
	.delay-300 { animation-delay: 300ms; }

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
