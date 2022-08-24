import Vue from 'vue'
import App from './App.vue'
import {
    Button, Radio, Container, Main, Header, Aside, Menu, Submenu, MenuItemGroup, MenuItem, DropdownMenu,
    DropdownItem, Dropdown, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, FormItem, Form,
    Input,Select,Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message
} from 'element-ui';
import VueRouter from 'vue-router'
import router from './router'
import './assets/less/index.less'
import store from '../src/store'
import axios from 'axios'
import '../api/mock.js'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message=Message
Vue.prototype.$axios=axios
router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.token
    // console.log(token,'@',to.name)
    if (!token && to.name !== 'login') {
        next({name:'login'})
    } else if (token && to.name === 'login') {
        next({name:'home'})
     }
    else {
        next()
    }

})
new Vue({
    render: h => h(App),
    created() {
      store.commit('addMenu', router)  
    },
    router,
    store
}).$mount('#app')
