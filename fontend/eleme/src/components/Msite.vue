<template>
  <div>
    <mt-loadmore ref="loadmore" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange">
      <Top></Top>
      <LunBo></LunBo>
      <Bottom></Bottom>
    </mt-loadmore>
    <div v-show="isShow" @click="gotop">
      <goTop></goTop>
    </div>
  </div>
</template>

<script>
import Top from './msite/Top.vue';
import LunBo from './msite/LunBo.vue';
import Bottom from './msite/Bottom';
import goTop from '@/components/goTop'
// 引入辅助函数mapstate
import { mapState } from 'vuex'
export default {
  name: 'Msite',
  data() {
    return {
      msg: '',
      isShow: false,
      scroll: ''
    }
  },
  components: {
    Top, LunBo, Bottom, goTop
  },
  mounted() {
    if (this.indexShopData.length === 0) {    //数据为空时才发送请求
      this.$store.dispatch('getIndexShopData');
    }
    window.addEventListener('scroll', this.menu);
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
    },
    gotop() {
      document.body.scrollTop = 0;
      console.log(this.scroll)
    },
    menu() {
      this.scroll = document.body.scrollTop;
    }
  },
  computed: {
    ...mapState(['indexShopData']),
  },
  watch: {
    scroll: function (newVal, oldVal) {
      if (newVal >= 700) {
        this.isShow = true;
      }
      if (newVal < 700) {
        this.isShow = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
