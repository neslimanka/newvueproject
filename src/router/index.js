import Vue from 'vue'
import VueRouter from 'vue-router'
import appUrunListesi from '../views/UrunListesi.vue'
import appUrunIslemleri from '../views/UrunIslemleri.vue'
import appUrunCikisi from '../views/UrunCikisi'


Vue.use(VueRouter)

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
