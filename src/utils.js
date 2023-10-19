/**
 * Shorthand for `document.querySelector()`
 * @param {string} selector
 * @returns HtmlElement|null
 */
export function $ (selector) {
	return document.querySelector(selector)
}

/**
 * Shorthand for `document.querySelectorAll()`
 * @param {string} selector
 * @returns NodeList
 */
export function $$ (selector) {
	return document.querySelectorAll(selector)
}


/**
 * Escape a string for use in a InDesign GREP search.
 * @param {string} str
 * @returns string
 */
export function esc(str) {
	return str.replace(/([.^$*+?~()\[\]{}\\|])/g, '\\$1')
}

/**
 * Creates paragraph styles if they don't exist.
 * @param {Document} document
 * @param {string[]} names
 */
export function ensureParagraphStyles(document, names) {
	const paraStyles = document.paragraphStyles

	names.map(name => {
		const style = paraStyles.itemByName(name)
		if (! style.isValid) paraStyles.add({name})
	})
}

/**
 * Creates character styles if they don't exist.
 * @param {Document} document
 * @param {string[]} names
 */
export function ensureCharacterStyles(document, names) {
	const charStyles = document.characterStyles

	names.map(name => {
		const style = charStyles.itemByName(name)
		if (! style.isValid) charStyles.add({name})
	})
}

/**
 * Resets find/change preferences of GREP search
 * @param {Application} app
 */
export function resetGrepPreferences(app) {
	app.findGrepPreferences = null
	app.changeGrepPreferences = null
}

/**
 * Add or replace a menu item in "Plug-Ins" menu
 * for easier keyboard shortcut access.
 *
 * @param {Object} options
 * @param {Application} options.app
 * @param {string} options.pluginName
 * @param {string} options.menuItemName
 * @param {Function} options.invokeCallback
 */
export function createMenuItem({
	app,
	pluginName,
	menuItemName,
	invokeCallback,
}) {
	try {
		const pluginMenu = app
			.menus.item('Main')
			.submenus.item('Plug-Ins')
			.submenus.item(pluginName)

		const existingMenuItem = pluginMenu.menuItems.itemByName(menuItemName);
		// if (existingMenuItem.isValid) { existingMenuItem.remove() }
		// ^ Keep if debugging/developing

		if (! existingMenuItem.isValid) {
			const menuItem = app.scriptMenuActions.add(menuItemName)
			menuItem.addEventListener('onInvoke', invokeCallback);
			pluginMenu.menuItems.add(menuItem)
		}

		return true
	} catch (error) {
		// Swallow the error
		console.error(error)
		return false
	}
}

/**
 * Removes old menu items matching "Apply Magic Markup" from a submenu.
 * @param {Submenu} menu
 */
function removeOldMenuItemsInSubmenu(menu) {
	for (let index = 0; index < menu.menuItems.length; index++) {
		const menuItem = menu.menuItems.item(index);

		if (!(menuItem.isValid && menuItem.name.includes('Apply Magic Markup'))) continue
		menuItem.remove()
	}
}

/**
 * Remove old menu items from "Plug-Ins" menu.
 * @param {Object} options
 * @param {Application} options.app
 * @param {string} options.currentPluginName
 * @returns boolean
 */
export function cleanUpMenuItems({app, currentPluginName}) {
	try {
		const pluginMenu = app
			.menus.item('Main')
			.submenus.item('Plug-Ins')

		removeOldMenuItemsInSubmenu(pluginMenu)

		for (let index = 0; index < pluginMenu.submenus.length; index++) {
			const submenu = pluginMenu.submenus.item(index);

			if (!submenu.isValid || !submenu.name.includes('Magic Markup')) continue

			if (submenu.name !== currentPluginName && submenu.isValid) {
				submenu.remove()
			} else if (submenu.isValid) {
				removeOldMenuItemsInSubmenu(submenu)
			}
		}

		return true
	} catch (error) {
		console.error('CLEANUP', error)
		return false
	}
}
