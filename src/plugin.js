import { $ } from './lib/dom'

import './plugin.css'
import App from './App.svelte'

const app = new App({target: $('#plugin')})
export default app
