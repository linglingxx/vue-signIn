import Vue from 'vue'
import Router from 'vue-router'
import signInComponent from './pages/signIn/index.vue'
import homeComponent from './pages/home/index.vue'
import allReceiverComponent from './pages/home/children/allReceiver.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/signin'},
    { path: '/signin', component: signInComponent },
    { 
      path: '/home', 
      component: homeComponent,
      redirect: '/home/allreceiver',
      children: [
        { path: 'allreceiver', component: allReceiverComponent }
      ]
    }
  ]
})
