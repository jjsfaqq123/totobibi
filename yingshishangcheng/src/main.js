import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import heade from "./components/header.vue"
import footer from "./components/footer.vue"
Vue.component("heade",heade)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
