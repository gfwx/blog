<script lang="ts">
	import placeholderImage from '$lib/static/placeholder-img.jpg';

	export const title: string = 'Sample Title';
	export const date: Date = new Date(2023, 4, 4);
	export const desc_minified: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export const author: string = 'SK';
	export const thumbnail_url: string = 'https://example.com/thumbnail.jpg';

	// export let id: string;
</script>

<div class="flex flex-between w-full items-center">
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
