<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta content="Programming Portfolio" name="description" />
</svelte:head>

<main class="grid-container">
	<div class="flex-mid">
		<h3>Welcome to My Portfolio Showcase!</h3>
		<h4>Unlock the World of Endless Possibilities</h4>
		<p class="intro-text">
			Are you in search of a dynamic, versatile, and forward-thinking programmer? Look no further!
			My name is Alireza Karampour, and I am thrilled to present my comprehensive portfolio that
			embodies my passion for programming and innovation.
		</p>
		<h4>Who Am I?</h4>
		<p class="intro-text">
			I am a Back-End developer with a strong proficiency in Node.js and Golang, and a flair for
			creating captivating games. My journey in the world of programming began with an insatiable
			curiosity, and since then, I have explored a myriad of projects and honed my skills to
			perfection.
		</p>
		<h4>Game Development: Where Creativity Meets Technology</h4>
		<p class="intro-text">
			Apart from my expertise in Back-End development, I have also immersed myself in the world of
			game development. I find tremendous joy in crafting immersive and entertaining gaming
			experiences that transport players to new realms of excitement. Whether it's designing
			interactive gameplay, optimizing performance, or conjuring stunning visuals, game development
			allows me to combine my creativity with technical prowess.
		</p>
		<h4>Why Choose Me?</h4>
		<p class="intro-text">
			As you delve into my portfolio, you will discover a diverse collection of projects, ranging
			from sophisticated backend systems to captivating game titles. My dedication to delivering
			top-notch performance and cutting-edge technology sets me apart from the rest. I approach each
			project with a keen eye for detail, striving to create experiences that leave a lasting impact
			on players and users alike.
		</p>
		<h4>The World of Socket Programming</h4>
		<p>
			Moreover, I boast a deep understanding of socket programming, allowing me to develop
			real-time, interactive, and immersive applications. Whether it's powering multiplayer
			functionality in games or creating engaging communication platforms, I can harness the power
			of sockets to elevate user experiences.
		</p>
		<h4>Constantly Evolving</h4>
		<p>
			In this ever-evolving digital landscape, I am committed to staying at the forefront of
			industry trends. I am continuously learning and exploring new technologies to ensure that my
			skillset remains relevant and my projects are future-proof.
		</p>
		<h4>Collaborate With Me</h4>
		<p>
			Whether you are a fellow developer seeking collaboration, a business looking to revamp your
			backend infrastructure, or an individual with an ambitious project in mind, I am excited to
			connect and explore the endless possibilities we can achieve together. If you are interested
			in game development, let's discuss how I can create engaging and addictive experiences for
			your target audience.
			<br />
			<br />
			So, what are you waiting for? Let's embark on an exhilarating journey of innovation, transformation,
			and thrilling gameplay. Feel free to browse through my portfolio, and don't hesitate to get in
			touch—I can't wait to be a part of your next project!
			<br />
			<br />
			Thank you for visiting, and I look forward to connecting with you soon!
			<br />
			<br />
			Sincerely,
			<br />
			<br />
			Alireza
		</p>
	</div>
	<Navbar />
	<div id="right" />
	<div id="left" />
</main>

<style>
	h4:hover {
		text-shadow: rgba(60, 110, 113, 0.55) 1px 1px 7px;
	}

	h4 {
		color: #3c6e71;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		text-align: center;
		padding: 1%;
		margin: 0;
	}

	h3 {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		text-align: center;
	}

	p {
		color: white;
		font-family: 'Noto Sans Cypro Minoan', sans-serif;
		text-align: justify;
		padding: 2%;
	}

	.flex-mid {
		display: flex;
		flex-direction: column;
		grid-area: main;
	}

	#right {
		grid-area: right;
		width: 200px;
	}
	#left {
		grid-area: left;
		width: 200px;
	}
	.grid-container {
		display: grid;
		grid-template-areas: 'left main main right';
	}
</style>
