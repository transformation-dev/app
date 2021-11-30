<script>
	// import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import {mdiLogout} from '@mdi/js';
	import Icon from '$lib/Icon.svelte';

	function handleLogout() {
		console.log('logging out')
	}
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
		<a class="navbar-item" href="/">Home</a>
		<a class="navbar-item" href="/play">Play</a>
		</div>
		<div class="navbar-end">
		<div class="navbar-item">
			<div class="field is-grouped">
			<p class="control">
				<button id="logout" on:click={handleLogout} class="button is-rounded is-small"> 
					<span class="icon-text">
						<Icon size="is-large" path={mdiLogout} />
						<span>Logout</span>
					</span>
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
