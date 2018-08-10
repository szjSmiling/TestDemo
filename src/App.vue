<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created: function() {
    console.log("the hook of created is done!");
  },
  mounted: function() {
    console.log("the hook of mounted is done!");
  },
  activated: function() {
    console.log("the hook of activated is done!");
  },
  deactivated: function() {
    console.log("the hook of deactivated is done!");
  }
};
</script>
<style lang="less">
@import "./assets/css/common.css";
@import "./assets/css/reset.css";

#app {
  font-family: Helvetica, Arial, sans-serif, "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

@font-face {
  font-family: "WebRupee";
  src: url("./assets/font/WebRupee.V2.0.ttf");
}
#app{
  max-width:1400px;
  margin:auto;
}
#app > div{height: 100%;}  
a{cursor: pointer;}
.content{
  background: #eee; 
  display:flex;
  .child-con{
    padding: 0 10px;
    width: 700px;
    min-width: 600px;
    margin:20px auto 20px;
    border:1px solid #eee;
  }
}
.button{
  cursor: pointer;
  color:#fff;
  background: #409EFF;
  border-radius:3px;
  padding:5px 10px;
}
.rs {
  font-family: "WebRupee";
  font-weight: normal;
  margin-right: 0.2rem;
}
img{vertical-align: top;}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

input,
select {
  border: none;
  border-radius: 4px;
}
.el-popper[x-placement^=bottom]{
  margin-top: 5px;
}
.el-collapse{
  border:1px solid #eee;
  .el-collapse-item{
    .el-collapse-item__header{
      height: 35px;
      line-height: 35px;
      i{line-height: 35px;}
    }
    .el-collapse-item__header.is-active{
      color:#409EFF;
    }
    .el-collapse-item__header:hover{
      color:#409EFF;
    }
    .el-collapse-item__wrap{
      .el-collapse-item__content{
        text-align: left;
        padding:0 14px 14px;
      } 
    }
  }
}
</style>
