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
    path: '/why-ai',
    name: 'ai',
    component: () => import(/* webpackChunkName: "about" */ '../components/Ai.vue')
  }
]

export default paths