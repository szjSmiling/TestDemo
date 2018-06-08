<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created: function() {
    console.log("the hook of created is done!");
  },
  mounted: function() {
    console.log("the hook of mounted is done!");
  },
  activated: function() {
    console.log("the hook of activated is done!");
  },
  deactivated: function() {
    console.log("the hook of deactivated is done!");
  }
};
</script>
<style lang="less">
@import "./assets/css/common.css";
@import "./assets/css/reset.css";

#app {
  font-family: Helvetica, Arial, sans-serif, "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

@font-face {
  font-family: "WebRupee";
  src: url("./assets/font/WebRupee.V2.0.ttf");
}

#app > div {
  // height: 100%;
}

.rs {
  font-family: "WebRupee";
  font-weight: normal;
  margin-right: 0.2rem;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

input,
select {
  border: none;
  border-radius: 4px;
}

.mt-range-progress {
  background-color: #ffad3d !important;
}

.mint-indicator-text {
  color: #ffad3d !important;
  font-size: 0.6rem !important;
  line-height: 1rem;
}

.mint-popup {
  border-radius: 0.4rem;
}

.mint-indicator {
  position: fixed;
  z-index: 20;
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.mint-radio-input:checked + .mint-radio-core {
  background-color: #fff !important;
  border-color: #ccc !important;
}

.mint-radio-input:checked + .mint-radio-core::after {
  background-color: #ffa033 !important;
}

.mint-radiolist,
.mint-cell-wrapper,
.mint-radiolist-label {
  padding: 0 !important;
}

.mint-radio-label {
  font-size: 0.52rem;
}

.swiper-slide {
  width: 100% !important;
}
</style>
