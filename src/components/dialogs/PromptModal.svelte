<script>
	import Modal from "./Modal.svelte";

	let showModal;
	let headingContent = "Are you sure?";
	let bodyContent = "This action cannot be undone.";
	let isDestructive = false;

	export function show({heading, body, destructive = false}) {
		headingContent = heading;
		bodyContent = body;
		isDestructive = destructive;
		showModal = true;
	}
</script>

<Modal bind:showModal>
	<sp-heading size="s">{headingContent}</sp-heading>
	<sp-body>{bodyContent}</sp-body>
	<!-- svelte-ignore a11y-autofocus -->
	<input type="text" id="prompt-input" autofocus>
	<footer class="flex flex-gap flex-end">
		<sp-button variant="primary" action="cancel">No</sp-button>
		<sp-button variant="{isDestructive ? 'warning' : 'cta'}" action="confirm">Yes</sp-button>
	</footer>
</Modal>
