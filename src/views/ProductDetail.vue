<template>
  <div class='Product'>
    商品详情页
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getproduct } from '@/utils/api'
export default {
  name: 'Product',
  setup () {
    const route = useRoute()
    const state = reactive({
    })
    onMounted(async () => {
      const { productcode } = route.params
      const user = localStorage.getItem('user')
      const data = {
        UserId: user.userid,
        userRatingId: user.userRatingId,
        sku: productcode,
        groupid: 0,
        grouplogid: 0,
        v: 'v6'
      }
      await getproduct(data).then(res => {
        console.log(res)
      })
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang='less'></style>
