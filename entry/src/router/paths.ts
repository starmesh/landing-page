import Index from '@/components/Index.vue'; 

const paths = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default paths