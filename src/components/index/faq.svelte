<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	export let question: string;
	export let answer: string;

	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleDropdown();
		}
	}
</script>

<div class="faq-container">
	<div
		class:open={isOpen}
		class="question"
		role="button"
		tabindex="0"
		on:click={toggleDropdown}
		on:keydown={handleKeyDown}
	>
		<h2>{question}</h2>
	</div>
	<div class="answer {isOpen ? 'open' : ''}">
		<p>{answer}</p>
	</div>
</div>

<style>
	.faq-container {
		width: min(100%, 760px);
		margin: 8px auto;
		font-family: 'Exo 2 Variable';
		text-align: left;
	}

	.question {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		justify-content: space-between;
		padding: 12px 16px;
		background: #000000;
		color: #ffffff;
		border-radius: 6px;
		font-size: 0.95rem;
		transition: background 180ms ease;
	}

	.question:hover,
	.question:focus-visible {
		background: #2a2a2a;
	}

	.question::after {
		content: '+';
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1;
	}

	.question.open::after {
		content: '-';
	}

	.question h2 {
		margin: 0;
		font-size: inherit;
		font-weight: 600;
	}

	.answer {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition:
			max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.25s ease,
			padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
			border-color 0.4s ease;
		padding: 0 16px;
		background: #ffffff;
		color: #000000;
		border: 1px solid transparent;
		border-top: 0;
		border-radius: 0 0 6px 6px;
		margin-top: -1px;
		text-align: left;
		font-size: 0.95rem;
	}

	.answer.open {
		max-height: 200px; /* Adjust based on content */
		opacity: 1;
		padding: 8px 16px;
		border-color: #d7d7d7;
	}

	.answer p {
		margin: 0;
		line-height: 1.45;
	}
</style>
