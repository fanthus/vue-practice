
import VueRouter from 'vue-router'
import TestComponentFather from './views/TestComponentFather.vue'
import TestCSS from './views/TestCSS.vue'
import TestVueBasic from './views/TestVueBasic';
import TestCSSLayout from './views/TestCSSLayout.vue'
import TestCSSFlexLayout from './views/TestCSSFlexLayout.vue'
import TestCSSPosition from './views/TestCSSPosition.vue'
import TestAxios from './views/TestAxios.vue'
import TestWebHome from './views/TestWebHome.vue'
import TestAnimatioin from './views/TestAnimatioin.vue'
import TestListSelected from './views/TestListSelected.vue'
import TestCSSOverflow from './views/TestCSSOverflow.vue'
import TestCSSImage from './views/TestCSSImage.vue'
import TestSCSS from './views/TestSCSS.vue'
import TestVant from './views/TestVant.vue'


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