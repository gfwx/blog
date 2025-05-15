<script lang="ts">
	import { marked } from 'marked';

	export let title: string;
	export let caption: string;
	export let content: string;
	export let last_updated: string | undefined = undefined;
	export let created_at: string;
	export let image_url: string | undefined = undefined;

	const getFullDate = (date: string) => {
		let res = new Date(date);
		return `${res.getDate()}/${res.getUTCMonth() + 1}/${res.getFullYear()}`;
	};
</script>

<main class=" flex w-full justify-center flex-col items-center">
	<section class="flex flex-col gap-2 w-full">
		<h1 class="text-3xl font-bold font-serif">{title}</h1>
		<p class="text-lg">{caption}</p>
		{#if image_url}
			<img src={image_url} alt="" width={800} />
		{/if}
		<i>Last updated: {getFullDate(last_updated ?? created_at)}</i>
	</section>
	<article class="markdown w-full">{@html marked.parse(content)}</article>
</main>

<style global>
</style>
