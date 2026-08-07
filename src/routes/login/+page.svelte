<script lang="ts">
	import { enhance } from '$app/forms';
	import { Landmark, ArrowRight, Loader2, AlertCircle } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import { fade, slide } from 'svelte/transition';

	let { form } = $props<{ form: ActionData }>();
	
	let loading = $state(false);
</script>

<svelte:head>
	<title>Login Admin - Desa Bunder</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
	<!-- Background Design -->
	<div class="absolute inset-0 bg-blue-900 overflow-hidden z-0">
		<div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
		<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
	</div>

	<div class="w-full max-w-md space-y-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 relative z-10" in:fade={{ duration: 600, delay: 200 }}>
		<div>
			<a href="/" class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
				<Landmark class="h-8 w-8 text-blue-700" />
			</a>
			<h2 class="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
				Login Admin
			</h2>
			<p class="mt-2 text-center text-sm text-blue-200">
				Sistem Informasi Pemerintahan Desa Bunder
			</p>
		</div>

		{#if form?.error}
			<div class="rounded-xl bg-red-500/10 border border-red-500/20 p-4" in:slide>
				<div class="flex items-center gap-3">
					<AlertCircle class="h-5 w-5 text-red-200" />
					<h3 class="text-sm font-medium text-red-100">{form.error}</h3>
				</div>
			</div>
		{/if}

		<form class="mt-8 space-y-6" method="POST" use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}>
			<div class="space-y-4">
				<div>
					<label for="username" class="block text-sm font-medium text-blue-100">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						required
						class="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-blue-200 backdrop-blur-sm transition-all focus:border-white focus:bg-white/20 focus:ring-0 sm:text-sm"
						placeholder="Masukkan username"
					/>
				</div>
				<div>
					<label for="password" class="block text-sm font-medium text-blue-100">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="mt-1 block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-blue-200 backdrop-blur-sm transition-all focus:border-white focus:bg-white/20 focus:ring-0 sm:text-sm"
						placeholder="••••••••"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative flex w-full justify-center rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-bold text-blue-900 transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{#if loading}
						<Loader2 class="h-5 w-5 animate-spin" />
					{:else}
						Masuk
						<span class="absolute inset-y-0 right-0 flex items-center pr-3 transition-transform group-hover:translate-x-1">
							<ArrowRight class="h-5 w-5 text-blue-700" />
						</span>
					{/if}
				</button>
			</div>
			
			<div class="text-center">
				<a href="/" class="text-sm font-medium text-blue-200 hover:text-white transition-colors">
					&larr; Kembali ke Beranda
				</a>
			</div>
		</form>
	</div>
</div>
