<template>
  <div>
    <Top></Top>
    <LunBo></LunBo>
  </div>
</template>

<script>
import Top from './msite/Top.vue';
import LunBo from './msite/LunBo.vue';
export default {
  name: 'Msite',
  data() {
    return {
      msg: ''
    }
  },
  components: {
    Top,LunBo
  },
  mounted: function () {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
