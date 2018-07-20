<template>
  <div id="PDF">
    <div class="pdfBtn" v-show="!PDFShow">
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
