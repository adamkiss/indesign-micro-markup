/**
 * Shorthand for `document.querySelector()`
 * @param {string} selector
 * @returns HtmlElement|null
 */
function $ (context, selector = null) {
	if (!selector) {
		selector = context
		context = document
	}

	return context.querySelector(selector)
}

/**
 * Shorthand for `document.querySelectorAll()`
 * @param {string} selector
 * @returns NodeList
 */
function $$ (context, selector = null) {
	if (!selector) {
		selector = context
		context = document
	}
	return context.querySelectorAll(selector)
}

module.exports = {$,$$}
