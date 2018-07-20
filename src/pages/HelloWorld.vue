<template>
  <div id="hello">
    <head-top></head-top>
    <div class="content flex">
      <div class="slide slide-left">
        <div class="left-top slide-top">
          <img :src="img" alt="" title="大风车">
        </div>
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
              <el-button slot="reference">hover 激活</el-button>
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
    };
  },
  methods: {
    handleChange(val) {},
    returnTop(){

      
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
    }
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
      .slide-right{
        
      }
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
