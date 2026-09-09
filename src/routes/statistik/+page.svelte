<script lang="ts">
	import { Users, User, FileBarChart } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	let totalStr = $derived(data.statistikList?.find((s: any) => s.key === 'total_penduduk')?.value || '2.955 Jiwa');
	let maleStr = $derived(data.statistikList?.find((s: any) => s.key === 'laki_laki')?.value || '1.450 Jiwa');
	let femaleStr = $derived(data.statistikList?.find((s: any) => s.key === 'perempuan')?.value || '1.505 Jiwa');

	function parseNum(val: string): number {
		const clean = val.replace(/[^0-9]/g, '');
		return parseInt(clean, 10) || 1;
	}

	let totalNum = $derived(parseNum(totalStr));
	let maleNum = $derived(parseNum(maleStr));
	let femaleNum = $derived(parseNum(femaleStr));

	let malePercentage = $derived(((maleNum / (maleNum + femaleNum || totalNum || 1)) * 100).toFixed(1));
	let femalePercentage = $derived(((femaleNum / (maleNum + femaleNum || totalNum || 1)) * 100).toFixed(1));
</script>

<svelte:head>
	<title>Statistik - Desa Bunder</title>
</svelte:head>

<div class="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header Banner -->
	<div
		class="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-xl md:flex-row lg:p-12"
	>
		<div class="relative z-10 max-w-2xl">
			<span class="inline-flex items-center gap-2 rounded-full bg-blue-600/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md mb-4 border border-blue-400/30">
				Data Kependudukan
			</span>
			<h1 class="mb-4 text-3xl font-black md:text-5xl tracking-tight">Transparansi Data & Statistik Desa Bunder</h1>
			<p class="text-blue-100 text-base md:text-lg leading-relaxed font-light">
				Informasi demografi jumlah penduduk Desa Bunder yang akurat dan terbarui.
			</p>
		</div>

		<div class="relative z-10 hidden md:block">
			<div
				class="flex h-36 w-36 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"
			>
				<FileBarChart class="h-16 w-16 text-white" />
			</div>
		</div>

		<!-- Decor Blobs -->
		<div
			class="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
		></div>
		<div
			class="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl"
		></div>
	</div>

	<!-- Summary Cards -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<!-- Total Penduduk -->
		<div
			class="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150"></div>
			<div class="relative z-10">
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
					<Users class="h-7 w-7" />
				</div>
				<div class="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
					Total Penduduk
				</div>
				<div class="mb-3 text-5xl font-black text-gray-900 tracking-tight">{totalStr}</div>
				<p class="text-sm text-gray-500 font-medium">Jiwa terdaftar di Desa Bunder</p>
			</div>
		</div>

		<!-- Laki-laki -->
		<div
			class="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150"></div>
			<div class="relative z-10">
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 shadow-inner">
					<User class="h-7 w-7" />
				</div>
				<div class="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
					Laki-Laki
				</div>
				<div class="mb-4 text-5xl font-black text-blue-700 tracking-tight">{maleStr}</div>
				
				<div class="space-y-2">
					<div class="flex justify-between text-xs font-bold text-gray-500">
						<span>Proporsi Laki-Laki</span>
						<span class="text-blue-700">{malePercentage}%</span>
					</div>
					<div class="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
						<div class="h-full rounded-full bg-blue-600 transition-all duration-1000" style="width: {malePercentage}%"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Perempuan -->
		<div
			class="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-rose-50 transition-transform duration-500 group-hover:scale-150"></div>
			<div class="relative z-10">
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shadow-inner">
					<User class="h-7 w-7" />
				</div>
				<div class="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
					Perempuan
				</div>
				<div class="mb-4 text-5xl font-black text-rose-600 tracking-tight">{femaleStr}</div>
				
				<div class="space-y-2">
					<div class="flex justify-between text-xs font-bold text-gray-500">
						<span>Proporsi Perempuan</span>
						<span class="text-rose-600">{femalePercentage}%</span>
					</div>
					<div class="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
						<div class="h-full rounded-full bg-rose-500 transition-all duration-1000" style="width: {femalePercentage}%"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Visual Demografi Ratio -->
	<div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
		<h3 class="mb-4 text-xl font-bold text-gray-900">Perbandingan Jenis Kelamin</h3>
		<p class="mb-6 text-sm text-gray-500">Visualisasi rasio komposisi penduduk laki-laki dan perempuan di Desa Bunder.</p>
		
		<div class="h-6 w-full rounded-full bg-gray-100 overflow-hidden flex shadow-inner">
			<div class="h-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center transition-all duration-1000" style="width: {malePercentage}%">
				{malePercentage}% Laki-laki
			</div>
			<div class="h-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center transition-all duration-1000" style="width: {femalePercentage}%">
				{femalePercentage}% Perempuan
			</div>
		</div>

		<div class="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 text-center">
			<div class="p-4 rounded-2xl bg-blue-50/50">
				<p class="text-xs font-bold text-blue-600 uppercase">Laki-Laki</p>
				<p class="mt-1 text-2xl font-black text-blue-900">{maleStr}</p>
			</div>
			<div class="p-4 rounded-2xl bg-rose-50/50">
				<p class="text-xs font-bold text-rose-600 uppercase">Perempuan</p>
				<p class="mt-1 text-2xl font-black text-rose-900">{femaleStr}</p>
			</div>
		</div>
	</div>
</div>
