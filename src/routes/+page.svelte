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
		goto(`/blog/${selectedArticle[0].slug}`);
	};

	afterNavigate(() => {
		setTimeout(() => {
			loading = false;
		}, 200);
	});
</script>

{#if loading}
	<div in:fade out:fade class="fixed inset-0 flex items-center justify-center bg-base-200 z-50">
		<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-base-content"></div>
	</div>
{/if}

<div class="flex flex-col md:flex-row w-full">
	<main class="flex-1">
		<section class="flex flex-col w-full m-4 gap-4">
			<h1 class="text-2xl font-serif font-bold">latest (and greatest) hits</h1>
			{#each articles as article}
				<div class="flex flex-col gap-2">
					<BlogItem
						title={article.title}
						date={new Date(article.created_at)}
						desc_minified={article.caption}
						handler={() => handleBlogItemClick(article.id)}
					/>

					<div class="divider py-0 my-0"></div>
				</div>
			{/each}
		</section>
	</main>

	<Sidebar blogItems={articles} />
</div>
