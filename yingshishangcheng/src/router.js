import Vue from 'vue'
import Router from 'vue-router'
import  index from "./views/index.vue"
import login from "./views/Login.vue"
import NontFount from "./views/NontFount.vue"
import fall from "./views/fall.vue"
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
      {path:"*",component:NontFount},
      {path:"/",component:index},
      {path:"/login",component:login},
      {path:"/fall",component:fall},
  ]
})
