<script lang="ts">
	import unityRiseLogo from '$lib/assets/UR_Logo_Eye.png';
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';
</script>

<svelte:head>
	<title>Competitions | LASER</title>
	<meta name="description" content="Explore LASER's rocketry, rover and CubeSat projects." />
</svelte:head>

<div class="body">
	<header class="page-header">
		<p>LASER competitions</p>
		<h1>Build for orbit.</h1>
		<span>Three teams. One student-led space organisation.</span>
	</header>

	<main>
		<section class="project-section rocketry" aria-labelledby="rocketry-title">
			<div class="section-number">01 / 03</div>
			<div class="section-content">
				<div class="section-heading">
					<p class="eyebrow">Rocketry</p>
					<h2 id="rocketry-title">Unity Rise</h2>
					<p class="subtitle">The University of Liverpool rocket team</p>
				</div>
				<div class="section-details">
					<img src={unityRiseLogo} alt="Unity Rise University of Liverpool Rocket Team logo" />
					<div>
						<p>Unity Rise designs, builds and launches student-scale rockets through hands-on work in structures, propulsion, avionics and recovery.</p>
						<p>We compete in the UKSEDS National Rocketry Championship and EXO Mach-X.</p>
						<a href="https://unityriseuol.co.uk/" target="_blank" rel="noreferrer">Visit the Unity Rise website <span aria-hidden="true">↗</span></a>
					</div>
				</div>
				<div class="photo-gallery" aria-label="Rocketry photo gallery">
					<div class="photo-space">Rocketry photo 1</div>
					<div class="photo-space">Rocketry photo 2</div>
					<div class="photo-space">Rocketry photo 3</div>
				</div>
			</div>
		</section>

		<section class="project-section rover" aria-labelledby="rover-title">
			<div class="section-number">02 / 03</div>
			<div class="section-content">
				<div class="section-heading">
					<p class="eyebrow">Rover</p>
					<h2 id="rover-title">Rover</h2>
					<p class="subtitle">Exploration on four wheels</p>
				</div>
				<div class="section-details">
					<div class="photo-space">Photo space</div>
					<p>This page is reserved for information about the LASER rover project, its mission, competition and team.</p>
				</div>
			</div>
		</section>

		<section class="project-section cubesat" aria-labelledby="cubesat-title">
			<div class="section-number">03 / 03</div>
			<div class="section-content">
				<div class="section-heading">
					<p class="eyebrow">CubeSat</p>
					<h2 id="cubesat-title">CubeSat</h2>
					<p class="subtitle">Small spacecraft, ambitious missions</p>
				</div>
				<div class="section-details">
					<div class="photo-space">Photo space</div>
					<p>This page is reserved for information about the LASER CubeSat project, its payload, systems and future missions.</p>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	:global(*) { box-sizing: border-box; }
	.body { background: #fff; color: #111; font-family: 'Exo 2 Variable', sans-serif; }
	.page-header { padding: 130px 24px 110px; color: #fff; text-align: center; background: url('/src/lib/assets/background-2.jpg') center 35% / cover no-repeat; }
	.page-header p, .eyebrow, .section-number { margin: 0; color: #58a6ff; font-family: 'Orbitron Variable', sans-serif; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; }
	.page-header h1 { margin: 18px 0 12px; font-family: 'Orbitron Variable', sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); }
	.page-header span { font-size: 1.1rem; }
	.project-section { display: grid; grid-template-columns: minmax(110px, 1fr) minmax(0, 950px) minmax(24px, 1fr); gap: 24px; padding: 90px 24px; }
	.project-section:nth-child(even) { background: #f1f1f1; }
	.section-number { grid-column: 1; color: #777; padding-top: 8px; }
	.section-content { grid-column: 2; }
	.section-heading { border-bottom: 2px solid #111; padding-bottom: 28px; }
	.section-heading h2 { margin: 10px 0 4px; font-family: 'Orbitron Variable', sans-serif; font-size: clamp(2rem, 5vw, 4rem); }
	.subtitle { margin: 0; font-size: 1.2rem; }
	.section-details { display: grid; grid-template-columns: minmax(220px, .8fr) 1fr; align-items: center; gap: 60px; padding-top: 38px; }
	.section-details img { width: min(240px, 100%); justify-self: center; }
	.section-details p { margin: 0 0 18px; font-size: 1.1rem; line-height: 1.7; }
	.section-details a { display: inline-block; margin-top: 8px; padding: 12px 16px; color: #fff; background: #111; text-decoration: none; }
	.section-details a:hover, .section-details a:focus-visible { background: #58a6ff; }
	.photo-space { display: grid; place-items: center; min-height: 260px; border: 2px dashed #999; background: #fff; color: #777; }
	.photo-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; padding-top: 38px; }
	.photo-gallery .photo-space { min-height: 180px; }
	@media (max-width: 700px) {
		.page-header { padding: 110px 24px 80px; }
		.project-section { display: block; padding: 64px 24px; }
		.section-number { margin-bottom: 28px; }
		.section-details { grid-template-columns: 1fr; gap: 30px; }
		.section-details img { width: 180px; }
		.photo-gallery { grid-template-columns: 1fr; }
	}
</style>
