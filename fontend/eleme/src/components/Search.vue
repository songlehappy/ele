<template>
  <div class="box">
    <form class="searchHeader">
      <a href="#/msite">
        <i class="el-icon-arrow-left"></i>
      </a>
      <input type="search" autofocus="autofocus" placeholder="请输入商品名称" class="headerInput" v-model="searchInput" @keyup.13="search(searchInput)" />
    </form>
  
    <section>
      <header class="history-KdKLE_1">
        <span>历史搜索</span>
        <i v-show="histore.length!==0" class="el-icon-delete" @click="deleteItem"></i>
      </header>
  
      <section class="history-3kzV5_1">
        <span @click="changekey(item)" class="history-1YKH4_1" v-for="(item,key) in histore" :key="key">
          {{item}}
        </span>
      </section>
    </section>
  
    <section class="history-2IxHX_1">
      <header class="history-KdKLE_1">热门搜索</header>
      <section class="history-3kzV5_1">
        <span @click="skip(item.word)" class="history-1YKH4_1" v-for="(item,key) in hotSearch" :key="key">
          {{item.word}}
        </span>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios'
export default {
  name: 'search',
  data() {
    return {
      searchInput: '',  // 搜索内容
      histore: [],     // 历史搜索
      key: ''
    }
  },
  mounted: function () {
    this.$store.dispatch('getSearch');

    var historyArr = window.localStorage.getItem('historyArr');
    // 如果historyArr不为空则histore等于转换为数组的historyArr,否则locallhost为空数组
    this.histore = historyArr ? JSON.parse(historyArr) : [];
  },
  computed: {
    ...mapState(['hotSearch', 'keyWord'])
    // 获取state
  },
  methods: {
    changekey: function (name) {
      this.skip(name);
      this.$store.commit('CHANGE')
    },
    deleteItem: function () {
      // 点击垃圾桶,清空this.histore并且清除locallhost
      this.histore = [];
      localStorage.removeItem('historyArr');
    },
    search: function (name) {
      // keyup事件保存locallhost
      var result = this.histore.indexOf(this.searchInput)
      if (this.searchInput.trim()) {
        //跳转前清空上一次搜索获得的结果数据
        this.$store.commit('CHANGE')
        if (result == -1) {
          this.histore.unshift(this.searchInput);
          // 保存到locallhost,注意转换为json字符串
          window.localStorage.setItem('historyArr', JSON.stringify(this.histore));
        }
        this.skip(name);
      }

      console.log(this.histore)
      
    },
    skip: function (name) {
      // 跳转到搜索结果页面
      this.$store.commit('CHANGE');
      window.location.href = "http://localhost:8080/#/SearchPage?name=" + name;
    }
    // ...mapMutations({
    //   changekey: 'CHANGE'
    // })
  }
}
</script>

<style scoped>
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

section {
  display: block;
}

.history-KdKLE_1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: .426667rem;
  padding: .2rem .333333rem;
  color: #666;
  font-weight: 700;
}

.history-KdKLE_1 .el-icon-delete {
  font-size: 24px;
  color: #cecece;
  height: 0.62rem;
  line-height: 0.62rem;
}

.history-3kzV5_1 {
  padding: 0 .333333rem .333333rem;
}

.history-1YKH4_1 {
  display: inline-block;
  border-radius: .066667rem;
  padding: .2rem .266667rem;
  font-size: .373333rem;
  margin-right: .333333rem;
  margin-top: .333333rem;
  color: #666;
  background-color: #f7f7f7;
}

.history-KdKLE_1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: .426667rem;
  padding: .2rem .333333rem;
  color: #666;
  font-weight: 700;
}

.history-3kzV5_1 {
  padding: 0 .333333rem .333333rem;
  overflow: hidden;
}

.history-1YKH4_1 {
  display: inline-block;
  border-radius: .066667rem;
  padding: .2rem .266667rem;
  font-size: .373333rem;
  margin-right: .333333rem;
  margin-top: .333333rem;
  color: #666;
  background-color: #f7f7f7;
  float: left;
}
</style>


