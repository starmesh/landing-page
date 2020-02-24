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
    component: () => import('../components/Blockchain.vue')
  },
  {
    path: '/why-dao',
    name: 'dao',
    component: () => import('../components/Dao.vue')
  },
  {
    path: '/why-ai',
    name: 'ai',
    component: () => import('../components/Ai.vue')
  },
  {
    path: '/technical-stack',
    name: 'techstack',
    component: () => import('../components/Tech.vue')
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import('../components/Marketplace.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../components/Team.vue')
  }
]

export default paths