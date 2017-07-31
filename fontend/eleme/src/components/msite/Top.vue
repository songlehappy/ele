<template>
    <header>
        <h1>上部组件</h1>
        <!-- <mt-loadmore ref="loadmore" :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange">
            <ul>
                <li :key="index" v-for="(item,index) in list">{{ item }}</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
            <div slot="bottom" class="mint-loadmore-bottom">
                 <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">上拉更新</span> 
                 <span v-show="bottomStatus === 'loading'">Loading...</span> 
            </div>
        </mt-loadmore> -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            // list: [1, 2, 3, 4],
            // topStatus: '',
            // bottomStatus: '',
        }
    },
    methods: {
        // handleTopChange(status) {
        //     this.topStatus = status;
        //     console.log('top方法');

        // },
        // loadTop() {
        //     console.log(111);
        //     this.list.unshift(5);
        //     this.$refs.loadmore.onTopLoaded();
        // },
        // handleBottomChange(status) {
        //     this.bottomStatus = '';
        //     console.log('bottom方法');
        // },
        // loadBottom() {
        //     this.list.push(6);
        //     this.$refs.loadmore.onBottomLoaded()
        // }
    }
}
</script>
<style>

</style>
