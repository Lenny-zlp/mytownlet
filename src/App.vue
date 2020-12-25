<template>
  <div id="nav">
    <!-- <tab-bar></tab-bar> -->
  </div>
  <router-view/>
</template>

<script>

// import TabBar from '@/components/TabBar'
export default {
  // components: {
  //   TabBar
  // }
}
</script>

<style lang="less">
  * {
      margin: 0;
      padding: 0;
    }
  html,body{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  input{
    border: none;
    outline: none;
    -webkit-appearance: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  textarea{
    border: none;
    outline: none;
  }
  button{
    border: none;
    outline: none;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #000;
  }
  i, em {
    font-family: none;
  }
</style>
