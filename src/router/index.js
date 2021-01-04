import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import ErrorPage from '../views/404.vue'

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
  },
  {
    path: '*',
    name: '404',
    component: ErrorPage,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
