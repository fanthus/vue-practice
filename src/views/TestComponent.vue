<template>
  <div>
    <div class="title"> {{title}} </div>
    <div class="name"> {{ componentName }} </div>
    <a href="https://v2.cn.vuejs.org/v2/guide/components-props.html" target="_blank">ComponentsProps API 说明</a>
  </div>
</template>

<script>
export default {
  props:['componentName'],    //这儿不能用双引号...
  data() {
    return {
      title: 'This is Title'
    }
  }
}
</script>

<style>

.title {
  font-weight: 800;
}

</style>