<script lang="ts">
	import { page } from '$app/stores';
	import { Search, ChevronDown } from 'lucide-svelte';

	const links = [
		{ href: '/', label: 'Beranda' },
		{
			label: 'Profil',
			dropdown: [
				{ href: '/profil-desa/sejarah', label: 'Sejarah Desa' },
				{ href: '/profil-desa', label: 'Profil Desa Bunder' },
				{ href: '/profil-desa/peta', label: 'Peta Desa' },
				{ href: '/profil-desa/struktur', label: 'Struktur Pemerintah Desa' },
				{ href: '/profil-desa/visi-misi', label: 'Visi & Misi' }
			]
		},
		{ href: '/statistik', label: 'Statistik' },
		{ href: '/potensi-umkm', label: 'Potensi & UMKM' },
		{ href: '/galeri', label: 'Galeri' },
		{ href: '/layanan', label: 'Layanan' }
	];

	let openDropdown = $state<string | null>(null);

	function toggleDropdown(label: string) {
		openDropdown = openDropdown === label ? null : label;
	}

	function closeDropdown() {
		openDropdown = null;
	}
</script>

<svelte:window onclick={closeDropdown} />

<header class="sticky top-0 z-50 border-b border-gray-100 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 text-xl font-bold text-blue-900">
				<img src="/logo.jpeg" alt="Logo Desa" class="h-10 w-10 object-cover rounded-full border border-blue-100 shadow-sm" />
				<span>Desa Bunder</span>
			</a>

			<!-- Navigation -->
			<nav class="hidden h-full md:flex space-x-8">
				{#each links as link}
					{#if link.dropdown}
						<div class="relative flex h-full items-center">
							<button
								onclick={(e) => { e.stopPropagation(); toggleDropdown(link.label); }}
								class="inline-flex h-full items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors hover:text-gray-900 {openDropdown === link.label ? 'border-blue-700 text-gray-900' : 'border-transparent text-gray-500'}"
							>
								{link.label}
								<ChevronDown class="ml-1 h-4 w-4 transition-transform duration-300 {openDropdown === link.label ? 'rotate-180' : ''}" />
							</button>

							<!-- Dropdown Menu -->
							{#if openDropdown === link.label}
								<div class="absolute left-0 top-full z-50 w-64 translate-y-0 opacity-100 transition-all duration-300">
									<div class="mt-1 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
										{#each link.dropdown as dropItem}
											<a
												href={dropItem.href}
												class="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
												onclick={() => { openDropdown = null; }}
											>
												{dropItem.label}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<a
							href={link.href}
							class="inline-flex h-full items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors {$page.url.pathname === link.href ? 'border-blue-700 text-blue-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
						>
							{link.label}
						</a>
					{/if}
				{/each}
			</nav>

			<!-- Right section -->
			<div class="flex items-center gap-4">
				<!-- Search -->
				<form action="/pencarian" method="GET" class="relative hidden sm:block">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Search class="h-4 w-4 text-gray-400" />
					</div>
					<input
						type="text"
						name="q"
						class="block w-full rounded-full border border-transparent bg-gray-100 py-1.5 pr-3 pl-9 text-sm placeholder-gray-500 transition-colors focus:border-gray-300 focus:bg-white focus:ring-0 focus:outline-none"
						placeholder="Pencarian"
					/>
				</form>

				<!-- Login Button -->
				<a
					href="/login"
					class="inline-flex items-center rounded-full border border-transparent bg-blue-700 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				>
					Masuk
				</a>
			</div>
		</div>
	</div>
</header>
