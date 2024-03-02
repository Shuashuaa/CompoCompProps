import { createRouter, createWebHistory } from 'vue-router'
import TableComp from '../components/TableComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tablecomp',
      component: TableComp
    },
  ]
})

export default router
