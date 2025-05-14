<script lang="ts">
	import placeholderImage from '$lib/static/placeholder-img.jpg';
	import type { MouseEventHandler } from 'svelte/elements';

	export let title: string = 'Sample Title';
	export let date: Date = new Date(2023, 4, 4);
	export let desc_minified: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let handler: MouseEventHandler<EventTarget>;

	// export let id: string;
</script>

<div
	class="flex flex-between w-full items-center hover:cursor-pointer border-[.5px] border-transparent hover:border-base-content p-2 rounded-sm"
	onclick={handler}
	onkeydown={(e) => {
		if (e.key === 'Enter') {
			handler;
		}
	}}
	aria-label={title}
	role={'button'}
>
	<div class="flex gap-9 items-end justify-between">
		<div class="flex flex-col">
			<h3 class="font-serif text-bold">{title}</h3>
			<p class="text-sm">{desc_minified}</p>
		</div>
		<p class="text-sm">{date.toDateString()}</p>
	</div>
</div>
