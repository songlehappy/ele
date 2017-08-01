<template>
  <mt-loadmore ref="loadmore" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange">
    <Top></Top>
    <LunBo></LunBo>
    <Bottom></Bottom>
  </mt-loadmore>
</template>

<script>
import Top from './msite/Top.vue';
import LunBo from './msite/LunBo.vue';
import Bottom from './msite/Bottom';
// 引入辅助函数mapstate
import { mapState } from 'vuex'
export default {
  name: 'Msite',
  data() {
    return {
      msg: ''
    }
  },
  components: {
    Top, LunBo, Bottom
  },
  mounted() {
    if (this.indexShopData.length === 0) {    //数据为空时才发送请求
      this.$store.dispatch('getIndexShopData');
    }

  },
  methods: {
    //-------------上拉状态改变时触发，默认触发一次------------------
    handleBottomChange(status) {
      // console.log(111);
      // console.log('bottom方法');
    },
    //-------------上拉已经促发时调用----此为调用ajax请求
    loadBottom() {
      this.$store.dispatch('getIndexShopData');
      this.$refs.loadmore.onBottomLoaded();
    }
  },
  computed: {
    ...mapState(['indexShopData']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
