<template>
	<div id="footer">
    <div class="foot-content">
      <p>
        <span @click="$router.push('/')">T &amp; C</span>
        <span @click="$router.push('/')">Privacy</span>
        <span @click="$router.push('/')">About Us</span>
        <span @click="$router.push('/')">Contact Us</span>
      </p>
      <p>2018-2019© szjSmiling.com. All Rights Reserved</p>
    </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  }
};
</script>
<style lang="less" scoped>
#footer {
    width: 100%;
    height:80px;
    display: table;
    position: fixed;
    bottom: 0;
    background-color: #0b9d78;
  .foot-content{
    display: table-cell;
    vertical-align: middle;
    p {
      font-size: 0.8rem;
      color: #fff;
      margin: 0.2rem 0;
      span {
        border-right: 1px solid #fff;
        display: inline-block;
        padding: 0 0.2rem;
      }
      span:nth-child(4) {
        border-right: none;
      }
    }
  }
}
</style>
