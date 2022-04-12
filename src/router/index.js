import Vue from 'vue'
import VueRouter from 'vue-router'
import appUrunListesi from '../views/appUrunListesi.vue'
import appUrunIslemleri from '../views/appUrunIslemleri.vue'
import appUrunCikisi from '../views/appUrunCikisi'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: appUrunListesi
  },
  {
    path: '/urun-listesi',
    name: 'urun-listesi',
    component: appUrunListesi
  },
  {
    path: '/urun-islemleri',
    name: 'urun-islemleri',
    component: appUrunIslemleri
  },
  {
    path: '/urun-cikisi',
    name: 'urun-cikisi',
    component: appUrunCikisi
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
