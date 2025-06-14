<script lang="ts">
	import { goto } from '$app/navigation';
	import BlogItem from '$lib/components/dashboard/BlogItem.svelte';
	import Sidebar from '$lib/components/ui/Sidebar.svelte';
	import Article from '$lib/article/Article.svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const { articles } = $derived(data);
	const { featured } = $derived(data);

	let loading = $state(false);

	const handleBlogItemClick = async (blogId: string) => {
		const selectedArticle = articles.filter((item) => item.id === blogId);
		loading = true;
		goto(`/posts/${selectedArticle[0].slug}`);
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
		<section class="flex flex-col w-full">
			<section class="mx-4 md:mt-8 mt-4">
				{#if featured}
					<Article
						title={featured.title}
						caption={featured.caption}
						content={featured.content}
						created_at={featured.created_at}
						last_updated={featured.updated_at}
						image_url={featured.image_url}
					/>
				{:else}
					<!-- Handle the case where featured is null or undefined -->
					<p class="mx-4">No featured article yet.</p>
				{/if}
			</section>

			<div class="divider m-0 p-0">
				<h1 class="mx-4 text-sm font-sans font-bold">MORE ARTICLES</h1>
				<div class="divider m-0 p-0"></div>
			</div>
			{#if articles.slice(1).length === 0}
				<p class="mx-4">nothin' here to see :-/</p>
			{:else}
				{#each articles.slice(1) as article, idx}
					<div class="flex flex-col gap-2">
						<BlogItem
							title={article.title}
							date={new Date(article.created_at)}
							desc_minified={article.caption}
							handler={() => handleBlogItemClick(article.id)}
							articleCount={idx + 2}
						/>

						<div class="divider py-0 my-0 mr-2"></div>
					</div>
				{/each}
			{/if}
		</section>
	</main>

	<Sidebar blogItems={articles} />
</div>
