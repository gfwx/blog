<script>
	export let handler = () => {};
	export let text = '';
	export let style = '';

	let btnStyle = 'btn btn-primary ' + style;
</script>

<button class={btnStyle} onclick={handler}>
	{text}
</button>

<style>
</style>
