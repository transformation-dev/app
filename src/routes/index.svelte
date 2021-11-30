<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="p-6 has-text-centered has-background-black">
	<img class="block" src="matrxlogowhite.png" alt="MatrX" />

	<h2 class="block">
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<!-- <Counter /> -->
</section>
