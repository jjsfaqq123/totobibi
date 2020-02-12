import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios  from  "axios"
import Elmentui from "element-ui"
import  "element-ui/lib/theme-chalk/index.css"
Vue.use(Elmentui)
//配置axios
Vue.prototype.axios=axios;
//请求服务器的基础路径
axios.defaults.baseURL=('http://127.0.0.1:5000/');
//配置session的信息
axios.defaults.withCredentials=true;
Vue.config.productionTip = false

//全局弹出层
import windo from "./components/window"
Vue.component("window",windo)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
