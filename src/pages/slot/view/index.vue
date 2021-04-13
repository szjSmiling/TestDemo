<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-19 13:55:31
-->
<template>
  <div class="container">
    <van-tabs v-model="active" swipeable>
      <van-tab title="插槽">
        <h2>作用：让组件变得灵活，利于拓展，自定义局部内容和样式</h2>
        <NormalSlot />
        <NormalSlot :fromParent="msg1">
          父组件传递内容替换插槽默认内容0
        </NormalSlot>
      </van-tab>

      <van-tab title="具名插槽">
        <h2>作用：让组件可以同时使用多个插槽</h2>
        <NamedSlot />
        <NamedSlot :fromParent="msg2">
          不被包裹的内容 替换 默认内容0
          <template #namedSimple>
            <p>写法1：父组件传递内容到插槽</p>
          </template>
          <template v-slot:namedSimple2>
            <p>写法2：父组件传递内容到插槽</p>
          </template>
          <p slot="named">写法3：父组件传递内容到插槽</p>
        </NamedSlot>
      </van-tab>

      <van-tab title="作用域插槽">
        <h2>作用：让插槽内容能够访问子组件中才有的数据</h2>
        <ScopedSlot :fromParent="msg3">
          不被包裹的内容 替换 默认内容0
          <template v-slot:scoped="{text}">
            <p>写法1：父组件传递内容到插槽，使用插槽传递的数据：<br>{{text}}</p>
          </template>
        </ScopedSlot>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Button, Tab, Tabs } from 'vant';

export default {
  name: 'slot-use',
  components: {
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    NormalSlot: () => import('../component/normal'),
    NamedSlot: () => import('../component/named'),
    ScopedSlot: () => import('../component/scoped')
  },
  data () {
    return {
      msg1: 'from parent',
      msg2: 'from parent',
      msg3: 'from parent',
      active: 0
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
* button{text-align: center;}
.container /deep/ .van-tabs {
  .van-tabs__line{
    background: #1989fa;
  }
  .van-tabs__content{
    margin-top: 10px;
    h2{
      margin-bottom: 10px;
    }
  }
}
</style>