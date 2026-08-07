<script lang="ts">
	import { Calendar, User, ArrowLeft, Share2 } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>{data.article.judul} - Desa Bunder</title>
</svelte:head>

<div class="bg-blue-900 pt-16 pb-12 text-white">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<a href="/" class="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
			<ArrowLeft class="w-4 h-4 mr-2" /> Kembali ke Beranda
		</a>
		
		<div class="mb-4 flex flex-wrap items-center gap-4 text-sm text-blue-200">
			<span class="rounded-full bg-blue-800 px-3 py-1 font-semibold text-white">Kabar Desa</span>
			<span class="flex items-center gap-1.5"><Calendar class="h-4 w-4" /> {new Date(data.article.createdAt).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
			<span class="flex items-center gap-1.5"><User class="h-4 w-4" /> Ditulis oleh: {data.article.authorName}</span>
		</div>
		
		<h1 class="text-3xl leading-tight font-extrabold md:text-5xl lg:leading-tight">
			{data.article.judul}
		</h1>
	</div>
</div>

<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-20">
	<div class="rounded-2xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
		{#if data.article.gambar}
			<div class="mb-8 overflow-hidden rounded-xl bg-gray-100 aspect-video">
				<img src={data.article.gambar} alt={data.article.judul} class="w-full h-full object-cover" />
			</div>
		{/if}
		
		<div class="prose prose-lg prose-blue max-w-none text-gray-700">
			<!-- Since the content is plain text from textarea, we format it with white-space pre-wrap -->
			<div class="whitespace-pre-wrap leading-relaxed">
				{data.article.konten}
			</div>
		</div>
		
		<div class="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
			<div class="text-sm font-medium text-gray-500">
				Bagikan berita ini:
			</div>
			<div class="flex gap-2">
				<button class="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
					<Share2 class="w-5 h-5" />
				</button>
			</div>
		</div>
	</div>
</div>
