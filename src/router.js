
import VueRouter from 'vue-router'
import TestCSS from './components/TestCSS.vue'
import TestVueBasic from './components/TestVueBasic';
import TestCSSLayout from './components/TestCSSLayout.vue'
import TestCSSFlexLayout from './components/TestCSSFlexLayout.vue'
import TestCSSPosition from './components/TestCSSPosition.vue'
import TestAxios from './components/TestAxios.vue'

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/testcss',
      component: TestCSS
    },
    {
      path: '/testcsslayout',
      component: TestCSSLayout
    },
    {
      path: '/test/css/position',
      component: TestCSSPosition
    },
    {
      path: '/testflexlayout',
      component:TestCSSFlexLayout
    },
    {
      path: '/testvue', 
      component: TestVueBasic
    },
    {
      path: '/testaxios',
      component: TestAxios
    }
  ]
})

export default router;