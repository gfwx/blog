<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import ProgressBar from '$lib/article/ProgressBar.svelte';
	let { data } = $props();
	let { article } = $derived(data);
	import type { RenderedArticle } from '$lib/database.types.js';

	const rendered_data: RenderedArticle = JSON.parse(article);
</script>

<a href="../">Go back</a>
<main class="ml-36 my-4">
	<Article
		title={rendered_data.title}
		caption={rendered_data.caption}
		content={rendered_data.content}
		created_at={rendered_data.created_at}
		last_updated={rendered_data.last_updated}
		image_url={rendered_data.image_url}
	/>
</main>
<ProgressBar />

<style global>
</style>
