<template>
  <div id="PDF">
    <div class="pdfBtn" v-show="!PDFShow">
      <head-top id="header">
        <i slot="left" class="iconfont icon-back"></i>
        <span slot="title">szjSmiling</span>
        <i slot="right" class="iconfont icon-file" ></i>
      </head-top>
      <div><img src="../assets/logo.png"></div>
      <mt-button @click.native="handleClick" type="danger">
        <i class="iconfont icon-wenjian"></i>
        跳转到PDF
      </mt-button>
      <foot-end></foot-end>
    </div>
    <pdf v-show="PDFShow" @close="closeBox"></pdf>
  </div>
</template>
<script>
import headTop from "@/components/head/header.vue";
import footEnd from "@/components/foot/footer.vue";
import pdf from "@/components/pdf.vue";
import { Indicator,Toast } from "mint-ui";
export default {
  components: {
    headTop,
    footEnd,
    pdf
  },
  data() {
    return {
      PDFShow: false,
      loadType: ["fading-circle", "snake", "double-bounce", "triple-bounce"]
    };
  },
  created() {},
  methods: {
    handleClick() {
      let type = Math.floor(Math.random()*4);
      Indicator.open({
        text: "加载中...",
        spinnerType: this.loadType[type]
      });
      setTimeout(() => {
        Indicator.close();
        this.PDFShow = true;
      }, 1000);
    },
    closeBox(data) {
      this.PDFShow = data;
    }
  }
};
</script>
<style lang="less" scoped>
#PDF {
  .pdfBtn{
    padding-top:2rem;
  }
}
</style>
