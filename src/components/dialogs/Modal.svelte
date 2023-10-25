<script>
	export let maxWidth = 500;
	export let maxHeight = 300;
	export let showModal;
	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	style="max-width: {maxWidth}px; max-height: {maxHeight}px;"
>
	<form action="" method="dialog">
		<slot/>
	</form>
</dialog>

<style scoped>
	dialog {
		padding: 0 !important;
	}
	dialog > form {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		padding: 34px;
	}
</style>
