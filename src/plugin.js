import {$, esc, ensureParagraphStyles, ensureCharacterStyles, resetGrepPreferences, createMenuItem, cleanUpMenuItems} from "./utils";

import Scope from "./scope";
import Presets from "./presets";

import RunButton from "./button-run";
import ConfirmDialog from "./dialog-confirm";
import PromptDialog from "./dialog-prompt";
import Invisibles from "./invisibles";

const {app, ScriptLanguage, UndoModes} = require("indesign");
const {shell, entrypoints} = require('uxp');
const PLUGIN_NAME = '🌈 Magic Markup';
const PLUGIN_VERSION = require('uxp').versions.plugin;

// The plugin class
class MagicMarkupPlugin {
	PRODUCTION = false
	loading = true

	textareas = {}
	app = null
	listeners = []

	scope = null
	runner = null
	presets = null

	constructor(app) {
		this.app = app
		this.scope = new Scope(this)
		this.runButton = new RunButton(this)
		this.presets = new Presets(this)

		this.confirmDialog = new ConfirmDialog()
		this.promptDialog = new PromptDialog()

		this.applyMagic = this.applyMagic.bind(this)

		// Add event listeners
		this.runButton.addEventListener('click', this.applyMagic)

		// Add a menu item (?) to be targeted by a script 🙄
		cleanUpMenuItems({app, currentPluginName: PLUGIN_NAME})
		createMenuItem({
			app,
			pluginName: PLUGIN_NAME,
			menuItemName: '✨ Apply Magic Markup',
			invokeCallback: this.applyMagic.bind(this)
		})

		// HELP/INFO
		$('#info .version').textContent = `🌈 v${PLUGIN_VERSION}`
		$('#info .help').addEventListener('click', async _ => {
			await shell.openExternal('https://github.com/adamkiss/magic-markup-for-indesign#readme')
		})
		$('#info .cheatsheet').addEventListener('click', _ => {$('#cheatsheet-002').showModal()})
	}

	destroy() {}
	showPanel() {}

	applyMagic({wholeDocument = false}) {
		// Shouldn't happen, but…
		if (! this.app.activeDocument) return
		if (! this.scope) return

		if (this.scope.isDocument && wholeDocument !== true) {
			return this.confirmDialog.show({
				title: 'Whole document selected!',
				body: 'Are you sure you want to apply Magic Markup to the whole document?',
				onSuccess: () => this.applyMagic({wholeDocument: true})
			})
		}

		this.runButton.disabled = true
		const config = this.presets.activeConfiguration

		ensureParagraphStyles(this.app.activeDocument, config.paragraph.map(rule => rule.style))
		ensureCharacterStyles(this.app.activeDocument, config.character.map(rule => rule.style))

		const greps = []
		for (const rule of config.paragraph) {
			greps.push([
				{findWhat: rule.find},
				{changeTo: '$1', appliedParagraphStyle: rule.style},
			]);
		}
		for (const rule of config.character) {
			greps.push([
				{findWhat: rule.find},
				{changeTo: '$1', appliedCharacterStyle: rule.style},
			]);
		}
		if (config.invisibles?.rules?.length) {
			greps.push(...config.invisibles.rules);
		}

		this.app.doScript(() => {
			for (const [findPrefs, changePrefs] of greps) {
				resetGrepPreferences(this.app);

				this.app.findGrepPreferences.properties = findPrefs;
				this.app.changeGrepPreferences.properties = changePrefs;

				for (const target of this.scope.grepTargets) {
					target.changeGrep();
				}
			}

			resetGrepPreferences(this.app);

		}, ScriptLanguage.UXPSCRIPT, [], UndoModes.ENTIRE_SCRIPT, 'Magic Markup: Apply');

		this.runButton.disabled = false
	}
}

// Create a new instance of the plugin
new MagicMarkupPlugin(app)

entrypoints.setup({
	commands: {
		applyMagic: () => {
			console.log('applyMagic')
		}
	}
});
