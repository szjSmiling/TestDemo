// const这个变量名,就是import {XUser} from 的时候需要的;
export const loginUserInfo = 'loginUserInfo';
export const isLoginInfo = "isLoginInfo";
export const XUser = {
  state :{
    user:null,
    isLogin:null,
    otherData:null
  },
  getters:{// 改变state中的数据
    userInfo: state => state.user,
    isLogin: state => state.isLogin,
    otherData: state => state.otherData,
  },
  mutations: {// 触发提交的方法
    [loginUserInfo] (state,user){
      state.user = user;
  	},
    [isLoginInfo](state, isLogin){
      state.isLogin = isLogin;
    },
    otherRequest(state,data1){
      state.otherData = data1;
    },
  }
}