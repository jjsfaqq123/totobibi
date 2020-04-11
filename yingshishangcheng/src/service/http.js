//引入请求
import axios from "axios";
//引入router路由
import router from "../router";
//引入base64加密解密
import base64 from "js-base64";
import qs from 'qs'
axios.defaults.baseURL=('http://127.0.0.1:5000/');
// const BASE_URL = process.env.VUE_APP_API_URL // 第二节配置的url 可以读取 一定要VUE_APP_A为前缀
//创建变量保存取消请求的数据
let cancel = {};
const CancelToken = axios.CancelToken
//响应拦截 401 token过期处理
axios.interceptors.response.use(response => {
  //全局拦截所有请求返回status状态码不等于1的接口
  if(response.data.status !=1 ){
    if(response.data.status == -100){
      return false;
    }
  }
  return response
},error => {
  const { status } = error.response;
  switch(status){
    case 401:
      //页面跳转
      router.push('/login')
      break;
    case 500:
      //重定向
      break;
  }
  return Promise.reject(error);
})
//设置默认请求时间
axios.defaults.timeout = 10000;
if (process.env.NODE_ENV === 'production') {
  // 生产模式配置
  axios.defaults.baseURL = BASE_URL;
}
//封装请求
export default {
  //get请求
  get(url,param){
    console.log(url)
    console.log(param)
    return new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url,
        params:param,
        cancelToken:new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        console.log(res)
        resolve(res)
        console.log(resolve(res))
      })
    })
  },
  //post请求
  post(url,param){
    return new Promise((resolve,reject)=>{
      axios({
        method:"post",
        url,
        data:(function(){
          return base64.Base64.encode(JSON.String(param))
        })(),
        cancelToken:new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}

