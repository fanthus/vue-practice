import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
//Vue2（Package.json Vue版本确定）
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app');

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



//Vue3写法
// const vue = Vue.createApp({})
// vue.use(router)
// vue.$mount('#app')