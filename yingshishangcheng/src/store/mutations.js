//弹出状态框
export const homeAlert = (state , data) => {
  console.log(data)
  state.Alertstate=data;
}
//登录成功动态替换页面值
export const userHomeLet = (state, data) => {
  state.userHome = data
}