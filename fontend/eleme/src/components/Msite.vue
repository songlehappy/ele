<template>
  <mt-loadmore ref="loadmore" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange">
    <Top></Top>
    <Bottom></Bottom>
  </mt-loadmore>
</template>

<script>
import Top from './msite/Top.vue';
import Bottom from './msite/Bottom';
export default {
  name: 'Msite',
  data() {
    return {
      msg: ''
    }
  },
  components: {
    Top, Bottom
  },
  mounted: function () {
    //获取当前经纬度代码
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        alert('您的位置：' + r.point.lng + ',' + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    }, { enableHighAccuracy: true })//以上为获取经纬度代码

    //------------------获取店面信息开始---------------------
    this.$store.dispatch('getIndexShopData');
    //------------------获取店面信息结束---------------------


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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
