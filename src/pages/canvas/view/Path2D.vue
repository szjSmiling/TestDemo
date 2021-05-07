<!--
 * @Author: sunzhongjie
 * @Date: 2021-04-14 17:54:48
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-15 09:38:31
-->
<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext("2d")
      // 利用Path绘制复杂路径:
      var path = new Path2D();
      path.arc(75, 75, 50, 0, Math.PI*2, true);
      path.moveTo(110,75);
      path.arc(75, 75, 35, 0, Math.PI, false);
      path.moveTo(65, 65);
      path.arc(60, 65, 5, 0, Math.PI*2, true);
      path.moveTo(95, 65);
      path.arc(90, 65, 5, 0, Math.PI*2, true);
      ctx.strokeStyle = '#0000ff';
      ctx.stroke(path);
    })
  }
}
</script>
<style lang="less">
  
</style>