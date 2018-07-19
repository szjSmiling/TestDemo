<template>
  <div id="hello">
    <head-top id="header">
      <i slot="left" class="iconfont icon-items"></i>
      <span slot="title">szjSmiling</span>
      <i slot="right" class="iconfont icon-home" ></i>
    </head-top>
    <div class="content" v-loading="loading">
      <div class="section1">
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
        <img :src="img" alt="">
        <el-select class="select-right"
          v-model="value9"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
      <!-- <mt-swipe class="mint-swipe" :auto="4000">
        <mt-swipe-item v-if="bannerList?bannerList:false" v-for="(item,index) in bannerList" :key="index">
          <a href="item.landingPageUrl">
            <img :src="item" alt="szj-picture" title="szj try it">
          </a>
        </mt-swipe-item>
      </mt-swipe> -->
      <div class="cont-ol">
        <el-button size="medium" class="close" @click="closeRow(index)" :type="btnType[typeIndex]" v-for="(item,index) in textList" :key="index">
          {{item}}<i class="iconfont icon-close"></i>
        </el-button>
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
      value9: [],
      list: [],
      loading: false,
      states: [
        "Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"
      ],
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    PDFLoad() {
      let that = this;
      this.loading = true;
      this.timer = setTimeout(()=>{
         this.loading = false;
        that.$router.push("/PDF");
      },1200);
      // clearTimeout(this.timer);
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#hello {
  a {
    color: #42b983;
  }
  .content {
    width: 600px;
    margin:50px auto 100px;
    border-radius: 3px;
    .section1{
      .el-select{width:200px;margin-top: 70px;}
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
</style>
