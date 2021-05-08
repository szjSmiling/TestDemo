<template>
  <div class="container main">
    <!-- <div class="exchange-chip"
         @click="exchange"></div> -->

    <div class="super-win-main">
      <div class="question">?</div>

      <!-- 总筹码 -->
      <!-- <div class="total-prize-pool">
        <img src="../assets/superWin/chip.png"
             alt="">
        <span>{{ realtotalmonery }}</span>
      </div> -->

      <!-- 灯带 -->
      <!-- <div class="light-line"
           v-show="lightShow1">
        <img src="../assets/superWin/light1.png"
             alt="">
      </div> -->

      <!-- <div class="light-line two"
           v-show="lightShow2">
        <img src="../assets/superWin/light2.png"
             alt="">
      </div> -->


      <!-- 老虎机主体 -->
      <button @click="start">start</button>
      <div class="list">
        <ul class="prizeList"
            v-for="item in testLit"
            :key="item.id"
            ref="slots">
          <div class="slot__wrap" :style="{height: prizeNum * 33}">
            <li class="prize-item"
                v-for="(slot, index) in item.items"
                :key="index">
              <!-- <img :src="slot"
                   alt=""> -->
                 <div>{{slot}}</div>
            </li>
            <template v-for="prize in prizeNum">
              <li class="prize-item" :key="'item_copy'+prize">
                <div>{{item.items[prize]}}</div>
              </li>
            </template>
            <!-- <li class="prize-item">
              <img :src="item.items[1]"
                   alt="">
            </li>
            <li class="prize-item">
              <img :src="item.items[2]"
                   alt="">
              <div>{{slot}}</div>
            </li>
            <li class="prize-item">
              <img :src="item.items[3]"
                   alt="">
            </li>
            <li class="prize-item">
              <img :src="item.items[4]"
                   alt="">
            </li> -->
          </div>
        </ul>
      </div>

      <!-- canvas画布 -->
      <!-- <canvas id="canvas"></canvas> -->

      <!-- 按钮组 -->
      <!-- <ul class="btn-groups">
        <li class="btn-item"
            @click="reduceChip">
          <img src="../assets/superWin/reduceChip.png"
               alt="">
        </li>
        <li class="btn-press"
            :class="isClick ? 'btn-pressed' : ''"
            @click="press">{{ chipNum }}</li>
        <li class="btn-item"
            @click="addChip">
          <img src="../assets/superWin/addChip.png"
               alt="">
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>

const next = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.msRequestAnimationFrame
  || window.oRequestAnimationFrame
  || function (cb) {
    window.setTimeout(cb, 10000 / 60)
  }

export default {
  name: 'superWin',
  data () {
    return {
      prizeList: [],
      prizeNum: 5,
      testLit: [
        {
          id: 0,
          title: "When",
          items: ["today", "next week", "last year", "tomorrow", "yesterday"],
        },
        {
          id: 1,
          title: "Where",
          items: [
            "at home",
            "at work",
            "at school",
            "at the gym",
            "at the park",
            "at the beach",
            "at the sidewalk",
            "at the city",
          ],
        },
        {
          id: 2,
          title: "How",
          items: ["cycling", "walking", "swimming", "flying", "running", "climbing"]
        }
      ],
      classOption: {
        step: 0.5
      },
      chipNum: 100,
      lightShow1: true,
      lightShow2: false,
      isClick: false,
      isOver: true,
      timer: null,

      // 老虎机test
      opts: null,
      startedAt: null
    }
  },
  methods: {
    // 兑换筹码
    exchange () {
      // this.$refs.changed.onchange()
    },

    // 减少筹码
    reduceChip () {
      if (this.chipNum <= 100) {
        return
      } else {
        this.chipNum -= 100
      }
    },

    // 增加筹码
    addChip () {
      this.chipNum += 100
    },

    // 按下按钮
    press () {
      if (this.isOver) {
        this.isOver = false
        this.isClick = !this.isClick
        setTimeout(() => {
          this.isClick = !this.isClick
        }, 50)

        // console.log(this.chipNum);
        // let a = {
        //   chip: this.chipNum
        // }
        // this.$store.commit('totalmonery1', a)

        // this.start()
        this.isOver = true

        new Promise((resolve, reject) => {
          resolve('resolve')
        }).then(() => {
          this.draw()
        })
      }
    },

    // 老虎机
    start () {
      if (this.opts) {
        return
      }
      this.opts = this.testLit.map((data, i) => {
        const slot = this.$refs.slots[i] // map(function(){})利用map便利slots的每一个选项组,最终得到return的返回值
        const itemHeight = document.getElementsByClassName('prize-item')[0].offsetHeight
        console.log(itemHeight)
        const choice = Math.floor(Math.random() * data.items.length) // 随机生成一个[0,data.items.length]的整数(floor向下取整)
        const opts = {
          el: slot.querySelector(".slot__wrap"), //指向奖项元素的父级
          finalPos: choice * itemHeight, // itemHeight 为每一个奖品滚动标签的高度
          startOffset: 1000 + Math.random() * 500 + i * 500, // 影响转的圈数
          height: data.items.length * itemHeight,
          duration: 3000 + i * 700, // milliseconds
          isFinished: false
        };
        return opts
      })
      next(this.animate)
    },

    animate (timestamp) {
      if (this.startedAt == null) {
        // 动画初始时间
        this.startedAt = timestamp
      }
      //动画持续的时间
      const timeDiff = timestamp - this.startedAt
      this.opts.forEach((opt) => {
        if (opt.isFinished) {
          return
        }
        // 总的持续时间 - 动画持续时间 = 剩下的时间, 0表示结束
        const timeRemaining = Math.max(opt.duration - timeDiff, 0)
        const power = 3
        // Math.pow(timeRemaining, power)表示: timeRemaining的3次幂
        const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
        opt.el.style.transform = `translateY(${pos}px)`
        if (timeDiff > opt.duration) {
          opt.isFinished = true;
        }
      })
      if (this.opts.every((o) => o.isFinished)) {
        this.opts = null
        this.startedAt = null
      } else {
        next(this.animate)
      }
    },

    // 画线
    draw () {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      // 每个水果的宽高
      const itemWidth = document.getElementsByClassName('prize-item')[0].offsetWidth
      const itemHeight = document.getElementsByClassName('prize-item')[0].offsetHeight
      const halfWidth = itemWidth / 2
      const halfHeight = itemHeight / 2
      // 水果间距
      const itemMargin = 10
      ctx.beginPath()
      ctx.strokeStyle = "#fff"
      ctx.moveTo(halfWidth, halfHeight)
      ctx.lineTo(itemWidth + itemMargin, itemHeight / 2)
      ctx.stroke()
    }
  },
  beforeDestory () {
    clearInterval(this.timer)
  }
}
</script>

<style lang='less' scoped>
.main {
  padding-bottom: 60px;
  height: 100%;
  background-color: #000;
}

.exchange-chip {
  position: fixed;
  left: 10px;
  margin-top: 6px;
  z-index: 99;
  width: 73px;
  height: 73px;
  // background: url("../assets/exchange1.png") no-repeat center;
  background-size: 100% 100%;
}

.super-win-main {
  position: relative;
  margin-top: 16px;
  width: 100%;
  height: 567px;
  // background: url("../assets/superWin/main.png") no-repeat center;
  background-size: 100% 100%;
}

.question {
  position: absolute;
  top: 39px;
  right: 50px;
  width: 24px;
  height: 24px;
  opacity: 0.5;
  border: 2px solid #fdc606;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  color: #fdc606;
}

.total-prize-pool {
  display: flex;
  align-items: center;
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 39px;
    height: 27px;
  }

  span {
    margin-left: 10px;
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;
  }
}

.light-line {
  position: absolute;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  height: 328px;

  img {
    width: 100%;
    height: 100%;
  }
}

.two {
  width: 350px;
  top: 66px;
}

.vue-scroll {
  position: absolute;
  top: 171px;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 2px;
  width: 173px;
  height: 112px;
  overflow: hidden;

  .price-item {
    margin-bottom: 2px;
    width: 100%;
    height: 28px;
    background: #7d23da;
    border-radius: 3px;

    .person-get {
      float: left;
      margin-left: 6px;
      color: #fff;
      line-height: 28px;
    }

    .get-things {
      float: right;
      margin-right: 5px;
      width: 80px;

      .get-things-img {
        margin-top: 4px;
        height: 8px;
        line-height: 0;

        img {
          margin-right: 2px;
          width: 13px;
          height: 8px;
        }
      }

      .total-win {
        display: flex;
        align-items: center;
        margin-top: 2px;
        width: 67px;
        height: 10px;
        background: #371f44;
        border-radius: 10px;
        font-size: 16px;

        img {
          margin-left: 3px;
          width: 8px;
          height: 7px;
        }

        span {
          color: #fff;
          line-height: 10px;
          transform: scale(0.5, 0.5);
        }
      }
    }
  }

  .price-item:nth-child(2n) {
    background: #3a0190;
  }
}

.price-panel::-webkit-scrollbar {
  display: none;
}

.list {
  position: relative;
  top: 300px;
  padding: 0 62px;
  height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  background: #fff;
}

.prizeList {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // position: absolute;
  // left: 62px;
  // top: 300px;
  // overflow: hidden;
  // height: 170px;
  width: 42px;

  .prize-item {
    margin-bottom: 1px;
    width: 42px;
    height: 33px;
    padding: 10px 0 0;
    box-sizing: border-box;
    background: blue;
    text-align: center;
    overflow: hidden;
    div{
      height: 23px;
      line-height: 23px;
      overflow: hidden;
      white-space: nowrap;
      background: red;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

// .list .prizeList:nth-child(2) {
//   // left: 114px;

//   .prize-item {
//     width: 43px;
//   }
// }

// .list .prizeList:nth-child(3) {
//   // left: 168px;
// }

// .list .prizeList:nth-child(4) {
//   // left: 220px;
// }

// .list .prizeList:nth-child(5) {
//   // left: 272px;
// }

.prizeList::-webkit-scrollbar {
  display: none;
}

.prizeList0 {
  animation: prizeList0 1s infinite;
}

.btn-groups {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  .btn-item {
    width: 29px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .btn-press {
    width: 194px;
    height: 66px;
    // background: url("../assets/superWin/press.png") no-repeat center;
    background-size: 100% 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 66px;
    text-indent: 2em;
    color: #3a0e5f;
  }

  .btn-pressed {
    // background: url("../assets/superWin/nopress.png") no-repeat center;
    background-size: 100% 100%;
  }
}

#canvas {
  position: absolute;
  top: 300px;
  padding: 0 62px;
  box-sizing: border-box;
  width: 100%;
  height: 170px;
}
</style>
