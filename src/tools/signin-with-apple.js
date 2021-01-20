/*
 * @Author: sunzhongjie
 * @Date: 2021-01-20 13:24:26
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 14:58:59
 */
import { syncLoadJs } from './async-load-js.js';

export const signinWithApple = function(id) {
  syncLoadJs(
    'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
    'apple_jssdk'
  ).then(() => {
    window.AppleID.auth.init({
      clientId: 'com.xxx.web',   // xxx: 域名
      scope : 'name email',      // 用空格分隔多个登陆方式
      redirectURI : 'http://localhost:8081',
      state : '[STATE]',
      nonce : '[NONCE]',
      usePopup : true //or false defaults to false
    })
    const button = document.getElementById(id);
    button.onclick = async function() {
      console.log(window.AppleID)
      try {
        const data = await window.AppleID.auth.signIn()
        console.log(data)
      } catch ( error ) {
        console.log(`apple登陆异常...`)
      }
    }
  })
}