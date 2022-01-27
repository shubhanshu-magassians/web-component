import { createApp } from 'vue'
import { defineCustomElement } from 'vue'

import App from './App.vue'
import Card from  './components/custom-card.vue'

const wrappedElement = defineCustomElement(Card);

customElements.define("custom-card", wrappedElement);

createApp(App).mount('#app')