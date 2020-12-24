<template>
  <div class='category'>
    <router-link to="/search" class="search">
        <div class="box">
          <van-icon name="search" size="20" />
          <span>{{keyword}}</span>
        </div>
    </router-link>
    <div class="product">
      <van-sidebar class="navs" v-model="active">
        <template v-for="(item,index) in navs" :key="index">
          <van-sidebar-item :title="item.CategoryName" @click="clickNavs(item.Categoryid)"/>
        </template>
      </van-sidebar>
      <van-list
        class="productcont"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item,index) in productList" :key="index">
          <div class="productList">
            <div class="img"><van-image width="100" height="100" lazy-load :src="item.Img" /></div>
            <div class="fr">
              <div class="title">{{item.ProductName}}</div>
              <div class="txt">{{item.ProductOtherName}}</div>
              <div class="price">{{item.Price}}</div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>

import { onMounted, ref, reactive, toRefs } from 'vue'
import { getnavs, getlist } from '@/utils/api'

export default {
  setup () {
    const active = ref(0)
    const state = reactive({
      keyword: '',
      navs: [],
      productList: [],
      list: [],
      loading: false,
      finished: false,
      categoryid: 2,
      page: 1
    })

    const clickNavs = (id) => {
      state.productList = []
      state.finished = false
      getListcont(id, 1)
    }
    const onLoad = async () => {
      getListcont(state.categoryid, state.page)
      // state.loading = false
      // if ()
      console.log(state.loading)
    }
    const getListcont = async (id, page) => {
      const data = {
        categoryid: id,
        page: page,
        pagesize: 10
      }
      await getlist(data).then(res => {
        console.log(res.data.data.ProductList)
        const { ProductList } = res.data.data
        if (ProductList.length > 0) {
          state.productList = [...state.productList, ...ProductList]
          state.page += 1
          state.loading = false
        } else {
          state.finished = true
        }
      })
      // return data
    }
    onMounted(async () => {
      await getnavs().then(res => {
        state.keyword = res.data.data.keyword
        state.navs = res.data.data.list
        // console.log(state.navs)
      })
      // getListcont(state.categoryid, 1)
    })
    return {
      ...toRefs(state),
      onLoad,
      active,
      getListcont,
      clickNavs
    }
  }
}
</script>

<style scoped lang='less'>
.category {
  width: 100%;
  .search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    box-sizing: border-box;
    z-index: 1;
    background-color: #fff;
    .box {
      width: 94%;
      display: flex;
      align-items: center;
      margin: 10px auto;
      padding: 5px 10px;
      background-color: #eee;
      border-radius: 6px;
      box-sizing: border-box;
      span {
        flex: 1;
        color: #ccc;
        text-align: center;
      }
    }
  }
  .product {
    display: flex;
    padding-top: 50px;
    .navs {
      width: 18%;
      height: 100%;
      background: #fff;
      position: fixed;
      z-index: 1;
      top: 50px;
    }
    .productcont {
      width: 82%;
      padding-left: 18%;
      padding-bottom: 60px;
      .productList {
        display: flex;
        .fr {
          flex: 1;
          margin-left: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .title {
            width: 100%;
            font-size: 14px;
            color: #303030;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 10px;
          }
          .txt {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
