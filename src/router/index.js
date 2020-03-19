import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Services from '@/pages/Services'
import Todo from '@/pages/Todo'
import cardDetails from '@/components/cardDetails'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/services/:id',
      name: 'cardDetails',
      component: cardDetails,
      props: true,
    }
  ],
  mode: "history"
})
