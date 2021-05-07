<!--
 * @Author: sunzhongjie
 * @Date: 2021-04-14 16:40:31
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-15 09:29:15
-->
<template>
  <canvas id="stock-canvas"></canvas>
</template>
<script>
export default {
  created() {
    var js = document.createElement('script');
    js.src = 'http://img1.money.126.net/data/hs/kline/day/history/2015/0000001.json?callback=loadStockData&t=' + Date.now();
    document.getElementsByTagName('head')[0].appendChild(js);
    window.loadStockData = this.loadStockData
    window.drawStock = this.drawStock
  },
  methods: {
    loadStockData (r) {
      var NUMS = 30,
          data = r.data;
      if (data.length > NUMS) {
        data = data.slice(data.length - NUMS);
      }
      data = data.map(function (x) {
        return {
          date: x[0],
          open: x[1],
          close: x[2],
          high: x[3],
          low: x[4],
          vol: x[5],
          change: x[6]
        }
      })
      window.drawStock(data);
    },
    drawStock (data) {
      var canvas = document.getElementById('stock-canvas'),
      width = canvas.width,
      height = canvas.height,
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#666666';
      ctx.font = '18px Arial';
      ctx.fillStyle = '#333333';

      ctx.fillText('30个交易日的K线图', 50, 142);
      
      let min = 1e10000, max = 0;
      data.forEach(ele => {
        if (ele.high > max)
          max = ele.high
          min = ele.low < min ? ele.low : min
      })
      console.log(data)
      var range = max - min;
      var calcPos = (i, value) => {
        let y = Math.round((max - value) * canvas.height / range);
        let x = Math.round((canvas.width / 60) * (i *2 +1));
        return [x, y];
      }

      var drawBox = (i, open, close) => {
        let max = close/* , min = open */;
        if(open > close) {
          max = open;
          min = close;
        }
        let pos0 = calcPos(i, max);
        pos0[0] -= Math.round(canvas.width / 120);

        let width = Math.round(canvas.width / 60);
        let height = Math.round(Math.abs(open - close) * canvas.height / range);
        ctx.rect(...pos0, width, height);
        ctx.fillStyle = open > close ? "red" : "green";
        ctx.fill();
      };

      data.forEach((ele, i) => {
        ctx.beginPath();
        let pos = calcPos(i, ele.low);
        ctx.moveTo(...pos);
        pos = calcPos(i, ele.high);
        ctx.lineTo(...pos);
        ctx.strokeStyle="black";
        ctx.stroke();
        drawBox(i, ele.open, ele.close);
      })
    }
  }
}
</script>
<style lang="less" scoped>
#stock-canvas{
  margin: 10px auto 0;
  display: block;
  width: 90%;
}
</style>