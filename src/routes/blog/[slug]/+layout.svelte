<script lang="ts">
	let { data } = $props();
	let { article } = $derived(data);

	type RenderedArticle = {
		title: string;
		caption: string;
		content: string;
		last_updated?: string;
		image_url?: string;
	};

	const rendered_data: RenderedArticle = JSON.parse(article);
</script>

<main class="mx-8 my-4">
	<h1 class="text-3xl font-bold font-serif">{rendered_data.title}</h1>
	<p class="text-lg">{rendered_data.caption}</p>
	<article>{@html rendered_data.content}</article>
</main>
