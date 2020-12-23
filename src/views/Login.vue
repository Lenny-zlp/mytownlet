<template>
<div>
  <van-nav-bar title="登录" @click-left="onClickLeft">
    <template #left>
      <van-icon name="arrow-left" color="#323233" size="18" />
    </template>
  </van-nav-bar>
  <div class='login'>
    <img class="logo" src="../assets/images/jxxzicon.png" alt="">
    <van-button class="btn" color="#eb5902" size="large">
      <img src="../assets/images/wxicon.png" alt="">
      <span>微信登录</span>
      </van-button>
    <van-button class="btn" color="#eb5902" size="large">
      <img src="../assets/images/wxicon.png" alt="">
      <span>手机号验证码登录</span>
    </van-button>
  </div>
</div>
</template>

<script>

import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const onClickLeft = () => {
      router.back()
    }
    return {
      onClickLeft
    }
  }
}
</script>

<style scoped lang='less'>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 25%;
    margin: 20px 0 100px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 320px;
    height: 46px;
    margin-top: 20px;
    border-radius: 6px;
    img {
      width: 20px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
</style>
