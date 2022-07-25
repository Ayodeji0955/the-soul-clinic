import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Navbar from '../components/Navbar.vue'
import Soulful from '../components/Soulful.vue'
import Clients from '../components/Clients.vue'
import Solution from '../components/Solution.vue'
import Learn from '../components/Learn.vue'
import Donate from '../components/Donate.vue'
import FAQ from '../components/FAQ.vue'
import Events from '../components/Events.vue'
import Footer from '../components/Footer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/banner',
    name: 'Banner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Banner.vue')
    }
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
  },
  {
    path: '/soulful',
    name: 'Soulful',
    component: Soulful,
  },
  {
    path: '/Clients',
    name: 'Clients',
    component: Clients,
  },
  {
    path: '/Solution',
    name: 'Solution',
    component: Solution,
  },
  {
    path: '/Learn',
    name: 'Learn',
    component: Learn,
  },
  {
    path: '/Donate',
    name: 'Donate',
    component: Donate,
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/Footer',
    name: 'Footer',
    component: Footer,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
