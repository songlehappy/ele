<template>  
  <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">  
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">  
      <ul class="list" :key="key" v-for="(val, key) in pageList">  
        <li>  
          <div>{{val}}</div>
        </li>  
      </ul>  
    </v-loadmore>  
  </div>  
</template>  
<script>  
  import {Loadmore} from 'mint-ui';  
  export default {  
    data:function() {  
      return {  
        searchCondition:{  //分页属性  
          pageNo:"0",  
          pageSize:"20"  
        },  
        pageList:['小金刚'],  
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
      }  
    },  
    components: {  
      'v-loadmore':Loadmore  
    },  
    methods: {  
      loadBottom:function() {
        // 上拉加载  
        this.more();// 上拉触发的分页查询  
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位  
      },  
      more:function (){  
          // 分页查询  
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 20;  var a=['小金刚','哈哈哈']
        this.pageList=this.pageList.concat(a)
            console.log(this.pageList)
      },  
      isHaveMore:function(isHaveMore){  
        // 是否还有下一页，如果没有就禁止上拉刷新  
        this.allLoaded = true; 
        if(isHaveMore){  
          this.allLoaded = false;  
        }  
      }  
    }  
  }  
</script>  

