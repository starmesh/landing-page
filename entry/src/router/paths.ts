import Index from '@/components/Index.vue'; 

const paths = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/why-blockchain',
    name: 'blockchain',
    component: () => import(/* webpackChunkName: "about" */ '../components/Blockchain.vue')
  },
  {
    path: '/why-dao',
    name: 'dao',
    component: () => import(/* webpackChunkName: "about" */ '../components/Dao.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default paths