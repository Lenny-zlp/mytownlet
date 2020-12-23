<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'

export default {
  setup () {
    const router = useRouter()
    const value = ref('')
    const onSearch = (val) => {
      Toast(val)
    }
    const onCancel = () => {
      Toast('取消')
      router.back()
    }
    return {
      value,
      onSearch,
      onCancel
    }
  }
}
</script>

<style>

</style>
