import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SinglePost from '../views/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Posts',
    component: SinglePost
  }
]

const router = new VueRouter({
  routes
})

export default router
