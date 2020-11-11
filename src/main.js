import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
