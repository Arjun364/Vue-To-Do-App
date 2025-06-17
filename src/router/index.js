import { createRouter,createWebHistory } from "vue-router";
import  routes  from './routes'  // Changed this line

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,_from,next)=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  next()
})

export default router;