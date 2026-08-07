<script lang="ts">
	import { page } from '$app/stores';
	import { Landmark, LayoutDashboard, FileText, Megaphone, Calendar, Store, Image, LogOut, Menu, X, Users, BarChart3, Award } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
	
	let sidebarOpen = $state(false);

	const navigation = [
		{ name: 'Beranda', href: '/admin', icon: LayoutDashboard },
		{ name: 'Penghargaan', href: '/admin/penghargaan', icon: Award },
		{ name: 'Struktur Aparatur', href: '/admin/aparatur', icon: Users },
		{ name: 'Statistik', href: '/admin/statistik', icon: BarChart3 },
		{ name: 'Berita', href: '/admin/berita', icon: FileText },
		{ name: 'Pengumuman', href: '/admin/pengumuman', icon: Megaphone },
		{ name: 'Agenda', href: '/admin/agenda', icon: Calendar },
		{ name: 'UMKM', href: '/admin/umkm', icon: Store },
		{ name: 'Galeri', href: '/admin/galeri', icon: Image },
	];
</script>

<svelte:head>
	<title>Panel Admin - Desa Bunder</title>
</svelte:head>

<div class="flex h-screen overflow-hidden bg-gray-50">
	<!-- Mobile sidebar backdrop -->
	{#if sidebarOpen}
		<div class="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm lg:hidden" transition:fade={{ duration: 200 }} onclick={() => sidebarOpen = false}></div>
	{/if}

	<!-- Sidebar -->
	<aside class={`fixed inset-y-0 left-0 z-50 w-72 bg-blue-900 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
		<div class="flex h-20 items-center justify-between px-6 border-b border-blue-800">
			<a href="/admin" class="flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
					<Landmark class="h-6 w-6" />
				</div>
				<span class="text-xl font-bold tracking-tight">Admin Desa</span>
			</a>
			<button class="lg:hidden text-blue-200 hover:text-white" onclick={() => sidebarOpen = false}>
				<X class="h-6 w-6" />
			</button>
		</div>

		<nav class="p-4 space-y-1 overflow-y-auto h-[calc(100vh-5rem)]">
			<div class="px-3 py-2 mb-2">
				<p class="text-xs font-semibold uppercase tracking-wider text-blue-300">Menu Utama</p>
			</div>
			
			{#each navigation as item}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					class={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
						isActive
							? 'bg-blue-800 text-white shadow-sm'
							: 'text-blue-100 hover:bg-blue-800/50 hover:text-white'
					}`}
				>
					<item.icon class={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-blue-300 group-hover:text-white'}`} />
					{item.name}
				</a>
			{/each}

			<div class="mt-8 px-3 py-2">
				<p class="text-xs font-semibold uppercase tracking-wider text-blue-300">Akun</p>
			</div>
			
			<form action="/admin/logout" method="POST">
				<button
					type="submit"
					class="w-full group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-200 transition-all hover:bg-red-500/10 hover:text-red-100"
				>
					<LogOut class="h-5 w-5 flex-shrink-0" />
					Keluar
				</button>
			</form>
		</nav>
	</aside>

	<!-- Main content -->
	<div class="flex flex-1 flex-col overflow-hidden">
		<!-- Header -->
		<header class="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md sm:gap-6 sm:px-6 lg:px-8">
			<button class="lg:hidden text-gray-500 hover:text-gray-700" onclick={() => sidebarOpen = true}>
				<Menu class="h-6 w-6" />
			</button>
			<div class="flex flex-1 items-center justify-end">
				<div class="flex items-center gap-3">
					<span class="text-sm font-medium text-gray-700">Halo, Admin</span>
					<div class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200">
						A
					</div>
				</div>
			</div>
		</header>

		<!-- Main page content -->
		<main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
			{@render children()}
		</main>
	</div>
</div>
