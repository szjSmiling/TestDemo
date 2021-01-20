/*
 * @Author: sunzhongjie
 * @Date: 2020-12-24 17:45:44
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 13:47:09
 */
export default function(cb, duration) {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    cb();
  }, duration)
}