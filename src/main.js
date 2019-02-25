import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 将Axios挂载到Vue的原型中
import axios from 'axios'
Vue.prototype.$http = axios

// 完整引入
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
import { Form, Input, FormItem, Message, Button, Loading, Row, Col, Menu, Submenu, MenuItem, MenuItemGroup, Table, TableColumn } from 'element-ui'
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Loading.directive)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message



// 初始化 css 样式
import './styles/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
