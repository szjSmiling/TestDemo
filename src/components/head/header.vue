<template>
	<div id="header">
    <a id="logo" @click="$router.push('/')"><img :src='require("../../assets/images/logo.jpg")' alt=""></a>
    <a class="bg-music-icon" v-if="music"><i class="iconfont" :class='{"icon-pause":music}' @click="playOrPause"></i></a>
    <a class="bg-music-icon" v-else><i class="iconfont" :class='{"icon-play":!music}' @click="playOrPause"></i></a>
		<el-menu :default-active="activeIndex" class="el-menu-demo flex content-center" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0" @click="$router.push('/')">首页</el-menu-item>
      <el-menu-item index="1" @click="$router.push('/message')">消息中心</el-menu-item>
      <el-menu-item index="2" @click="$router.push('/')">订单管理</el-menu-item>
      <el-submenu index="3">
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
      activeIndex: '0',
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
  min-width: 1020px;
  max-width:1400px;
  #logo{
    width:60px;
    display:inline-block;
    position: absolute;
    left:20%;
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
  }
  .bg-music-icon{
    position: absolute;
    height: 60px;
    line-height:60px;
    right: 15%;
    z-index: 20;
    cursor: pointer;
    .iconfont{
      font-size: 25px;
    }
  }
  
}
</style>