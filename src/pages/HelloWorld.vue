<template>
  <div id="hello">
    <head-top></head-top>
    <div class="content flex">
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
      </div>
      <div class="content1" v-loading="loading">
        <el-button class="topBtn" type="success" icon="" circle @click="returnTop"><i class="iconfont icon-ictotop"></i></el-button>
        <div class="section1">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
              <img :src="item" :alt="index" title="欢迎,欢迎!!!">
            </el-carousel-item>
          </el-carousel>
          <el-select class="select-left" v-model="value6" placeholder="请选择" @change="selectVal">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <ul class="btnGroup">
          <li>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              :content="msg">
              <el-button slot="reference" @click="hoverEvent">hover 激活</el-button>
            </el-popover>
          </li>
          <li @click="PDFLoad">
            <button class="button">
              <img 
              src="../assets/images/dog.gif" 
              type="primary" 
              size="large" 
              height="20" width="20" s
              lot="icon">
              PDF文件的预览
            </button>
          </li>
          <li></li>
        </ul>
        <div class="cont-ol">
          <el-button size="medium" class="close" @click="closeRow(index)" :type="btnType[typeIndex]" v-for="(item,index) in textList" :key="index">
            {{item}}<i class="iconfont icon-close"></i>
          </el-button>
        </div>
      </div>
      <div class="slide slide-right">
        <div class="slide-top right-top">
          <img :src="img" alt="" title="小风车">
        </div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <foot-end></foot-end>
  </div>
</template>
<script>
import headTop from "@/components/head/header.vue";
import footEnd from "@/components/foot/footer.vue";
import { mapGetters } from "vuex";// 提供getters方法,获取state中的数据
import * as types from '../vuex/type/type.js';
import { Coupon } from '../models/coupon/coupon.js';
import ConstructorStu from '../models/coupon/coupon2.js';
import Person from '../models/coupon/person.js';
export default {
  name: "HelloWorld",
  components: {
    headTop,
    footEnd,
  },
  data() {
    return {
      timer:null,
      loading:false,
      img: require("../assets/logo.png"),
      msg: "Welcome to Your Vue2.0 with ElementUI",
      bannerList:[
        require('Assets/images/banner/b_flight1.jpg'),require('Assets/images/banner/b_flight2.jpg'),
        require('Assets/images/banner/b_flight3.jpg'),require('Assets/images/banner/b_flight4.jpg'),
      ],
      typeIndex:Math.floor(Math.random()*4),
      btnType:['primary','success','info','warning','danger'],
      textList:sessionStorage.getItem("textArray")?JSON.parse(sessionStorage.getItem("textArray")):[],
      cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
      }],
      value6: '',
      options4: [],
      list: [],
      activeNames: ['1'],
      cardNo:Math.floor(Math.random(0,1)*11+5),
    };
  },
  created () {
    this.$store.commit(types.GET_GOLD,null);// 如果不使用的话,则清空
  },
  methods: {
    handleChange(val) {},
    returnTop(){
      //返回到顶部 
    },
    hoverEvent(){
      console.log(this.cardNo);
      let num = this.cardNo.replace(/\s/g,'').replace(/[^\d]/g,'').replace(/(\d{4})(?=\d)/g,'$1');
      console.log(num);
    },
    PDFLoad() {
      let that = this;
      this.loading = true;
      this.timer = setTimeout(()=>{
         this.loading = false;
        that.$router.push("/PDF");
      },1200);
      clearTimeout(this.timer);
    },
    closeRow(id) {
      let that = this;
      this.textList.forEach((e,i)=>{
        if(id == i){
          that.textList.splice(i,1);
        }
      })
      sessionStorage.setItem("textArray",JSON.stringify(this.textList));
    },
    selectVal(){
      this.textList.push(this.value6);
      this.typeIndex =  Math.floor(Math.random()*4);
      sessionStorage.setItem("textArray",JSON.stringify(this.textList));
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
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
    rando(m) {
      var num = '';
      for(var i = 0; i < m; i++) {
            var val = parseInt(Math.random()*10, 10);
            if(i === 0 && val === 0) {
                  i--;
                  continue;
            }
                  num += val;
      }
      return num;
    },
  },
  filters: {// 自定义过滤器
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
};
</script>
<style scoped lang="less">
#hello {
  a {
    color: #42b983;
  }
  .topBtn{
    position: fixed;
    right:200px;
    bottom:80px;
    opacity: 0.3;
  }
  .topBtn:hover{
    opacity: 1;
  }
  .content{
    background: #eee;
    .slide{
      width:200px;
      background: #fff;
      padding:0 0 50px;
      .slide-top img{
        transform:rotate(0deg) scale(1);
        transition:transform 3s;
      }
      .left-top img:hover{
        transform:rotate(360deg) scale(0.5);
      }
      .right-top img:hover{
        transform:rotate(-360deg) scale(0.5);
      }
    }
    .slide-left{
      .el-button{width:176px;}
      .el-button+.el-button{margin:10px 0 0;}
    }
    .slide-right{
      
    }
    .content1 {
      width: 700px;
      min-width: 600px;
      margin:20px auto 20px;
      border:1px solid #eee;
      position: relative;
      .section1{
        .el-select{width:200px;}
        .select-left{float: left;}
        .select-right{float: right;}
      }
      .btnGroup {
        li {
          display: inline-block;
          margin: 0 10px;
        }
      }
      .cont-ol {
        width:500px;
        margin:20px auto;
        font-family: Arial, Helvetica, sans-serif;
        // border: 1px solid #ddd;
        .el-button{
          margin:0 5px 5px 0;
        }
        .el-button+.el-button{
          margin:0 5px 5px 0;
        }
        .close {
          height: auto;
        }
      }
    }
  }
}
</style>
