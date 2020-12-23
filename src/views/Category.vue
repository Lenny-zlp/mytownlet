<template>
  <div class='category'>
    <router-link to="search"><van-search disabled  placeholder="请输入搜索关键词" /></router-link>
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="55vw"
      :items="items"
    >
      <template #content>
        <div v-if="activeIndex === 0">分组 1</div>
        <div v-if="activeIndex === 1">分组 2</div>
        <div v-if="activeIndex === 2">分组 3</div>
        <div v-if="activeIndex === 3">分组 4</div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    const activeIndex = ref(0)
    return {
      activeIndex,
      items: [{ text: '分组 1' }, { text: '分组 2' }, { text: '分组 3' }, { text: '分组 4' }]
    }
  }
}
</script>

<style scoped lang='less'></style>
