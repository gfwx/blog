<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let active = $state(page.route.id ?? '/');

	$effect(() => {
		active = page.route.id ?? '/';
	});

	const handleClick = (state: string) => {
		active = state;
		goto(state);
	};

	const { handleLogout, user } = $props();
</script>

<div class="font-serif navbar justify-between bg-base-100 border-b-[.5px] px-4">
	<a class="font-bold text-md" href="/"> gfwx</a>
	<div class="flex-none">
		<ul class="tabs tabs-border" role="tablist">
			{#if user}
				<button onclick={handleLogout} class="btn btn-warning">Log out</button>
			{/if}
			<li>
				<button
					onclick={() => handleClick('/')}
					role="tab"
					class="tab tab-active"
					class:tab-active={active.startsWith('/') &&
						!active.startsWith('/about') &&
						!active.startsWith('/posts')}>home</button
				>
			</li>
			<li>
				<button
					onclick={() => handleClick('/posts')}
					role="tab"
					class="tab tab-active"
					class:tab-active={active.startsWith('/posts')}>blog</button
				>
			</li>
			<li>
				<button
					onclick={() => handleClick('/about')}
					role="tab"
					class="tab"
					class:tab-active={active.startsWith('/about')}>whoami</button
				>
			</li>
		</ul>
	</div>
</div>

<style>
</style>
