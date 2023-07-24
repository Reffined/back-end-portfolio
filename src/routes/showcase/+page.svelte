<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import ShowcasePreview from '$lib/ShowcasePreview.svelte';
	import chat from '$lib/images/chat.png';
	import threejs from '$lib/images/threeJs.png';
</script>

<Navbar />

<div class="layout">
	<div class="column">
		<ShowcasePreview
			src={threejs}
			alt="3d app"
			text="this is a simple 3d app built with Three js"
			href="/three"
		/>
	</div>
	<div class="column">
		<ShowcasePreview src={chat} alt="chat" text="this is a simple chat app built with WS" href="" />
	</div>
	<div class="column">
		<ShowcasePreview src={chat} alt="chat" text="this is a simple chat app built with WS" href="" />
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: row;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
</style>
