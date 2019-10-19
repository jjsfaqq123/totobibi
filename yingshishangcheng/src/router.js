import Vue from 'vue'
import Router from 'vue-router'
import  index from "./views/index.vue"
import login from "./views/Login.vue"
import NontFount from "./views/NontFount.vue"
import fall from "./views/fall.vue"
import details from "./views/details.vue"
import details1 from "./views/details1.vue"
import details2 from "./views/details2.vue"
import header from "./components/header.vue"
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
      {path:"*",component:NontFount},
      {path:"/",component:index},
      {path:"/login",component:login},
      {path:"/fall",component:fall},
      {path:"/header",component:header},
      {path:"/details",component:details},
      {path:"/details1",component:details1},
      {path:"/details2",component:details2},
  ]
})
