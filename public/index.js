/*
 * @Author: sunzhongjie
 * @Date: 2020-12-11 20:31:17
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-11 20:32:08
 */
var canvas = document.getElementById('loading');
var ctx = canvas.getContext("2d");
ctx.width = document.body.clientWidth
ctx.height = document.body.clientHeight
var W = 320, H = 160, angle = 0, len = 10, count = 50;    
ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';           
var run = setInterval(draw, 100);
var imging = new Image();
imging.src = '2.jpg';

function draw() {    
  //清除上一帧
  ctx.clearRect(0, 0, W, H)
  //重新绘制
  ctx.drawImage(imging, 0, 0, W, H)
  for (var i = 1; i <= count; i++) {
    xiayu(Math.random() * W, Math.random() * H, angle);               
  }
}
function xiayu(x, y, r) {
  ctx.beginPath();      
  ctx.moveTo(x, y);
  ctx.lineTo(x + angle, y + len);
  ctx.lineWidth = 2;
  ctx.stroke(); 
}
		