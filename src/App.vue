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
  height: 100%;
}
.button{
  cursor: pointer;
  color:#fff;
  background: #409EFF;
  border-radius:3px;
  // border:1px solid #eee;
  padding:5px 10px;
}
.rs {
  font-family: "WebRupee";
  font-weight: normal;
  margin-right: 0.2rem;
}
img{vertical-align: top;}
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
</style>
