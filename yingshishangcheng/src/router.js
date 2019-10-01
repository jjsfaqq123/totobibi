import Vue from 'vue'
import Router from 'vue-router'
import  index from "./views/index.vue"
import login from "./views/Login.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:"/login",component:login},
      {path:"/",component:index},
  ]
})
