import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


//Vue3写法
// const vue = Vue.createApp({})
// vue.use(router)
// vue.$mount('#app')