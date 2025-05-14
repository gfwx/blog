<script lang="ts">
	let { data } = $props();
	let { article } = $derived(data);
	import { marked } from 'marked';

	type RenderedArticle = {
		title: string;
		caption: string;
		content: string;
		last_updated?: string;
		created_at: string;
		image_url?: string;
	};

	const rendered_data: RenderedArticle = JSON.parse(article);

	const getFullDate = (date: string) => {
		let res = new Date(date);
		return `${res.getDate()}/${res.getUTCMonth() + 1}/${res.getFullYear()}`;
	};
</script>

<main class="mx-8 my-4">
	<section class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold font-serif">{rendered_data.title}</h1>
		<p class="text-lg">{rendered_data.caption}</p>
		<img src={rendered_data.image_url} alt="Thumbnail" width={800} />
		<i>Last updated: {getFullDate(rendered_data.last_updated ?? rendered_data.created_at)}</i>
	</section>
	<article class="my-8">{@html marked.parse(rendered_data.content)}</article>
</main>

<style>
	h1 {
		font-size: 2rem;
	}
</style>
