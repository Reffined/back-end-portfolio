<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import face from '$lib/images/face.png';
	import { browser } from '$app/environment';

	if (browser) {
		const ws = new WebSocket('ws://localhost:8080');
		ws.onopen = function () {
			console.log('connected');
		};

		ws.onmessage = function (msg) {
			console.log(msg);
		};
	}
</script>

<div class="container">
	<div class="contacts-container">
		<Contact img={face} name="Lea" lastMsg="hey what u doing ali?" />
	</div>
	<div class="chat-window" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
	}

	.contacts-container {
		display: flex;
		flex-direction: column;
		padding: 10px 10px;

		height: 100vh;
	}

	.chat-window {
		display: flex;
		flex-direction: column;
	}
</style>
