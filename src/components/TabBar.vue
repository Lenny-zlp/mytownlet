<template>
  <div class='tabbar'>
    <ul>
      <router-link to="/home" tag="li" class="li" active-class="active">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li" class="li" active-class="active">
        <i class="iconfont icon-classifi-copy"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/shopcart" tag="li" class="li" active-class="active">
        <i class="iconfont icon-gwc"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/user" tag="li" class="li" active-class="active">
        <i class="iconfont icon-gerenzhongxinhui"></i>
        <span>会员中心</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'>
  .tabbar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #fff;
    ul {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: center;
      .li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      i {
        font-size: 22px;
      }
      span {
        font-size: 14px;
      }
      .active {
        color: #eb5902;
      }
    }
  }
</style>
