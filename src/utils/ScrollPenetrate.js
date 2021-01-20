/*
 * @Author: sunzhongjie
 * @Date: 2021-01-20 13:29:16
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 13:36:08
 */
export default {
  eventScrollTop: 0, // 弹窗显示的时候调用 记录底部滚动条位置
  setValue () {
    this.eventScrollTop = document.scrollingElement.scrollTop ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    document.body.classList.add('dialog-open');
    document.body.style.top = -this.eventScrollTop + 'px';
  },
  useValue (top) { // 弹窗关闭的时候调用 回归到原来滚动条位置
    document.body.classList.remove('dialog-open');
    if(top) {
      document.scrollingElement.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = top;
    } else {
      document.scrollingElement.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = this.eventScrollTop;
    }
  },
  reSetScrollTopValue () { // 离开页面的时候重置 eventScrollTop
    this.eventScrollTop = 0;
    document.scrollingElement.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = this.eventScrollTop;
  }
}
// function getElementTop(elem) {
//   var elemTop = elem.offsetTop;//获得elem元素距相对定位的父元素的top
//   elem = elem.offsetParent;//将elem换成起相对定位的父元素
//   while(elem !== null) {//只要还有相对定位的父元素 
//     /*获得父元素 距他父元素的top值,累加到结果中 */
//     elemTop += elem.offsetTop;
//     //再次将elem换成他相对定位的父元素上;
//     elem = elem.offsetParent;
//   }
//   return elemTop;
// }

// const ua = typeof window === 'object' ? window.navigator.userAgent : '';
// // function isIOS() {
// //   const _isIOS = /iPhone|iPod|iPad/i.test(ua) ? 1 : 0;
// //   return _isIOS;
// // }

// function isAndroid() {
//   const _isAndroid = /Android/i.test(ua) ? 1 : 0;
//   return _isAndroid;
// }