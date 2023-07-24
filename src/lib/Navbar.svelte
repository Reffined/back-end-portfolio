<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	let scrollY: number;
	let scrollHeight: number;
	let innerH: number;
	let comp: HTMLElement;
	let mounted = false;
	let isFirstLoad = true;
	let isAtTheBottom = false;

	onMount(() => {
		comp = document.getElementById('nav-idle') as HTMLElement;
		mounted = true;
		innerH = Math.round(window.innerHeight);
	});

	if (browser) {
		addEventListener('scroll', () => {
			scrollY = Math.round(window.scrollY);
			scrollHeight = Math.round(document.documentElement.scrollHeight);
		});

		addEventListener('resize', () => {
			innerH = Math.round(window.innerHeight);
		});
	}

	$: if (scrollY < scrollHeight - innerH - 20 && mounted && isFirstLoad && browser) {
		comp.setAttribute('id', 'nav-idle');
		isFirstLoad = false;
	} else if (scrollY >= scrollHeight - innerH - 20 && mounted && !isFirstLoad && browser) {
		comp.setAttribute('id', 'nav');
		isAtTheBottom = true;
	} else if (mounted && !isFirstLoad && isAtTheBottom && browser) {
		comp.setAttribute('id', 'nav-anim');
		isAtTheBottom = false;
	}
</script>

<div id="nav-idle">
	<a href="/">Home</a>
	<a href="/showcase">Showcases</a>
	<h4>Contact</h4>
</div>

<style>
	@keyframes nav-move {
		from {
			top: 20px;
			left: 20px;
		}
		to {
			top: 89%;
			left: 320px;
		}
	}

	@keyframes nav-move-back {
		from {
			top: 89%;
			left: 320px;
		}
		to {
			top: 20px;
			left: 20px;
		}
	}

	:global(#nav) {
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: rgb(60, 110, 113);
		border-radius: 100pt;
		animation: nav-move;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		box-shadow: 2px 2px 10px rgba(60, 110, 113, 0.2);
	}

	:global(#nav-anim) {
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #3c6e71;
		border-radius: 100pt;
		animation: nav-move-back;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		box-shadow: 2px 2px 10px rgba(60, 110, 113, 0.2);
	}
	:global(#nav-idle) {
		position: fixed;
		top: 20px;
		left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #3c6e71;
		border-radius: 100pt;
		box-shadow: 2px 2px 10px rgba(60, 110, 113, 0.2);
	}

	h4 {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		text-align: justify;
		margin: 10pt;
	}

	a {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		font-weight: bold;
		text-align: justify;
		margin: 10pt;
		text-decoration: none;
	}

	a:hover {
		text-shadow: 2px 2px 5px rgb(41, 43, 43);
	}
</style>
