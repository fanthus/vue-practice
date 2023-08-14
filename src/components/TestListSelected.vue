<template>
  <div class="container">
    hello world
    <div v-for="(item,index) in infoList" :key="index" class="item" :class="{ dynamicItem: item.isSelected }" @click="toggleSelect(index)"> {{item}} </div>

  </div>
</template>

<script>

export default {
  name: 'TestListSelected',
  data() {
    return {
      infoList:[
        { name: "wang", isSelected: false },
        { name: "fan", isSelected: true },
      ],
      preSelectItem:{}
    }
  },
  methods: {
    toggleSelect(index) {
      console.log(`toggle select ${index}`)
      let item = this.infoList[index]
      this.preSelectItem.isSelected = false
      item.isSelected = true
      this.preSelectItem = item;
    }
  }
}

</script>

<style>

.dynamicItem {
  border: 5px solid #000; 
}

.item {
  background-color: aqua;
  margin-top: 10px;
}

</style>