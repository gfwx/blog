<script lang="ts">
	let { children } = $props();
	import '../app.css';
	import { app } from '$lib/firebase';
	import { onMount } from 'svelte';
	import Nav from '$lib/components/ui/Nav.svelte';

	onMount(() => {
		console.log(app);
	});
</script>

<Nav />
{@render children()}
