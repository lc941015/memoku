import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import apptList from '@/pages/apptList'
import agreement from '@/pages/agreement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/apptList',
      name: 'apptList',
      component: apptList
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    }

  ]
})
