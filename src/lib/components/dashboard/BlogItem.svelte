<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let title: string = 'Sample Title';
	export let date: Date = new Date(2023, 4, 4);
	export let desc_minified: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let handler: MouseEventHandler<EventTarget>;
	export let articleCount: number = 1;
</script>

<div
	class="group hover hover:text-primary flex flex-between w-full items-center hover:cursor-pointer border-[.5px] border-transparent hover:border-primary p-4 rounded-sm gap-4"
	onclick={handler}
	onkeydown={(e) => {
		if (e.key === 'Enter') {
			handler;
		}
	}}
	aria-label={title}
	role={'button'}
>
	<div
		class="box group-hover:bg-primary bg-base-content w-10 h-10 flex items-center justify-center"
	>
		<p class="font-bold font-serif text-base-100">{articleCount}</p>
	</div>
	<div class="flex gap-16 items-end flex-1">
		<div class="flex flex-col gap-1">
			<h3 class="font-serif font-bold text-xl">{title}</h3>
			<p class="text-sm">{desc_minified}</p>
		</div>
		<p class="text-sm">{date.toDateString()}</p>
	</div>
</div>

<style>
	.hover {
		transition: all 100ms ease-in-out;
	}
</style>
