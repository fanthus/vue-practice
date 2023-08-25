
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
import TestListSelected from './components/TestListSelected.vue'
import TestCSSOverflow from './components/TestCSSOverflow.vue'
import TestCSSImage from './components/TestCSSImage.vue'
import TestSCSS from './components/TestSCSS.vue'
import TestVant from './components/TestVant.vue'


const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/test/vant',
      component: TestVant
    },
    {
      path: '/test/component/communicate',
      component: TestComponentFather
    },
    {
      path: '/test/scss',
      component: TestSCSS
    },
    {
      path: '/testcss',
      component: TestCSS
    },
    {
      path: '/test/css/overflow',
      component: TestCSSOverflow
    },
    {
      path: '/test/css/image',
      component: TestCSSImage
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
      path: '/test/flexlayout',
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
    },
    {
      path: '/test/selected',
      component: TestListSelected
    }
  ]
})

export default router;