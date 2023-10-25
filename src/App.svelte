<script>
	// @ts-ignore
	const {app, ScriptLanguage, UndoModes, Document, Story, TextFrame} = require("indesign");
	// @ts-ignore
	const {shell} = require('uxp');
	// @ts-ignore
	import {version} from '../static/manifest.json'

	import CheatsheetModal from './components/dialogs/CheatsheetModal.svelte';
	import ConfirmModal from './components/dialogs/ConfirmModal.svelte';

	let confirmModal
	let confirm = _ => {
		confirmModal.show({
			heading: "Are you sure?",
			body: "This action cannot be undone.",
			destructive: true
		});
	}
	let showCheatsheet = false;
</script>

<uxp-panel panelid="magicMarkup">

	<button on:click={confirm}>Cohnfirm?</button>

	<sp-divider></sp-divider>

	<div id="info" class="flex">
		<button class="cheatsheet" on:click={_ => showCheatsheet = true}>Cheatsheet</button>
		<button class="help">Help</button>
		<span data-grow=""> </span>
		<span class="version low-opacity">🌈 {version}</span>
	</div>
</uxp-panel>

<ConfirmModal bind:this={confirmModal}/>
<CheatsheetModal bind:showModal={showCheatsheet} />
