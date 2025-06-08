<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/ui/Nav.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { jwtDecode } from 'jwt-decode';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	let user = $state(null);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();
		console.log(user);
		invalidate('supabase:auth');
	};
</script>

<Nav {user} {handleLogout} />
{@render children()}
