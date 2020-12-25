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
    <van-tabs swipeable @change="navsChange" v-model:active="active">
      <van-tab class="pageCont" v-for="(item,index) in menu" :key="index" :title="item.PageName">
        <div class="contbox">
          <!-- 首页 -->
          <template v-if="isHome">
            <!-- 轮播图 -->
            <template v-for="(v,i) in item.cont" :key="i">
              <van-swipe :autoplay="3000" indicator-color="#eb5902" lazy-render v-if="v.ModuleType===1" class="mySwipe">
                <van-swipe-item v-for="(image, idx) in v.Module" :key="idx">
                  <img :src="image.Img" />
                </van-swipe-item>
              </van-swipe>
              <!-- 轮播图 / -->
              <!-- 小镇市集模块 -->
              <div class="weekly item" v-if="v.ModuleType===21">
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 小镇市集模块 /-->
              <!-- 限时购模块 -->
              <div class="item" v-if="v.ModuleType===11">
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(time, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="time.Product.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 限时购模块 /-->
              <!-- 双十一预订模块 -->
              <div class="item" v-if="v.ModuleType===17">
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 双十一预订模块 /-->
              <!-- 16模块 -->
              <div class="item" v-if="v.ModuleType===16">
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 16模块 /-->
              <!-- 竖版产品模块 -->
              <div class="item" v-if="v.ModuleType===3">
                竖版产品模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 竖版产品模块 /-->
              <!-- 竖版产品模块 -->
              <div class="item" v-if="v.ModuleType===2">
                竖版产品模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 竖版产品模块 /-->
              <!-- 热卖商品模块 -->
              <div class="item" v-if="v.ModuleType===9">
                热卖商品模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 热卖商品模块 /-->
              <!-- 18模块 -->
              <div class="item" v-if="v.ModuleType===18">
                18模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 18模块 /-->
              <!-- 14模块 -->
              <div class="item" v-if="v.ModuleType===14">
                14模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 14模块 /-->
              <!-- 19模块 -->
              <div class="item" v-if="v.ModuleType===19">
                19模块
                <div class="title" v-if="v.Title">{{v.Title}}</div>
                <template v-for="(weekly, i) in v.Module" :key="i">
                  <div class="img">
                    <img :src="weekly.Img" alt="">
                  </div>
                </template>
              </div>
              <!-- 19模块 /-->
            </template>
          </template>
          <!-- 其它页 -->
          <template v-else>
            {{item.cont}}
          </template>
        </div>
      </van-tab>
    </van-tabs>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import { onMounted, reactive, toRefs } from 'vue'
import { page, topic } from '@/utils/api'

export default {
  name: 'Home',
  components: {
    TabBar
  },
  setup () {
    const state = reactive({
      keyword: '请输入搜索内容',
      menu: [{ Code: '467', PageName: '首页', currentIndex: 0 }],
      cont: [],
      code: 467,
      isHome: false,
      active: ''
    })
    onMounted(async () => {
      localStorage.setItem('user', '{"userid":133926,"username":"001-11-01","nickName":"Mr. Hu","head":"http://cache.jiangxinxiaozhen.com/UserHead/2019/6/21/2019_6_21_16_46_7_5552.jpg?x-oss-process=image/resize,w_120","mobile":"13121291907","loginName":"33009","shopcode":"kSZ7Nk8O","shareShopCode":"kSZ7Nk8O","userRatingId":3,"shopId":11345,"status":0,"isSuperLife":0,"personName":"胡鹏鹏","rsShopId":"11345","reLoginName":"33009"}')
      await getHomedata()
      await getAlltopic()
      console.log(state.cont)
    })
    // 获取首页数据
    const getHomedata = async () => {
      await page().then(res => {
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
      })
    }
    // 获取全部分类数据
    const getAlltopic = () => {
      state.menu.forEach(async (v, i) => {
        if (v.Code === '467') {
          v.cont = state.cont
        } else {
          const topicdata = { id: v.Code, wxsource: 1 }
          await topic(topicdata).then(res => {
            v.cont = res.data.data
          })
        }
      })
    }
    // 页面切换
    const navsChange = (i) => {
      if (i === 0) {
        state.isHome = true
      } else {
        state.isHome = false
      }
    }
    return {
      ...toRefs(state),
      getAlltopic,
      getHomedata,
      navsChange
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
      overflow: scroll;
      padding-bottom: 60px;
    }
    .contbox {
      // padding: 0 10px;
      width: 96%;
      margin: auto;
      overflow: hidden;
      .mySwipe {
        width: 100%;
        height: 150px;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 10px;
        img {
          width: 100%;
          height: 150px;
        }
      }
      .item {
        margin-top: 10px;
        .img {
          border-radius: 10px;
          overflow: hidden;
          height: 186px;
          img {
            width: 100%;
            height: 186px;
          }
        }
        .title {
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }

</style>
