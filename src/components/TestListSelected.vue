<template>
  <div class="container">
    hello world

    <!-- <div :class="[baseClass, isActive ? 'active' : 'inactive']">Array Class</div> -->


    <div v-for="(item,index) in infoList" :key="index" class="item" :class="{ dynamicItem: item.isSelected }" @click="toggleSelect(index)"> {{item}} </div>

  </div>
</template>

<script>

export default {
  name: 'TestListSelected',
  data() {
    return {
      infoList:[
        { name: "wang" },   
        { name: "fan"},
      ],
      preSelectItem:{}
    }
  },
  created() {
    this.infoList.forEach((item) => {
      item.isSelected = false
    })
  },
  mounted() {
    console.log("mounted");
    this.preSelectItem = this.infoList[1]
    this.preSelectItem.isSelected = true
    
  },
  methods: {
    toggleSelect(index) {
      console.log(`toggle select ${index}`)
      let item = this.infoList[index]
      this.preSelectItem.isSelected = false
      item.isSelected = true
      this.preSelectItem = item;
      // this.$set(this.infoList, index, {...this.infoList[index], isSelected:true}) //Vue2 操作数组的方式
      // this.$forceUpdate()   //如果刚开始 infoList 数组条目里没有 isSelected 属性，则绑定不上
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