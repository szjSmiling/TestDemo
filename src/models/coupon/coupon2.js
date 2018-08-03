
import {Coupon} from "./coupon.js";

export default class constructorStu {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    console.log("我是coupon2 的 constructor");
    return new Coupon();
  }
}