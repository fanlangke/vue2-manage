import Vue from 'vue'
import VueRouter from 'vue-router'
import MainShow from '../components/MainShow.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'MainShow',
        component: MainShow,
        redirect:'/home',
        children: [
         {
                path: '/home',
                name: 'home',
                component:()=>import('../components/home')
            },
             {
        path: '/user',
        name: 'user',
        component:()=>import('../components/user')
            },
             {
        path: '/mall',
        name: 'mall',
        component:()=>import('../components/mall')
            },
             {
        path: '/page1',
        name: 'page1',
        component:()=>import('../components/other/PageOne.vue')
            },
             {
        path: '/page2',
        name: 'page2',
        component:()=>import('../components/other/PageTwo.vue')
    }   
        ]
    },
    {
        path: '/login',
        name: 'login',
       component:()=>import('../components/login/LoginShow.vue')
    }
   
]
  export default new VueRouter({
      mode: 'history',
      routes
})