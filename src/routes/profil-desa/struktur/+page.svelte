<script lang="ts">
	import {
		Download,
		ChevronRight,
		Users,
		User,
		ShieldCheck,
		UserCog,
		Briefcase,
		Mail,
		Image as ImageIcon
	} from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>Pemerintahan - Desa Bunder</title>
</svelte:head>

<div class="bg-blue-900 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span
			class="mb-4 inline-block rounded-full bg-blue-800 px-3 py-1 text-sm font-semibold text-blue-200"
			>Struktur Organisasi</span
		>
		<h1 class="mb-4 text-4xl font-extrabold md:text-5xl">Pemerintahan Desa Bunder</h1>
		<p class="mx-auto max-w-2xl text-lg text-blue-200">
			Melayani dengan integritas, transparansi, dan inovasi demi mewujudkan masyarakat Desa Bunder
			yang mandiri dan sejahtera.
		</p>
	</div>
</div>

<div class="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
	<!-- Struktur Perangkat Desa -->
	<section>
		<div class="mb-8 flex items-end justify-between">
			<div>
				<h2 class="text-2xl font-bold text-gray-900">Struktur Perangkat Desa</h2>
				<p class="mt-1 text-gray-500">Amanah dalam menjalankan roda pemerintahan desa.</p>
			</div>

		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.aparaturList as aparatur}
				<div class="flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
					{#if aparatur.foto}
						<img src={aparatur.foto} alt={aparatur.nama} class="h-24 w-24 rounded-full object-cover shadow-sm mb-4 border-4 border-blue-50" />
					{:else}
						<div class="h-24 w-24 rounded-full bg-blue-50 text-blue-200 flex items-center justify-center mb-4">
							<User class="h-10 w-10" />
						</div>
					{/if}
					<h3 class="text-lg font-bold text-gray-900">{aparatur.nama}</h3>
					<p class="text-sm font-medium text-blue-600 mt-1">{aparatur.jabatan}</p>
				</div>
			{:else}
				<div class="col-span-full py-10 text-center text-gray-400">
					<User class="mx-auto h-10 w-10 mb-2 opacity-30" />
					<p>Belum ada data aparatur.</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Lembaga Kemasyarakatan -->
	<section class="rounded-3xl border border-gray-100 bg-gray-50 p-8 lg:p-12">
		<div class="mx-auto mb-12 max-w-2xl text-center">
			<h2 class="mb-3 text-2xl font-bold text-gray-900">Lembaga Kemasyarakatan</h2>
			<p class="text-gray-600 mb-2">
				Sinergi antara pemerintah desa dan masyarakat melalui wadah organisasi yang aktif dan
				inklusif.
			</p>
			<p class="text-xs font-semibold text-blue-600 uppercase tracking-widest">
				Berdasarkan Peraturan Menteri No 20 Tahun 2018
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<!-- BPD -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<Users class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">BPD</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Suryo</p>
				<p class="text-sm text-gray-600">
					Badan Permusyawaratan Desa sebagai mitra pengawasan kinerja pemerintah desa.
				</p>
			</div>

			<!-- LPMD -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<UserCog class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">LPMD</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Moh Supriyadi</p>
				<p class="text-sm text-gray-600">
					Lembaga Pemberdayaan Masyarakat Desa dalam merencanakan pembangunan.
				</p>
			</div>

			<!-- PKK -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<Users class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">PKK</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Faridatul Jannah</p>
				<p class="text-sm text-gray-600">
					Pemberdayaan Kesejahteraan Keluarga untuk ketahanan ekonomi & kesehatan.
				</p>
			</div>

			<!-- Karang Taruna -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<ShieldCheck class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">Karang Taruna</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Ikmal Farodis</p>
				<p class="text-sm text-gray-600">
					Wadah kreativitas dan inovasi bagi pemuda Desa Bunder dalam berbagai bidang.
				</p>
			</div>

			<!-- Dasawisma -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<Users class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">Dasawisma</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Ibu Kades (HJ. Iswan Yanti)</p>
				<p class="text-sm text-gray-600">
					Program kelompok ibu-ibu untuk membina kesejahteraan keluarga di tingkat rukun tetangga.
				</p>
			</div>

			<!-- Linmas -->
			<div class="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
					<ShieldCheck class="h-6 w-6" />
				</div>
				<h3 class="mb-1 text-xl font-bold text-gray-900">Linmas</h3>
				<p class="mb-4 text-sm font-bold text-blue-700">Ach Nuryadi</p>
				<p class="text-sm text-gray-600">
					Pelindungan Masyarakat, garda terdepan dalam menjaga keamanan dan ketertiban desa.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="relative overflow-hidden rounded-3xl bg-blue-900 p-8 text-white lg:p-12">
		<div class="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
			<div class="max-w-xl">
				<h2 class="mb-3 text-3xl font-bold">Ingin mengetahui lebih lanjut?</h2>
				<p class="text-blue-200">
					Kami terbuka untuk segala masukan dan pertanyaan terkait transparansi tata kelola Desa
					Bunder.
				</p>
			</div>
			<a
				href="/layanan"
				class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition-colors hover:bg-gray-100"
			>
				<Mail class="h-5 w-5" /> Hubungi Kami
			</a>
		</div>

		<!-- Decor -->
		<div
			class="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-blue-800 opacity-50 blur-3xl"
		></div>
	</section>
</div>
