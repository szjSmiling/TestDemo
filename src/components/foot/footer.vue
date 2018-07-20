<template>
	<div id="footer">
    <div class="foot-content">
      <p>
        <span @click="footClick(0)">昨天</span>
        <span @click="footClick(1)">今天</span>
        <span @click="footClick(2)">明天</span>
        <span @click="footClick(3)">现在</span>
      </p>
      <p><a href="https://github.com/szjSmiling">豫ICP备18009561号: 本网站是个人网站，主要用于记录生活趣事.</a></p>
    </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    footClick(type){
      
    }
  }
};
</script>
<style lang="less" scoped>
#footer {
    width: 100%;
    min-width: 400px;
    display: table;
    font-size: 12px;
    padding:20px 0 10px;
  .foot-content{
    display: table-cell;
    vertical-align: middle;
    p {
      color: #999;
      margin: 10px 0;
      span {
        border-right: 1px solid #999;
        display: inline-block;
        padding: 0 5px;
        cursor: pointer;
      }
      span:nth-child(4) {
        border-right: none;
      }
      a{
        color:#999;
      }
    }
  }
}
</style>
