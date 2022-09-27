<template>
  <div class="box">
    <t-layout style="height:100%">
      <t-aside>
        <t-menu
          defaultValue="item2"
          :collapsed="collapsed"
          :width="['200px', 100]"
          height="550px"
        >
          <template #logo>
            <img
              width="136"
              src="https://www.tencent.com/img/index/menu_logo_hover.png"
              alt="logo"
            />
          </template>
          <t-menu-item value="item1" to="./form">
            <template #icon>
              <icon name="dashboard" />
            </template>
            仪表盘
          </t-menu-item>
          <t-menu-item value="2" to="./Info">
            <template #icon>
              <icon name="mail" />
            </template>
            信息区
          </t-menu-item>
          <t-menu-item value="item3" to="./Video">
            <template #icon>
              <icon name="play-circle" />
            </template>
            视频区
          </t-menu-item>
          <template #operations>
            <icon
              class="t-menu__operations-icon"
              name="view-list"
              @click.native="changeCollapsed"
            />
          </template>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-header>
          <t-dropdown style="cursor:pointer" :options="[{ content: '退出', value: 1 }]" @click="clickHandler" :minColumnWidth="112">
            <t-avatar size="40px" class="avatar">W</t-avatar>
          </t-dropdown>
          

          <!-- <icon class="t-menu__operations-icon" name="chevron-down" style="marginTop:10px" size="30px" /> -->
        </t-header>
        <t-content>
        <router-view></router-view>
      </t-content>
      </t-layout>
      
    </t-layout>
  </div>
</template>

<script>
import { Icon } from "tdesign-icons-vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      expanded: ["2", "3"],
      disabled: true,
      collapsed: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
    clickHandler(data) {
      this.$router.push('/').catch(err => {})
      this.$message.success("退出成功！");
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  .avatar{
    margin-left: 1100px;
    margin-top: 10px;
  }
}
</style>
