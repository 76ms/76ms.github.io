import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/post/:slug',
    name: 'SinglePost',
    component: Blog,
    props: true
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Blog,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
