import {DomainManager} from '../../request/DomainManager';
import * as types from '../../vuex/type/type';
// import { resolve } from 'dns';

export class Coupon {
  constructor(// 构造函数
    couponCode,
    couponPrice,
    couponType,
    couponNumber,
  ){
    this.couponCode = couponCode;
    this.couponPrice = couponPrice;
    this.couponType = couponType;
    this.couponNumber = couponNumber;
  }

  getCouponCode(vueComp){
    let login = vueComp.$store.getters.isLogin;
    let num = vueComp.$store.getters.gold;
    let sum = 0;
    if(login){
      num.forEach(el => {
        sum += el;
      })
      this.couponNumber = sum;
    }else{
      this.couponNumber = 0;
    }
    return ("我是来自Class 原型上的方法,必修使用new Coupon() 实例后调用,结果是 : "+this.couponNumber);
  }

  buildDiscount(vueComp){
    let coupon = {
      trade_type: this.couponType,
      trade_amount: this.couponPrice,
      trade_number: this.couponNumber,
      trade_code: this.couponCode,
    }
    vueComp.$store.commit(types.GET_COUPON,coupon);
  }

  static buildCoupon(res) {
    return new Coupon (
      res.code,
      res.price,
      res.type,
      res.number
    )
  }

  static getCoupon(vueComp,code) {
    let map = new Map();
    const NewCode = Coupon.newMethod(map,code);
    let url = DomainManager.getCouponURLString(
      // get方式拼接的参数 DomainManager.getQueryString(NewCode)
      DomainManager.getQueryString(NewCode)
    );
    // console.log(url);
    // return new Promise((resolve,reject) => {
    //   vueComp.$axios.get(url,{
    //     headers: { "x-Device": "mobile" }
    //   }).then(res =>{
    //     res.json().then(jsonObj =>{
    //       resolve(jsonObj);
    //     }).catch(err => {
    //       reject();
    //     })
    //   }).catch(err => {
    //     reject();
    //   })
    // })
  }

  static newMethod(map,code){
    return map.set("code",code.toUpperCase());
  }

}
