<template>
  <div id="slider1">
    <div class="slide slide-left">
      <div class="left-top slide-top">
        <img :src="img" alt="" title="大风车">
      </div>
      <el-button @click="Vuex(1)">Vuex存储 获取的使用</el-button>
      <el-button @click="Vuex(2)">ES6 class 类的使用</el-button>
      <el-button @click="Vuex(3)">实例的__proto__</el-button>
      <el-button @click="Vuex(4)">class类私有属性使用</el-button>
      <el-button @click="Vuex(5)">类的方法内部含有this</el-button>
      <el-button @click="Vuex(6)">class类static的使用</el-button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";// 提供getters方法,获取state中的数据
import * as types from '../../vuex/type/type.js';
import { Coupon } from '../../models/coupon/coupon.js';
import ConstructorStu from '../../models/coupon/coupon2.js';
import Person from '../../models/coupon/person.js';
export default {
  data() {
    return {
      img: require("../../assets/logo.png"),
    };
  },
  methods: {
    handleChange(val) {

    },
    Vuex(who){// 触发vuex中方法
      switch (who){
        case 1:
           this.$store.commit("isLoginInfo",true);
          // 向vuex的state中存储数组或者对象["aa","bbb"] or {data1:this.btnType}
          this.$store.commit("otherRequest",{data1:this.btnType,data2:true});
          this.$store.commit(types.GET_GOLD, [1,2,3,4]);
          // 获取存储在vuex的state中数据
          let gold = this.$store.getters.gold;
          console.log(this.$store.getters.gold);
        break;
        case 2:
          console.group("%c1.class 使用了解.","color:#0f0;");
          // Class类原型上的方法必须先new 一个实例,然后才能调用,否则会报错;
          let coupon = new Coupon("HEG123",99,"public",2);
          console.log(coupon.getCouponCode(this));
          coupon.getCouponCode(this)
          coupon.buildDiscount(this);// 把coupon存到vuex的coupon中

          // getCoupon,buildCoupon是由 static 定义的方法
          Coupon.getCoupon(this,"dfd12"); // 调取查询coupon数据的接口
          Coupon.buildCoupon({code:"APP1Y",price:59,type:"private",number:5});
          
          // 下面代码表明, 类 的数据类型就是函数, 类 本身就指向构造函数。
          console.log(typeof Coupon);// function
          console.log(Coupon === Coupon.prototype.constructor);// true
          console.log(Coupon.prototype);// 输出的是一个对象
          console.groupEnd();

          // 一般constructor方法默认返回实例对象this，但是也可以指定constructor方法返回一个全新的对象,让返回的实例对象不是该类的实例
          // 类的构造函数，不使用new是没法调用的,即使你使用实例对象去调用也是不行的,这是它跟普通构造函数的一个主要区别。
          console.group("2.constructor 指向的了解.");
          console.log(new ConstructorStu() instanceof ConstructorStu);//false
          let person =  new ConstructorStu();
          ConstructorStu.constructor();
          console.groupEnd();
        break;
        case 3:
          console.group("%c3.类的所有实例共享一个原型对象,所以__proto__属性是相等的,可以通过实例的__proto__属性为Class添加方法.","color:red;");
          let person1 = new Person('zhang san',"TODAY IS FRIDAY");
          let person2 = new Person('li si',"TODAY IS FRIDAY");
          person1.__proto__.getH = function (){
              return "Height";
          };
          console.log(person1.strToUpperCase());
          console.log(person1.getH());
          console.log(person2.getH());
          console.log("%c**不推荐使用，因为这会改变Class的原始定义，影响到所有实例。","color:red;");
          console.groupEnd();
        break;
        case 4:
          console.group("%c4.私有属性","color:#00f;");
          let person3 = new Person();
          person3.getName();
          console.groupEnd();
        break;
        case 5:
          console.group("%c5.类的方法内部如果含有this，它默认指向类的实例,需要在constructor改变实例this指向.","color:#f4d50f;");
          let person4 = new Person("wang er","CHANGE THE THIS");
          person4.bindName();
          const {bindName} = person4; // 把person4 实例对象中相同的属性 (bindName) 赋值 给前面的对象;
          bindName();
          console.groupEnd();
        break;
        case 6:
          console.group("%c6.static 静态方法,类直接调用.","color:#f0f;");
          Person.staticFn();
          console.groupEnd();
        break;
        default:
        break;
      }
    },
  },
  created () {
    this.$store.commit(types.GET_GOLD,null);// 如果不使用的话,则清空
  },
};
</script>
<style lang="less" scoped>
#slider1 {
  .slide {
    width: 200px;
    background: #fff;
    padding: 0 0 50px;
    .slide-top img {
      transform: rotate(0deg) scale(1);
      transition: transform 3s;
    }
    .left-top img:hover {
      transform: rotate(360deg) scale(0.5);
    }
    .right-top img:hover {
      transform: rotate(-360deg) scale(0.5);
    }
  }
  .slide-left {
    .el-button {
      width: 176px;
    }
    .el-button + .el-button {
      margin: 10px 0 0;
    }
  }
}
</style>
