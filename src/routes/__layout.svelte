<script context="module">
	import Debug from "debug"
	const debug = Debug("matrx:__layout")

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		debug('connecting')
		let res = await fetch('/connect.json', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				username: 'test@transformation.dev'
			})
		})

		if (res.ok) {
			const session = await res.json()
			debug("Session: ", session)
			debug('connected')
			return  {
				props: {
					session
				}
			}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
	}
</script>

<script>
	import '../app.scss'

	import { page } from '$app/stores'

	import { mdiLogout } from '@mdi/js'

	import Icon from '$lib/Icon.svelte'

	async function handleLogout() {
		debug('logging out')
		let res = await fetch('/logout.json', {
			method: 'POST',
			credentials: 'include',
		})
		if (res.ok) {
			const session = await res.json()
			debug("Session: ", session)
		}
	}

</script>



<svelte:head>
	<title>MatrX - {$page.path === '/' ? 'Home' : $page.path.slice(1, 2).toUpperCase() + $page.path.slice(2)}</title>
</svelte:head>

<!-- <Header /> -->

<nav class="navbar is-fixed-top">
	<div class="navbar-brand">
		<a class="navbar-item" href="/#/">
			<img src="MatrXCloseWhite.png" alt="MatrX Logo" />
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
