
import Cookie from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        //判断左侧导航栏是否收缩
        isCollapse: false,
        //判断登录状态
          token:'',
          //面貌屑数据
        tabsList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon:'home'
             }
        ],
        //左侧导航栏菜单内容
         currentMenu: null,
        menu:[]
    },
    mutations: {
         //判断左侧导航栏是否收缩
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse           
        },
        selectMenu(state,val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                   state.currentMenu=null
                }
            },
            //关闭面包屑
            closeTag(state, val){
                const result = state.tabsList.findIndex(item => item.name === val.name)
                state.tabsList.splice(result,1)
        },
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        //添加导航栏菜单内容
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            // console.log(menu);
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../components/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../components/${item.url}`)
                    menuArray.push(item)
                }
            })
            menuArray.forEach(item => {
              router.addRoute('MainShow',item)  
            })
            
        },

        //关于cookie里的token值
        setToken(state, val) {
            state.token = val
            Cookie.set('token', val)
        },
        clearToken(state) {
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state) {
            state.token=state.token||Cookie.get('token')
        }
        
        }
})