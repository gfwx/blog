<script lang="ts">
	import { goto } from '$app/navigation';
	import placeholderImage from '$lib/static/placeholder-img.jpg';

	export let title: string = 'Sample Title';
	export let date: Date = new Date(2023, 4, 4);
	export let desc_minified: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let author: string = 'SK';
	export let thumbnail_url: string = 'https://example.com/thumbnail.jpg';

	// export let id: string;
</script>

<div
	class="flex flex-between w-full items-center hover:cursor-pointer border-[.5px] border-transparent hover:border-base-content"
	onclick={selectArticle}
	onkeydown={(e) => {
		if (e.key === 'Enter') {
			selectArticle();
		}
	}}
	aria-label={title}
	role={'button'}
>
	<div class="flex gap-2 items-center">
		<img src={placeholderImage} width={100} alt="thumbnail" />
		<div class="flex flex-col gap-8">
			<div class="flex flex-col">
				<h2 class="text-lg font-serif text-bold">{title}</h2>
				<p class="text-sm">{desc_minified}</p>
			</div>
			<p class="text-sm">{date.toDateString()}</p>
		</div>
	</div>
</div>
