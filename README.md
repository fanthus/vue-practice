# vue-cli-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## VueRouter 安装踩坑

1. Vue2 和 Vue3 使用 VueRouter 的语法是不一样的，网上的 VueRouter 的安装语法不一致来源于此。
2. Vue2 和 Vue3 使用的 VueRouter 的版本是不一样的，安装不对会报 `export 'default' (imported as 'VueRouter') was not found in 'vue-router'` 这样的警告⚠️，运行也会报错。
3. Vue2 没有在main.js 的 Vue 实例初始化前增加 Vue.use(VueRouter)，否则控制台报警告 `Unknown custom element: <router-link> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`
4. Vue2 router-link 的点击没有跳转是因为没有使用 router-view 组件