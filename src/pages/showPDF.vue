<template>
  <div id="PDF">
    <div class="pdfBtn" v-show="!PDFShow">
      <head-top id="header">
        <i slot="left" class="iconfont icon-back"></i>
        <span slot="title">szjSmiling</span>
        <i slot="right" class="iconfont icon-file" ></i>
      </head-top>
      <div><img src="../assets/logo.png"></div>
      <button @click="handleClick" type="danger">
        <i class="iconfont icon-wenjian"></i>
        跳转到PDF
      </button>
      <foot-end></foot-end>
    </div>
    <pdf v-show="PDFShow" @close="closeBox"></pdf>
  </div>
</template>
<script>
import headTop from "@/components/head/header.vue";
import footEnd from "@/components/foot/footer.vue";
import pdf from "@/components/pdf.vue";
export default {
  components: {
    headTop,
    footEnd,
    pdf
  },
  data() {
    return {
      PDFShow: false,
    };
  },
  methods: {
    handleClick() {
      this.PDFShow = true;
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
