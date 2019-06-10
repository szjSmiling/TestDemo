<template>
  <div id="shop">
    <!-- <my-frames> -->
      <el-row>
        <el-col :sm="24" :md="24" :lg="24">
          <form class="public-con" :class="screenWidth - 760 >0?'pc-con':'mobile-con'">
            <h4>注册</h4>
            <label for="email">邮箱<br>
              <input type="text" id="email" v-model="user.email" placeholder="请输入邮箱" >
            </label>
            <label for="password">登录密码<br>
              <input type="password" id="password" v-model="user.password" placeholder="请输入密码">
            </label>
            <label for="repassword">确认密码<br>
              <input type="password" id="repassword" v-model="user.rePassword" placeholder="再次确认密码">
            </label>
            <label for="checked" class="register-terms" :class="{'checked-input': user.checked}" >我已阅读并经同意 &lt;&lt;JJLIN用户隐私协议&gt;&gt;
              <input type="checkbox" name="checked" id="checked" v-model="user.checked">
            </label>
            <input type="button" value="注册" @click="startRegister">
          </form>
        </el-col>
      </el-row>
    <!-- </my-frames> -->
  </div>
</template>
<script>
import myFrames from "@/components/frames/frames.vue";
export default {
  components: {
    myFrames,
  },
  data() {
    return {
      screenWidth: document.body.clientWidth || document.documentElement.clientWidth,
      user: {
        email: '',
        password: '',
        rePassword: '',
        checked: false
      }
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
          window.screenWidth = document.body.clientWidth || document.documentElement.clientWidth
          this.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (width) {
      // if (width <= 767) {
      //   console.log("移动端")
      // } else {
      //   console.log("PC端")
      // }
    }
  },
  methods: {
    startRegister () {
      console.log(this.user)
    }
  }
};
</script>
<style lang="less" scoped>
#shop{
  width:100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  // position: relative;
  .public-con{
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    margin:auto;
    background: #fff;
    border:1px solid #ccc;
    padding:30px 50px;
    text-align: left;
  }
  /* pc css */
  .pc-con{
    width:35%;
    max-width: 440px;
  }
  /* mobile css */
  .mobile-con{
    box-sizing:border-box;
    width:100%;
    min-width: 370px;
  }
  /* public tag */
  h4{
    margin-bottom: 20px;
  }
  label{
    display: block;
    font-size: 16px;
    margin-top: 20px;
    input{
      box-sizing: border-box;
      margin-top:20px;
      width:100%;
      height:30px;
      line-height: 30px;
      padding-left:10px;
      font-size: 12px;
      border:1px solid #ddd;
      border-radius:0;
      &::placeholder{
        font-size: 12px;
      }
    }
  }
  .register-terms{
    font-size: 12px;
    height:20px;
    line-height: 20px;
    color:#603A87;
    font-weight: bold;
    padding-left: 28px;
    position: relative;
    input{
      float: left;
      width:18px;
      height:18px;
      line-height: 20px;
      font-size:14px;
      margin: 0 10px 0 0;
    }
    &:before{
      display: inline-block;
      width:18px;
      height:18px;
      line-height: 18px;
      text-align: center;
      font-size:14px;
      margin:0;
      border-radius:50%;
      border:1px solid #aaa;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
    }
    input[type='checkbox']{
      position: absolute;
      opacity: 0;
    }
  }
  .checked-input:before{
    border-color:#603A87;
    content: "\2713"; /* 对号的 Unicode 编码 */
  }
  input[type=button]{
    display: block;
    width:260px;
    height:40px;
    line-height: 40px;
    color:#fff;
    margin: 20px auto 0;
    border-radius: 20px;
    background: #603A87;
    cursor: pointer;
  }
}
</style>
