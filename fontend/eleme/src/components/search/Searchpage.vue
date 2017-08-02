<template>
  <div class="box">
    <form class="searchHeader">
      <a href="JavaScript:history.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </a>
      <input type="search" autofocus="autofocus" v-model="key" class="headerInput" />
    </form>
    <ul class="tab">
      <li>
        <span>分类</span>
        <i class="el-icon-caret-bottom"></i>
      </li>
      <li>
        <span>排序</span>
        <i class="el-icon-caret-bottom"></i>
      </li>
      <li>
        <span>筛选</span>
        <i class="el-icon-caret-bottom"></i>
      </li>
    </ul>
    <ul class="main">
      <li class="food" v-for="(item,key) in searchpage" :key="key" @click="goDetial(item.restaurant.id)">
        <div class="logo">
          <img class="pic" :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path+(/png$/.test(item.restaurant.image_path)?'.png':'.jpeg'+'?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/')" />
        </div>
        <div class="tet">
          <div class="p1">
            <div>
              <span class="sp1" v-if="item.restaurant.is_premium">品牌</span>
              <span class="sp2">{{item.restaurant.name}}</span>
            </div>
            <div>
              <span class="sp3" :key='num' v-for="(str, num) in item.restaurant.supports"> {{str.icon_name}}</span>
            </div>
          </div>
          <p class="p2">
            <span class="sp1">
              <el-rate v-model="item.restaurant.rating" disabled text-color="#ff9900" text-template="{value}">
              </el-rate>
            </span>
            <span class="sp2">{{item.restaurant.rating}}</span>
            <span class="sp3">月售{{item.restaurant.distance}}单</span>
            <span class="sp4" v-if="item.restaurant.delivery_mode">蜂鸟专送</span>
          </p>
  
          <p class="p3">
            <span class="sp1">￥{{item.restaurant.float_minimum_order_amount}}起送 /</span>
            <span class="sp2">配送费￥{{item.restaurant.float_delivery_fee}}</span>
            <span class="sp4">{{item.restaurant.order_lead_time}}分钟</span>
            <span class="sp3">{{item.restaurant.recent_order_num}}m /</span>
          </p>
        </div>
      </li>
      <p class="end">没有更多了哦~</p>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

import { Loading } from 'element-ui';
export default {
  data() {
    return {
      key: '',
      fullscreenLoading: false
    }
  },
  mounted: function () {

    let loadingInstance = Loading.service();
    // console.log(this.$store.state.searchpage)
    // if (this.$store.state.searchpage) {
    //   console.log(1111)
    // }
    setTimeout(function () {
      loadingInstance.close()
    }, 2000)
    // 取参数
    var name = location.hash.split('?')[1].split('=')[1];
    this.key = decodeURI(name)
    this.$store.dispatch('getSearchpage', name);
    // console.log(this.key)
  },
  computed: {
    ...mapState(['searchpage'])
    // 获取state
  },
  watch: {
    // 监听key长度,不存在则返回搜索入口
    key: function (newVal, oldVal) {
      if (!newVal) {
        window.location.href = "http://localhost:8080/#/Search"
      }
    }
  },
  methods: {
    //去详情页
    goDetial(id) {
      window.open('http://localhost:8080/#/shop/' + id, '_self');
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 1334px;
}

.searchHeader {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: .293333rem;
  position: relative;
  z-index: 101;
  overflow: hidden;
}

.searchHeader .el-icon-arrow-left {
  height: .933333rem;
  width: .933333rem;
  line-height: .933333rem;
  text-align: center;
  font-size: 38px;
  float: left;
  color: #999999;
}

.headerInput {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-radius: .4rem;
  border: 0;
  outline: none;
  background-color: #f8f8f8;
  padding: .173333rem .4rem;
  font-size: .4rem;
  color: #666;
  float: left;
}

.tab {
  width: 100%;
  height: 79px;
  display: flex;
  border-bottom: 3px solid #f7f7f7;
}

.tab li {
  flex: 1;
  height: 100%;
  text-align: center;
  color: #666;
  font-size: .346667rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab li .el-icon-caret-bottom {
  color: #999;
  font-size: 14px;
  margin-left: 4px;
  margin-top: 14px;
}

.main {
  border-bottom: 1px solid #eee;
  background-color: #fff;
  color: #666;
  list-style: none;
  font-size: .293333rem;
  flex: 1;
  overflow: auto;
}

.main .food {
  overflow: hidden;
  border-bottom: 1px solid #eee;
  display: flex;
}

.logo {
  padding: .4rem .266667rem;
  float: left;
}

.pic {
  height: 120px;
  width: 120px;
}

.tet {
  display: flex;
  flex: 1;
  flex-direction: column;
  float: left;
  width: 590px;
  padding: .4rem .266667rem .4rem 0;
}

.tet .p1 {
  height: 36px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.tet .p1 div {
  display: inline-block;
}

.tet .p1 .sp1 {
  display: inline-block;
  margin-right: .133333rem;
  padding: 0 .066667rem;
  height: .4rem;
  border-radius: .053333rem;
  background-color: #ffd930;
  color: #52250a;
  vertical-align: top;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: .293333rem;
  line-height: .4rem;
}

.tet .p1 .sp2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-weight: 700;
  font-size: .4rem;
  display: inline-block;
}

.tet .p1 .sp3 {
  font-size: .266667rem;
  font-style: normal;
  line-height: 1;
  height: .293333rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid;
  border-radius: .04rem;
  display: inline-block;
  color: rgb(153, 153, 153);
  border-color: rgb(221, 221, 221);
}

.p2 {
  margin-top: .2rem;
  overflow: hidden;
}

.p2 span {
  display: inline-block;
  margin-right: 10px;
}

.p2 .sp1 {
  color: #ffaa0c;
  float: left;
}

.p2 .sp2 {
  color: #ff6000;
  float: left;
}

.p2 .sp3 {
  color: #666666;
  float: left;
}

.p2 .sp4 {
  font-size: .266667rem;
  line-height: .346667rem;
  float: right;
  background: #2395ff;
  color: #ffffff;
  padding: 0 .053333rem;
  border: 1px solid #44a5ff;
  border-radius: .053333rem;
}

.p3 {
  margin-top: .2rem;
  overflow: hidden
}

.p3 span {
  display: inline-block;
  margin-right: 10px;
}

.p3 .sp1 {
  color: #666666;
  float: left
}

.p3 .sp2 {
  color: #666666;
  float: left
}

.p3 .sp3 {
  color: #666666;
  float: right
}

.p3 .sp4 {
  color: #2395ff;
  float: right
}

.end {
  height: 80px;
  color: #555;
  font-size: .346667rem;
  line-height: 80px;
  text-align: center;
}
</style>



