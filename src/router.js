
import VueRouter from 'vue-router'
import TestEM from './components/TestEM'
import HelloWorld from './components/HelloWorld';


const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/test',
      component: TestEM
    },
    {
      path: '/hello', 
      name: 'hello',
      component: HelloWorld
    }
  ]
})

export default router;