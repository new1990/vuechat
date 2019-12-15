import Vue from 'vue'
import VueRouter from 'vue-router'
import TopList from '@/components/TopList' //コンポーネントを読み込む
import Content from '@/components/Content' //コンポーネントを読み込む
import NewRoom from '@/components/NewRoom' //コンポーネントを読み込む
import Login from '@/components/Login' //コンポーネントを読み込む

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'TopList',
      component: TopList
    },
    { path: '/content/:id',
      name: 'content',
      component: Content },
    {
      path: '/new',
      name: 'newroom',
      component: NewRoom
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
