<template>
<div class="box">
  <t-tabs
    :value="value"
    defaultValue="1"
    theme="card"
    @remove="removeTab"
    @change="changeTab"
    style="width: 100%;height:100%"
  >
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
    <keep-alive class="com" include="Item1,Item2">
      <component :is="other" />
    </keep-alive>
      
    </t-tab-panel>
  </t-tabs>
</div>
  
</template>

<script>
import Item1 from '../Home/Form/Item1.vue'
import Item2 from '../Home/Form/Item2.vue'

export default {
  data() {
    return {
      value: '1',
      other:"",
      panelData: [
        {
          value: '1',
          label: '首页',
          removable: true,
        },
        {
          value: '2',
          label: '税务行政处理',
          removable: true,

        },
      ],
    };
  },
  components:{
   Item1,Item2

  },
  created(){
    this.other= 'item1'
  },
  methods: {

    removeTab({ value }) {
      const index = this.panelData.findIndex((data) => data.value === value);
      if (index < 0) return false;
      this.panelData.splice(index, 1);
      if (this.value === value && this.panelData.length) {
        this.value = this.panelData[Math.max(index - 1, 0)].value;
        this.other= this.value
      }
      
    },
    changeTab(value) {
      this.value = value;
      if(value === '1'){
        this.other= 'item1'
      }else if(value === '2'){
        this.other="item2"
      }
      
    },
  },
};
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  .com{
    height: 100%;
  }
}
</style>
