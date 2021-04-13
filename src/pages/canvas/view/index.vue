<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-12 14:51:55
-->
<template>
  <div class="container">
    <table id="thead" border="0">
      <thead id="lottery-head">
        <tr>
          <th class="thead-th"
            v-for="head of thead"
            :key="head.id">{{head.text}}</th>
        </tr>
      </thead>
      <tbody id="lottery-body"></tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thead: [],
      tbody: []
    }
  },
  created() {
    for(let i = 1; i <= 15; i++) {
      this.thead.push({ id: i, text: `H${i}` })
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
#thead{
  width: 100%;
  margin-top: 10px;
}
thead{
  width: 100%;
  td, th{
    border: 1px solid #d8d8d8;
  }
  tr{
    width: 100%;
    display: flex;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .thead-th{
    display: block;
    width: 60px;
    height: 25px;
    line-height: 25px;
  }
}
</style>