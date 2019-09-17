import Vue from 'vue'
import Router from 'vue-router'
import  header from "./components/header.vue"
import  index from "./views/index.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/header",component:header,
      path:"/",component:index,
    }
  ]
})
