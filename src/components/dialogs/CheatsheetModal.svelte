<script>
	export let showModal;
	import Modal from "./Modal.svelte";
</script>

<Modal bind:showModal maxWidth={1200} maxHeight={800}>
	<header class="flex" style="align-items: center;">
		<sp-heading data-grow>🌈 Magic Markup Cheatsheet</sp-heading>
		<!-- svelte-ignore a11y-autofocus -->
		<button type="submit" autofocus>Close</button>
	</header>
	<sp-divider size="medium"></sp-divider>
	<sp-body>
		<div class="flex">
			<sp-heading size="m" class="flex">Replace Markers List</sp-heading>
			<sp-heading size="xs"><span class="font-normal">Examples shown for configuration: open with <code>[</code> and close with <code>]</code></span></sp-heading>
		</div>
		<div class="flex flex-thirds flex-wrap flex-align-start">
			<template id="cheatsheet-marker-template">
				<div>
					<sp-heading size="xs" class="marker-name"></sp-heading>
					<sp-body size="m" class="marker-description"></sp-body>
				</div>
			</template>
		</div>
		<sp-divider size="small" style="margin-top: 17px;"></sp-divider>
		<div class="flex flex-thirds flex-align-start flex-wrap">
			<div>
				<sp-heading size="m">Paragraph styles</sp-heading>
				<div class="example flex flex-gap flex-align-start">
					<div data-grow>
						<sp-heading size="xs">Config</sp-heading>
						<code data-s><p>
							# : Header 1<br>
							## : Header 2<br>
							- : UList<br>
							raw:\d+\. : OList<br>
							 
						</p></code>
					</div>
					<div data-grow>
						<sp-heading size="xs">Matches</sp-heading>
						<code data-s><p>
							# Headline<br>
							## Headline<br>
							- Item<br>
							1. Item<br>
							2. Item
						</p></code>
					</div>
				</div>
				<sp-body size="m">
					<p>Paragraph style patterns must be located at the start of the paragraph. They are defined with exactly one pattern, and style name is trimmed of white space. Use prefix <code data-s>raw:</code> for access to raw GREP</p>
				</sp-body>
			</div>
			<div>
				<sp-heading size="m">Character styles</sp-heading>
				<div class="example flex flex-gap flex-align-start">
					<div data-grow>
						<sp-heading size="xs">Config</sp-heading>
						<code data-s><p>
							_: Underline<br>
							_b_:_e_: Important<br>
							raw:[_-⎺]&lbrace;1,3&rbrace;: Steps<br>
							 <br>
							 <br>
							raw:a+:b+: Why<br>
							 
						</p></code>
					</div>
					<div data-grow>
						<sp-heading size="xs">Matches</sp-heading>
						<code data-s><p>
							_Underlined_<br>
							_b_This_e_<br>
							_-⎺Staircase⎺-_<br>
							⎺-_to_-⎺<br>
							_-⎺Heaven⎺-_<br>
							aDONTb<br>
							aaaDO THISbbb
						</p></code>
					</div>
				</div>
				<sp-body size="m">
					<p>Character patterns have start and end, and these can be either the same or different. Similarly to Paragraph Styles, they support <code data-s>raw:</code> prefix.</p>
				</sp-body>
			</div>
			<div>
				<sp-heading size="m">Replace markers</sp-heading>
				<sp-heading size="xs">Usage with config</sp-heading>
				<code data-s class="example"><p>
					Same character: | and | → |rit|<br>
					Different:      &gt; and &lt; → &gt;rit&lt;<br>
					Open only:      * → *rit<br>
					Close only:     !! → rit!!
				</p></code>
				<sp-body size="m">
					<p>Markers are a small selection of characters that aren't easy to type on a keyboard, or are hard to keep when pasting, and are useful for my usecases. If you're missing one, contact me.</p>
				</sp-body>
			</div>
			<div>
				<sp-heading size="m">Collapse newlines</sp-heading>
				<sp-body size="m">
					<p>Collapses multiple consecutive newlines into a single one. Useful when you're managing paragraph spacing through styles, rather than empty paragraphs.</p>
				</sp-body>
			</div>
			<div>
				<sp-heading size="m">Convert Markdown links</sp-heading>
				<sp-body size="m">
					<p>Converts links in format <code data-s>[the text of hyperlink](http://example.com)</code> to proper InDesign hyperlinks.</p>
					<p>Supported formats:</p>
					<ul>
						<li>— <code data-s>[Website](https://example.com)</code></li>
						<li>— <code data-s>[Call me](tel:+44444444444)</code></li>
						<li>— <code data-s>[Email](mailto:adam@example.com)</code></li>
					</ul>
				</sp-body>
			</div>
			<div>
				<sp-heading size="m">Convert raw links</sp-heading>
				<sp-body size="m">
					<p>Converts raw urls to a hyperlink.</p>
					<p>Supported formats:</p>
					<ul>
						<li>— URLs: <code data-s>http(s)://example.com</code></li>
						<li>— Tel: <code data-s>tel:+44444444444</code></li>
						<li>— Email: <code data-s>mailto:adam@example.com</code></li>
					</ul>
				</sp-body>
			</div>
		</div>
		<sp-divider size="small" style="margin-top: 17px;"></sp-divider>
		<sp-heading size="m">Convert Raw</sp-heading>
		<p>If you need to back up your presets, or look into plugin data folder, it's located here:</p>
		<input type="text" readonly id="cheatsheet-plugin-data-folder" style="width: 100%">
	</sp-body>
</Modal>

<style scoped>
	header > sp-heading {
		margin-top: 0;
	}
	header > button {
		margin: 0 4px -2px -4px;
	}
	p {
		margin-left: 0; margin-right: 0;
	}
	.example {
		margin-bottom: 17px;
		}
</style>
