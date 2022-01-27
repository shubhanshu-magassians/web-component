import { createApp } from 'vue'
import { defineCustomElement } from 'vue'

import App from './App.vue'
import Card from  './components/Card.vue'

const wrappedElement = defineCustomElement(Card);

export function register () {
    customElements.define("v-card", wrappedElement);
}
// createApp(App).mount('#app')
