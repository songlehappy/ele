<template>
  <Top></Top>
</template>

<script>
import  Top from './msite/Top.vue';
export default {
  name: 'Msite',
  data() {
    return {
      msg: ''
    }
  },
  components:{
    Top
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
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
