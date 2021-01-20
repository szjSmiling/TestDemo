/*
 * @Author: sunzhongjie
 * @Date: 2021-01-14 17:17:46
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-15 16:18:27
 */
export function syncLoadJs(url, id){ // 异步经过promise转同步
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) return;
    let st = document.createElement('script');
    st.src = url;
    // st.type = 'text/javascript';
    document.body.appendChild(st);
    st.onload = () => {
      return resolve();
    }
    st.onerror = () => {
      return reject();
    }
  }) 
}
export function asyncLoadJs(d, s, url, id) { // 异步加载
  // Load the SDK asynchronously
  var js,
      // fjs = d.getElementsByTagName(s)[0];
      fjs = d.getElementsByTagName('div')[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.async = true;
  js.defer = true;
  js.crossorigin = 'anonymous';
  js.src = url;
  fjs.parentNode.insertBefore(js, fjs);
}
export function createMetaTag(name, content) {
  var meta,
      title = document.getElementsByTagName('title')[0];
  if(document.getElementById('google-signin-client_id')) return
  meta = document.createElement('meta');
  meta.id = name
  meta.name = name
  meta.content=  content;
  document.head.insertBefore(meta, title);
}