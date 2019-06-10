<template>
  <div id="hello">
    <head-top id="header"></head-top>
    <div class="content">
      <slide-left></slide-left>
      <div class="child-con" v-loading="loading">
        <el-button class="topBtn" type="success" icon="" circle @click="returnTop"><i class="iconfont icon-ictotop"></i></el-button>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item" :alt="index" title="欢迎,欢迎!!!">
          </el-carousel-item>
        </el-carousel>
        <ul class="btnGroup flex space-between align-items-center">
          <li class="section1">
            <el-select class="select-left" v-model="value6" placeholder="请选择" @change="selectVal">
              <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.label">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </li>
          <li>
            <el-popover placement="top-start" title="标题" width="200" trigger="hover" :content="msg">
              <el-button slot="reference" @click="hoverEvent">hover 激活</el-button>
            </el-popover>
          </li>
          <li @click="PDFLoad">
            <button class="button">
              <img  src="../assets/images/dog.gif" type="primary" size="large" height="20" width="20" slot="icon">PDF文件的预览
            </button>
          </li>
        </ul>
        <div class="cont-ol">
          <el-button size="medium" class="close" @click="closeRow(index)" :type="btnType[typeIndex]" v-for="(item,index) in textList" :key="index">
            {{item}}<i class="iconfont icon-close"></i>
          </el-button>
        </div>
      </div>
      <slide-right></slide-right>
    </div>
    <foot-end></foot-end>
  </div>
</template>
<script>
import headTop from "@/components/head/header.vue";
import slideLeft from "@/components/slideleft/slideleft.vue";
import slideRight from "@/components/slideright/slideright.vue";
import footEnd from "@/components/foot/footer.vue";
export default {
  name: "HelloWorld",
  components: {
    headTop,
    footEnd,
    slideLeft,
    slideRight,
  },
  data() {
    return {
      timer:null,
      loading:false,
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
      cardNo:Math.floor(Math.random(0,1)*11+5),
    };
  },
  created () {
    
  },
  methods: {
    returnTop(){
      //返回到顶部 
      let that = this;
      cancelAnimationFrame(this.timer);
      this.timer = requestAnimationFrame(function fn() {
        let oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        let oHeight = document.getElementById("header").clientHeight;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - oHeight;
          that.timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(that.timer);
        }
      });
    },
    hoverEvent(){
      // console.log(this.cardNo);
      // let num = this.cardNo.replace(/\s/g,'').replace(/[^\d]/g,'').replace(/(\d{4})(?=\d)/g,'$1');
      // console.log(num);
      this.$router.push("/shop");
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
      console.log(this.value6)
      this.$alert('选择您喜欢的城市', this.value6, {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'success ',
            message: `action: 希望在${this.value6} 定居!`
          });
        }
      });
      // this.textList.push(this.value6);
      // this.typeIndex =  Math.floor(Math.random()*4);
      // sessionStorage.setItem("textArray",JSON.stringify(this.textList));
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
    .child-con {
      position: relative;
      .btnGroup {
        width: 100%;
        .section1{
          .el-select{width:200px;}
          .select-left{float: left;}
          .select-right{float: right;}
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
