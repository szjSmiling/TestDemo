<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-14 18:11:48
-->
<template>
  <div class="container">
    <van-tabs v-model="active" swipeable>
      <van-tab title="Path2D">
        <Path2D />
      </van-tab>
      <van-tab title="K线图">
        <DrawStockChart />
      </van-tab>
      <van-tab title="彩票图">
        <LotteryTrendChart />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Button, Tab, Tabs } from 'vant';
export default {
  components: {
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Path2D: () => import('./Path2D.vue'),
    DrawStockChart: () => import('./DrawStockChart.vue'),
    LotteryTrendChart: () => import('./LotteryTrendChart.vue'),
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
.container /deep/ .van-tabs {
  .van-tabs__wrap{
    border-bottom: 1px solid #ddd;
  }
  .van-tabs__line{
    background: #1989fa;
  }
  .van-tabs__content{
    h2{
      margin-bottom: 10px;
    }
  }
}
</style>