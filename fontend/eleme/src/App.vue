<template>
  <div id="app">
    <router-view></router-view>
    <Discover></Discover>
  </div>
</template>

<script>
import Discover from './components/FRouter.vue'
export default {
  name: 'app',
  components:{
    Discover
  }
}
</script>

<style>

</style>
