<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import ProgressBar from '$lib/article/ProgressBar.svelte';

	let { data } = $props();
	let { article } = $derived(data);

	const rendered_data = JSON.parse(article);
</script>

<div class="block p-4">
	<a href="../" class="underline hover:text-blue-600 w-fit">Back</a>
</div>
<main class="my-2 flex flex-col gap-4 items-center">
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
