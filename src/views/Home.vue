<template>
  <div class="home">
    <!-- 头部 -->
    <header class="home-header">
      <div class="fl">
        <div class="infoimg"><img src="../assets/images/curOur.png" alt=""></div>
        <div class="shop">
          <span class="tit">将心小镇会员商店</span>
          <span class="code">授权编号33009</span>
        </div>
      </div>
      <router-link to="/search" class="fr">
        <span>{{keyword}}</span>
        <!-- <img src="../assets/images/add.png" alt=""> -->
        <van-icon name="search" size="20" />
      </router-link>
    </header>
    <!-- 头部 / -->
    <van-tabs v-model:active="active" swipeable @click="clicknavs">
      <van-tab class="pageCont" v-for="(item,index) in menu" :key="index" :title="item.PageName">
        {{item}}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { page, topic } from '@/utils/api'

export default {
  name: 'Home',
  setup () {
    const state = reactive({
      keyword: '请输入搜索内容',
      menu: [{ Code: '467', PageName: '首页', currentIndex: 0 }],
      cont: [],
      code: 467
    })
    onMounted(async () => {
      localStorage.setItem('user', 'info')
      const data = { source: 1 }
      await page(data).then(res => {
        state.list = res.data.data
        state.keyword = res.data.keyword
        res.data.data.forEach(v => {
          if (v.ModuleType === 10) {
            v.Module.forEach((item, index) => {
              const temp = {
                Code: v.Module[index].Code,
                PageName: v.Module[index].PageName,
                currentIndex: index + 1
              }
              state.menu.push(temp)
            })
          } else {
            state.cont.push(v)
          }
        })
        console.log('loginres', state.list)
      })
      console.log(state.menu)
      console.log(state.cont)
    })
    const clicknavs = async (index) => {
      const code = state.menu[index].Code
      console.log(code)
      const topicdata = { id: code, wxsource: 1 }
      await topic(topicdata).then(res => {
        console.log(res)
      })
    }
    return {
      ...toRefs(state),
      clicknavs
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    .home-header {
      box-sizing: border-box;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      justify-content: space-between;
      .fl {
        display: flex;
        .infoimg {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          box-sizing: border-box;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .shop {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .tit {
            line-height: 24px;
            font-size: 12px;
            color: #505050;
          }
          .code {
            padding: 0 5px;
            text-align: center;
            line-height: 18px;
            background: #eb5902;
            border-radius: 10px;
            color: #fff;
          }
        }
      }
      .fr {
        width: 46%;
        background-color: #f0f0f0;
        border-radius: 18px;
        height: 36px;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 12px;
          color: #cacaca;
          flex: 1;
          text-align: center;
          padding-right: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
    .pageCont {
      height: 540px;
      background-color: #ccc;
    }
  }

</style>
