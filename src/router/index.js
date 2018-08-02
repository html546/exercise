import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue';
import Finance from '@/page/finance.vue';
import Find from '@/page/find.vue';
import Mine from '@/page/mine.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/finance',
      name:'finance',
      component:Finance
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    }
  ]
})
