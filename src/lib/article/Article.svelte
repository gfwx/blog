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

<main class="px-8 flex w-full max-w-3xl justify-center flex-col items-center md:gap-8 gap-4">
	<section class="flex flex-col gap-2 w-full">
		<div>
			<h1 class="text-3xl font-bold font-serif">{title}</h1>
			<b class="block">posted: {getFullDate(created_at ?? created_at)}</b>
			{#if last_updated}
				<i class="block">updated: {getFullDate(last_updated ?? created_at)}</i>
			{/if}
		</div>
		{#if image_url}
			<img src={image_url} alt="" class="w-full" />
		{/if}
		<div class="flex">
			<blockquote class="blockquote">{caption}</blockquote>
		</div>
	</section>
	<article class="markdown w-full pb-8">{@html marked.parse(content)}</article>
</main>
