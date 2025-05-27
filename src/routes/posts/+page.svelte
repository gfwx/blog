<script lang="ts">
	import BlogItem from '$lib/components/dashboard/BlogItem.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	const { data } = $props();
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
<section class="flex flex-col w-full">
	<div class=" p-4 border-b-base-content border-b-[0.5px] mb-4">
		<h1 class="text-sm font-sans font-bold">SORTED BY LATEST</h1>
	</div>
	{#if articles.length === 0}
		<p class="mx-4">nothin' here to see :-/</p>
	{:else}
		{#each articles as article, idx}
			<div class="mx-4">
				<BlogItem
					title={article.title}
					date={new Date(article.created_at)}
					desc_minified={article.caption}
					handler={() => handleBlogItemClick(article.id)}
					articleCount={idx + 1}
				/>
			</div>
		{/each}
	{/if}
</section>
