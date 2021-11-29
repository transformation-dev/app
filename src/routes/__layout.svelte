<script>
	// import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<!-- <Header /> -->

<nav class="navbar is-fixed-top">
	<div class="navbar-brand">
	  <a class="navbar-item" href="/#/">
		<img src="MatrXCloseWhite.png" alt="MatrX Logo">
	  </a>
	</div>
	<div class="navbar-menu">
		<div class="navbar-start">
		<a class="navbar-item" href="/">Something</a>
		<a class="navbar-item" href="/">Something else</a>
		<!-- {#each Object.entries(routes) as [route, value]}
			{#if value.navbarLabel}
			<a class="navbar-item" use:link class:is-active={$location === route} href={route}>
				{value.userData.navbarLabel}
			</a>
			{/if}
		{/each} -->
		</div>
		<div class="navbar-end">
		<div class="navbar-item">
			<div class="field is-grouped">
			<p class="control">
				<button id="logout" on:click={handleLogout} class="button is-rounded is-small"> 
				<!-- <Icon data={signOut}/> -->
				Logout
				</button>
			</p>
			</div>
		</div>
		</div>
	</div>
</nav>

<div class="slot">
	<slot />
</div>

<style type="text/scss">
	@import '../variables.scss';
	.slot {
		padding-top: $navbar-height;
	}
</style>
