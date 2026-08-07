<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if $page.url.pathname.startsWith('/admin') || $page.url.pathname === '/login'}
	{@render children()}
{:else}
	<div class="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900">
		<Navbar />

		<main class="flex-grow">
			{@render children()}
		</main>

		<Footer />
	</div>
{/if}
