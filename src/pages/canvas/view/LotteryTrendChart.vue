<!--
 * @Author: sunzhongjie
 * @Date: 2021-04-14 16:51:59
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-14 18:17:47
-->
<template>
  <form class="lottery">
    <table id="zstable" border="1">
      <thead id="thead">
        <tr>
          <th style="width:80px;" rowspan="2">期数: 50</th>
          <th :colspan="thead.length">冠军</th>
        </tr>
        <tr>
          <th v-for="(head, index) of thead" :key="`H${index}_${head}`">
            {{head}}
          </th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr v-for="(row, index) of tbody"
          :key="`row${index}`"
          :class="index % 2 === 0 ? 'gray' : 'grayer'" >
          <td style="width:80px;" colspan="1">{{row.expectNumber}}</td>
          <td v-for="(line, lIndex) of row.data"
            :key="`row${index}_${lIndex + 1}`"
            :id="`T${index}_${lIndex + 1}`"
            >
            <span :class="{'active': line === 0}" >{{line === 0 ? lIndex + 1 : line}}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="canvasdiv"></div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      thead: [],
      tbody: [],
      openNumber: '04,09,05,01,06,07,08,02,03,10'
    }
  },
  created() {
    this.thead = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.tbody = [
      {
        expectNumber: '202104140809',
        data: [12, 36, 8, 0, 4, 1, 3, 7, 23, 13]
      },
      {
        expectNumber: '202104140808',
        data: [4, 3, 20, 13, 10, 7, 24, 1, 0, 6]
      },
      {
        expectNumber: '202104140807',
        data: [2, 1, 16, 5 , 0, 4, 8, 3, 9, 19]
      },
      {
        expectNumber: '202104140806',
        data: [0, 2, 15, 27, 1, 3, 6, 13, 4, 12]
      },
      {
        expectNumber: '202104140805',
        data: [22, 17, 5, 19, 2, 0, 4, 6, 1, 11]
      },
      {
        expectNumber: '202104140804',
        data: [1, 23, 4, 12, 3, 8, 0, 5, 13, 2]
      },
      {
        expectNumber: '202104140803',
        data: [8, 13, 1, 16, 6, 32, 5, 0, 20, 3]
      },
      {
        expectNumber: '202104140802',
        data: [20, 0, 3, 4, 5, 10, 1, 2, 6, 9]
      },
      {
        expectNumber: '202104140802',
        data: [6, 4, 0, 3, 58, 2, 13, 17, 8, 1]
      },
      {
        expectNumber: '202104140802',
        data: [3, 5, 9, 1, 10, 13, 2, 12, 11, 0]
      },
    ]
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  methods: {
    createTbody() {
      var tbody = "";
      var thead = "<tr>";
      for (var i = 1; i <= this.rowNumber; i++) {
        thead += `<th>H${i}</th>`
        tbody += `<tr>`
        for (var j = 1; j <= this.rowNumber; j++) {
          tbody += `<td id="T${i}_${j}" >${j}</td>`
        }
        tbody += `</tr>`
      }
      thead += `</tr>`
      const theadEle = document.querySelector('#zstable thead')
      const tbodyEle = document.querySelector('#zstable tbody')
      theadEle.innerHTML = thead
      tbodyEle.innerHTML = tbody
    },
    drawLine() {
      let ids = ''
      ids = this.openNumber
      this.createLine(ids, 20, '#dcbd85', 'canvasdiv', '#dcbd85')
    },
    createLine(ids, w, c, div/* , bg */) {
      var list = ids.split(",")
      console.log(list)
      for (var j = list.length - 1; j > 0; j--) {
        var tid = document.querySelector(`#T${j}_${Number(list[j])}`)
        var fid = document.querySelector(`#T${j - 1}_${Number(list[j - 1])}`)
        var f_width = fid.offsetWidth
        var f_height = fid.offsetHeight
        var f_top = fid.offsetTop
        var f_left = fid.offsetLeft
        var t_top = tid.offsetTop
        var t_left = tid.offsetLeft
        var cvs_left = Math.min(f_left, t_left)
        var cvs_top = Math.min(f_top, t_top)
        // canvas
        var cvs = document.createElement("canvas")
        cvs.width = Math.abs(f_left - t_left) < w ? w : Math.abs(f_left - t_left)
        cvs.height = Math.abs(f_top - t_top)
        cvs.style.position = "absolute"
        cvs.style.top = cvs_top + parseInt(f_height / 2) + "px"
        cvs.style.left = cvs_left + parseInt(f_width / 2) + "px"
        // cvs.getContext 用于判断 canvas 浏览器是否兼容
        var cxt = cvs.getContext("2d");
        cxt.save();
        cxt.strokeStyle = c;
        cxt.lineWidth = 1;
        cxt.lineJoin = "round";
        cxt.beginPath();
        const fix1px = function(width) {
          // 线宽为奇数时，1px的宽度会模糊, 解决方法：增加0.5px
          width = parseInt(width)
          return width % 2 === 0 ? width : width + 0.5
        }
        cxt.moveTo(fix1px(f_left - cvs_left), fix1px(f_top - cvs_top));
        cxt.lineTo(fix1px(t_left - cvs_left), fix1px(t_top - cvs_top));
        cxt.closePath();
        cxt.stroke();
        cxt.restore();
        const divEle = document.querySelector(`#${div}`)
        divEle.appendChild(cvs);
      }
    }
  }
}
</script>
<style lang="less" scoped>
.lottery{
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

#zstable{
  width: 100%;
  color: #fff;
  border-collapse: collapse;
  border: 1px solid #DCBD85;
  background: #1A1A1A;
  /deep/ #thead, /deep/ #tbody{
    th, td{
      width: 24px;
      height: 24px;
      text-align: center;
      position: relative;
    }
    tr.gray{
      background: #333333;
    }
    tr.grayer{
      background: #444444;
    }
    td .active{
      display: inline-block;
      width: 22px;
      height: 22px;
      line-height: 22px;
      color: #111;
      text-align: center;
      border-radius: 50%;
      background: #DCBD85;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
    }
  }
}
</style>