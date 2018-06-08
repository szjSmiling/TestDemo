<template>
  <div id="PDF">
    <div v-show="!PDFShow">
      <head-top id="header">
        <i slot="left" class="iconfont icon-back"></i>
        <span slot="title">szjSmiling</span>
        <i slot="right" class="iconfont icon-doubletop" ></i>
      </head-top>
      
  </div>
</template>
<script>
import headTop from "@/components/header/header.vue";
import { Indicator } from "mint-ui";
export default {
  components: {
    headTop,
  },
  data() {
    return {
      
    };
  },
  created() {},
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
#home {
  padding-top:2rem;
}
</style>
