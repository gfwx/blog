<script lang="ts">
	import BlogItem from '$lib/components/dashboard/BlogItem.svelte';
	import Sidebar from '$lib/components/ui/Sidebar.svelte';
	import type { Tables } from '$lib/database.types';
	import dummyData from '$lib/dummy.json';

	type Article = Tables<'articles'>;

	let data: Article[] = dummyData;
</script>

<div class="flex flex-col md:flex-row w-full">
	<main class="flex-1">
		<section class="flex flex-col w-full m-4 gap-6">
			{#each dummyData as article}
				<BlogItem
					title={article.title}
					date={new Date(article.created_at)}
					desc_minified={article.caption}
					author={article.author}
				/>
			{/each}
		</section>
	</main>

	<Sidebar blogItems={dummyData} />
</div>
