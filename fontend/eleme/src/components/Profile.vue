<template>
  <div>
      <Top></Top>
      <Info></Info>
      <Bottom></Bottom>
  </div>
</template>
<script>
import Top from './login/LoginTop.vue'
import Info from './login/LoginInformation.vue'
import Bottom from './login/LoginBottom.vue'
export default{
    components:{
      Top,Info,Bottom
    }
}
</script>
<style>

</style>

