<script lang="ts">
	import { goto } from '$app/navigation';
	import { setContext } from 'svelte';
	import BlogItem from '$lib/components/dashboard/BlogItem.svelte';
	import Sidebar from '$lib/components/ui/Sidebar.svelte';
	import type { Tables } from '$lib/database.types';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const { articles } = $derived(data);

	let loading = $state(false);

	const handleBlogItemClick = async (blogId: string) => {
		const selectedArticle = articles.filter((item) => item.id === blogId);
		loading = true;
		await goto(`/blog/${selectedArticle[0].slug}`);
	};

	afterNavigate(() => {
		setTimeout(() => {
			loading = false;
		}, 200);
	});
</script>

{#if loading}
	<div transition:fade class="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
		<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900"></div>
	</div>
{/if}

<div class="flex flex-col md:flex-row w-full">
	<main class="flex-1">
		<section class="flex flex-col w-full m-4 gap-4">
			{#each articles as article}
				<BlogItem
					title={article.title}
					date={new Date(article.created_at)}
					desc_minified={article.caption}
					handler={() => handleBlogItemClick(article.id)}
				/>
			{/each}
		</section>
	</main>

	<Sidebar blogItems={articles} />
</div>
