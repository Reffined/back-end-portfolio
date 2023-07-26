<script lang="ts">
	export let img: string;
	export let name: string;
	export let lastMsg: string;
</script>

<div class="container">
	<img src={img} alt="face" />
	<div class="info">
		<h4>{name}</h4>
		<p>{lastMsg}</p>
	</div>
</div>

<style>
	h4 {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		margin: 0;
		margin-left: 5px;
		margin-top: 5px;
	}

	p {
		color: #4e878a;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		margin: 0;
		padding: 5px;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}

	img {
		max-width: 60px;
		max-height: 60px;
		min-height: 20px;
		min-width: 20px;
		object-fit: cover;
		border-radius: 100%;
		padding: 5px;
	}

	.info {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		background-color: rgba(167, 167, 167, 0.082);
		width: 15vw;
		min-width: 100px;
		min-height: 20px;
		max-height: 60px;
		margin-left: 1vw;
		padding: 5px;
	}

	.container {
		display: flex;
		flex-direction: row;
		margin-left: 5px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
</style>
