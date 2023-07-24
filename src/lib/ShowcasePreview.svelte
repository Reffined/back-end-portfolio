<script lang="ts">
	export let src: string;
	export let text: string;
	export let alt: string;
	export let href: string;
</script>

<div class="container">
	<a {href} target="_blank">
		<img {src} {alt} />
	</a>
	<p>{text}</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 100px 0px;
	}

	a {
		text-align: center;
	}

	p {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		text-align: center;
		padding: 2%;
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.342);
	}
	img {
		max-width: 60%;
		object-fit: cover;
		border-radius: 15px;
		transition-duration: 0.5s;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.158);
	}
	img:hover {
		scale: 2;
		rotate: 5deg;
	}
</style>
