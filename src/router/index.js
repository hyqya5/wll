import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabBar',
    redirect: '/homeBar',
    component: () => import('@/views/tabBar'),
    children: [
      {
        path: '/HomeBar',
        name: 'homeBar',
        redirect: '/HomeBar/RecommendBar',
        component: () => import('@/views/HomeBar'),
        children: [
          {
            path: '/HomeBar/RecommendBar',
            name: 'recommendBar',
            component: () => import('@/views/HomeBar/children/RecommendBar')
          },
          {
            path: '/HomeBar/UnscrambleBar',
            name: 'unscrambleBar',
            component: () => import('@/views/HomeBar/children/UnscrambleBar')
          },
          {
            path: '/HomeBar/NoticeBar',
            name: 'noticeBar',
            component: () => import('@/views/HomeBar/children/NoticeBar')
          },
          {
            path: '/HomeBar/SayBar',
            name: 'sayBar',
            component: () => import('@/views/HomeBar/children/SayBar')
          },
          {
            path: '/HomeBar/GoodBar',
            name: 'goodBar',
            component: () => import('@/views/HomeBar/children/GoodBar')
          },
          {
            path: '/HomeBar/DramaBar',
            name: 'dramaBar',
            component: () => import('@/views/HomeBar/children/DramaBar')
          }
        ]
      },
      {
        path: '/FilmBar',
        name: 'filmBar',
        component: () => import('@/views/HomeBar')
      },
      {
        path: '/ShowBar',
        name: 'showBar',
        component: () => import('@/views/ShowBar')
      },
      {
        path: '/SportBar',
        name: 'sportBar',
        component: () => import('@/views/SportBar')
      },
      {
        path: '/MyBar',
        name: 'myBar',
        component: () => import('@/views/MyBar')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
