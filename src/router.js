
import VueRouter from 'vue-router'
import TestComponentFather from './components/TestComponentFather.vue'
import TestCSS from './components/TestCSS.vue'
import TestVueBasic from './components/TestVueBasic';
import TestCSSLayout from './components/TestCSSLayout.vue'
import TestCSSFlexLayout from './components/TestCSSFlexLayout.vue'
import TestCSSPosition from './components/TestCSSPosition.vue'
import TestAxios from './components/TestAxios.vue'
import TestWebHome from './components/TestWebHome.vue'
import TestAnimatioin from './components/TestAnimatioin.vue'

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/test/component/communicate',
      component: TestComponentFather
    },
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
    },
    {
      path: '/test/home',
      component: TestWebHome
    },
    {
      path: '/test/animation',
      component: TestAnimatioin
    }
  ]
})

export default router;