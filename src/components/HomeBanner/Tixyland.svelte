<script>
	// Inspired by https://svelte.dev/repl/4d50a7de7ec0432e8fb6af4d517f3222?version=3.29.4
	import { onMount } from 'svelte';

	const size = 16;

	let t;
	onMount(() => {
		let id = requestAnimationFrame(update);

		function update(time) {
			id = requestAnimationFrame(update);
			
			t = time / 1000;
		}
		
		return () => cancelAnimationFrame(id);
	})

	let transform;
	let value = 'Math.sin(t-Math.sqrt((x-7.5)**2+(y-6)**2))';
	$: {
		try {
			transform = new Function('t', 'i', 'x', 'y', `
			try { 
				return ${value}
			} catch(error){
				return 0;
			}`);
		} catch(error) {
			transform = () => 0;
		}
	}
	
	function styleFromValue(value) {
		value = Math.max(Math.min(value || 0, 1), -1);
		return `transform: scale(${value}); background-color: ${value < 0 ? 'red': 'white'};`;
	}
</script>

<div class="container" style="--size: {size}">
	{#each { length: size } as _, y}
		{#each { length: size } as _, x}
			<div
				class="item"
			  style="{styleFromValue(transform(t, y * size + x, x, y))}" />
		{/each}
	{/each}
</div>



<style>
	.container {
		--dimension: min(calc(100vmin / var(--size)), 20px);
		display: grid;
		grid-template-columns: repeat(var(--size), var(--dimension));
		grid-template-rows: repeat(var(--size), var(--dimension));
		width: calc(var(--dimension) * var(--size));
		margin: auto;
	}
	.item {
		border-radius: 50%;
	}
	:global(body) {
		background: #111;
		padding: 0;
		margin: 0;
	}
	
</style>