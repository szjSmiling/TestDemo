<template>
	<div id="header">
		<el-menu :default-active="activeIndex" class="el-menu-demo flex content-center" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0"><a id="logo" href="www.szjSmiling.com"><img :src='require("../../assets/images/logo.jpg")' alt=""></a></el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
      <el-menu-item index="3"><a href="javascript:;" target="_blank">订单管理</a></el-menu-item>
      <el-submenu index="4">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="5" v-if="music"><i class="bg-music-icon iconfont"  :class='{"icon-pause":music}' @click="playOrPause"></i></el-menu-item>
      <el-menu-item index="5" v-else><i class="bg-music-icon iconfont"  :class='{"icon-play":!music}' @click="playOrPause"></i></el-menu-item>
    </el-menu>
	</div>
</template>
<script>
// let audio = document.createElement('audio');
// audio.src = "http://sc1.111ttt.cn/2016/1/11/11/204111410014.mp3";
// audio.addEventListener("canplaythrough", function () {
  // audio.play();
// }, false);
export default {
  data() {
    return {
      music:true,
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    playOrPause(){
      this.music = !this.music;
      if(!this.music){
        // audio.pause();
      }
    }
  }
};
</script>
<style lang='less' scoped>
#header {
  min-width: 600px;
  #logo{
    width:60px;
    display:inline-block;
    float: left;
    position: absolute;
    left:-55px;
    z-index: 20;
    img{
      width:100%;
      height: 100%;
      border-radius:50%;
    }
  }
  .el-menu-demo{
    border:0;
    li:hover{
      color:#409EFF;
    }
    .is-active{
      color:#409EFF;
    }
    li:first-child,li:last-child{cursor:default;border:0;i{color:#409EFF;}}
  }
  .bg-music-icon{
    position: absolute;
    right:-50px;
    z-index: 20;
    font-size: 25px;
    cursor: pointer;
  }
  
}
</style>