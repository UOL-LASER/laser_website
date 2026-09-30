<!--Peter Hamilton 21/2/24-->
<script>
	import { onMount } from 'svelte';
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	import instagram from '$lib/assets/icons/instagram.svg';
	import email from '$lib/assets/icons/email.svg';
	import linkedin from '$lib/assets/icons/linkedin.svg';
	import discord from '$lib/assets/icons/discord.svg';

	import Privacypolicy from './footer/privacypolicy.svelte';

	let showPrivacyPolicy = false;

	onMount(() => {
		showPrivacyPolicy = false;
	});

	function openPrivacyPolicy() {
		showPrivacyPolicy = true;
	}

	function handlePrivacyPolicyClose() {
		showPrivacyPolicy = false;
	}

	const currentYear = new Date().getFullYear();
</script>

<div class="footer">
	<div class="footer-icons">
		<a href="https://www.instagram.com/laser_uol/"><img src={instagram} alt="Instagram" /></a>
		<a href="https://www.linkedin.com/company/laser-liverpool/"
			><img src={linkedin} alt="LinkedIn" /></a
		>
		<a href="mailto:laser@liverpool.ac.uk"><img src={email} alt="Email" /></a>
		
		<a href="https://discord.gg/8RZZe7E6FS"><img src={discord} alt="Discord" /></a>
	</div>
	<div class="footer-links">
		<a href="https://github.com/UOL-LASER">GitHub</a>
		<a style="cursor: pointer;" on:click={openPrivacyPolicy}>LASER TOS</a>
	</div>
	<p>&copy; LASER {currentYear}</p>
	<p2>Numqam Solum Volare</p2>
</div>

<Privacypolicy show={showPrivacyPolicy} on:close={handlePrivacyPolicyClose}></Privacypolicy>

<style>
	.footer {
		background: #111111;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 1vh;
		margin: 0;
		max-width: 100%;
		border-top: 1px solid rgb(255, 255, 255);
		height: auto;
		z-index: 999;
	}

	.footer p {
		margin: 0;
		font-family: 'Orbitron Variable', sans-serif;
		padding: 1vh;
		font-size: 18px;
	}

	.footer p2 {
		margin: 0;
		font-family: 'Exo 2 Variable', sans-serif;
		padding: 1vh;
		font-size: 16px;
		font-style: italic;
	}

	.footer-icons {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 50%;
		padding: 2vh;
	}

	.footer-icons a {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		text-decoration: none;
	}

	.footer-icons img {
		width: 100%;
		max-width: 4vh;
		height: auto;
		margin: 0 2vw;
		filter: invert(1);
		transition: filter 0.3s ease;
	}

	.footer-icons img:hover {
		filter: invert(0);
	}

	.footer-icons a:not(:last-child)::after {
		content: '';
		border-right: 1px solid white;
		height: 80%;
		position: absolute;
		right: 0;
		top: 10%;
	}

	.footer-links {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 50%;
		padding: 2vh;
	}

	.footer-links a {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		text-decoration: none;
		transition: color 0.3s ease;
		font-family: 'Orbitron Variable', sans-serif;
		color: white;
	}

	.footer-links a:hover {
		color: #58a6ff;
	}

	.footer-links a:not(:last-child)::after {
		content: '';
		border-right: 1px solid white;
		height: 80%;
		position: absolute;
		right: 0;
		top: 10%;
	}

	@media (max-width: 768px) {
		.footer-icons {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			width: 100%;
			padding: 2vh;
		}
		.footer-links {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			width: 100%;
			padding: 2vh;
		}
	}
</style>
