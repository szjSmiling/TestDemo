/*
 * @Author: sunzhongjie
 * @Date: 2021-01-15 15:41:55
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-15 16:41:44
 */
import { asyncLoadJs } from './async-load-js.js';

export const signinWithFacebook = function(id) {
  asyncLoadJs(
    document,
    "script",
    "https://connect.facebook.net/en_US/sdk.js",
    "facebook_jssdk"
  );
  window.fbAsyncInit = async function() {
    await window.FB.init({
      appId           : '893639810840770', // 你的facebook账号id
      autoLogAppEvents: true,
      xfbml           : true,
      version         : 'v6.0'
    });
    if(window.FB) {
      const button = document.getElementById(id);
      button.onclick = function() {
        console.log(window.FB)
        window.FB.login(function(response) {
          console.log(response)
        }, { scope: 'public_profile, email' })
      }
    }else {
      console.log('loading facebook sdk...')
    }
  }
}