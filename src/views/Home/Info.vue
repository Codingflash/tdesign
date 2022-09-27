<template>
  <div class="box">
    <div class="tree">
      <span>功能树</span>
      <!-- <t-tree
        :data="items"
        :activable="true"
        hover
        expand-all
        :load="load"
        :icon="icon"
      /> -->
    </div>
  </div>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';
export default {
  name:'Info',
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          label: '1',
          children: true,
        },
        {
          label: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    // icon(createElement, node) {
    //   console.log(createElement,node);
    //   let name = 'file';
    //   if (node.getChildren()) {
    //     if (node.expanded) {
    //       name = 'folder-open';
    //       if (node.loading) {
    //         name = 'loading';
    //       }
    //     } else {
    //       name = 'folder';
    //     }
    //   }
    //   return <Icon name={name} />;
    // },
    load(node) {
      const maxLevel = 2;
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < maxLevel) {
            nodes = [
              {
                label: `${node.label}.1`,
                children: node.level < maxLevel - 1,
              },
              {
                label: `${node.label}.2`,
                children: node.level < maxLevel - 1,
              },
            ];
          }
          resolve(nodes);
        }, 500);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  .tree {
    width: 300px;
    height: 600px;
    border: 1px solid black;
  }
}
</style>  