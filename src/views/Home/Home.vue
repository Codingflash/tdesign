<template>
  <div class="home">
    <HelloWorld class="hello" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped>
.home {
 width: 100%;
 height: 100%;
}
</style>
