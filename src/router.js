import VueRouter from 'vue-router';
import TestEM from './components/TestEM'
import HelloWorld from './components/HelloWorld';

export default new VueRouter({
  routes:[
    {
      path: '/testem', 
      component: TestEM
    },
    {
      path: '/hello', 
      component: HelloWorld
    }
  ]
})
