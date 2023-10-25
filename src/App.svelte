<script>
	import Cheatsheet from './components/dialogs/Cheatsheet.svelte';

	let cheatsheetOpen = false;
	let click = () => {
		cheatsheetOpen = true;
		console.log('click')
	}
</script>

<uxp-panel panelid="magicMarkup">
	<p>Fucking something</p>
	<sp-button on:click={click}>Cheatsheet</sp-button>
</uxp-panel>

<Cheatsheet bind:open={cheatsheetOpen} />
