<script>
	import { onMount } from 'svelte';

	let scrollPercentage = 0;

	onMount(() => {
		const handleScroll = () => {
			const scrollHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;
			if (scrollHeight > 0) {
				scrollPercentage = (document.documentElement.scrollTop / scrollHeight) * 100;
			} else {
				scrollPercentage = 100; // If no scrollbar, consider it 100%
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="progress-bar-container">
	<div class="progress-bar bg-primary" style={`width: ${scrollPercentage}%;`}></div>
</div>

<style>
	.progress-bar-container {
		position: fixed;
		bottom: 0; /* Changed from top: 0 */
		left: 0;
		width: 100%;
		height: 4px; /* Adjust height as needed */
		z-index: 1000; /* Ensure it stays on top */
	}

	.progress-bar {
		height: 100%;
		width: 0%;
		transition: width 0.1s ease-out;
	}
</style>
