<script lang="ts">
	import { goto } from '$app/navigation';
	let active = $state('');
	const handleClick = (state: string) => {
		active = state;
		goto(`/${state}`);
	};
</script>

<div class="navbar bg-base-100 border-b-[.5px] px-4">
	<a class="flex-1 font-serif font-bold text-md" href="/">
		Echoes<span class="flicker">_</span>
	</a>
	<div class="flex-none">
		<ul class="tabs tabs-border" role="tablist">
			<li>
				<button
					onclick={() => handleClick('')}
					role="tab"
					class="tab tab-active"
					class:tab-active={active === ''}>blog</button
				>
			</li>
			<li>
				<button
					onclick={() => handleClick('about')}
					role="tab"
					class="tab"
					class:tab-active={active === 'about'}>whoami</button
				>
			</li>
		</ul>
	</div>
</div>

<style>
	.flicker {
		animation: flicker 1s infinite;
	}

	@keyframes flicker {
		0% {
			opacity: 1;
		}

		49% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
