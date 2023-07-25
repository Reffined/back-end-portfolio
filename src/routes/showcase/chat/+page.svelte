<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import face from '$lib/images/face.png';
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
	}

	.chat-window {
		display: flex;
		flex-direction: column;
	}
</style>
