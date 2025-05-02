<script lang="ts">
	import { goto } from '$app/navigation';
	let active = $state('');
	const handleClick = (state: string) => {
		active = state;
		goto(`/${state}`);
	};
</script>

<div class="navbar bg-base-100 shadow-sm">
	<a class="flex-1" href="/">gfwx</a>
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
					class:tab-active={active === 'about'}>about</button
				>
			</li>
		</ul>
	</div>
</div>
