import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: 'static',
	build: {
		target: 'es6',
		outDir: 'plugin',
		rollupOptions: {
			output: {
				esModule: false,
				preserveModules: false,
				format: "cjs",
			},

		},
	},
	plugins: [
		svelte({
			onwarn: (warning, handler) => {
				if (warning.code.startsWith("a11y-")) {
					return false;
				}
				handler(warning);
			}
		}),
		{
			name: "no-attribute",
			transformIndexHtml(html) {
			  return html.replace(` type="module" crossorigin`, "");
			}
		}
	],
})
