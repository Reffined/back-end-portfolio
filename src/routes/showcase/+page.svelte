<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import chat from '$lib/images/chat.png';
</script>

<Navbar />

<div class="layout">
	<div class="column">
		<img src={chat} alt="chat" />
	</div>
	<div class="column">
		<img src={chat} alt="chat" />
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: row;
	}

	img {
		max-width: 80%;
		object-fit: cover;
		border-radius: 15px;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
