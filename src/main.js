import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Tab, Tabs, Swipe, SwipeItem, Icon, NavBar, Search, Sidebar, SidebarItem, TreeSelect } from 'vant'
import 'vant/lib/index.css' // 全局引入样式
import 'lib-flexible/flexible'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.eot'
import '@/assets/iconfont/iconfont.svg'
import '@/assets/iconfont/iconfont.ttf'
import '@/assets/iconfont/iconfont.woff'

const app = createApp(App) // 创建实例
app.use(Button).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Icon).use(NavBar).use(Search).use(Sidebar).use(SidebarItem).use(TreeSelect)
app.use(store).use(router).mount('#app')
