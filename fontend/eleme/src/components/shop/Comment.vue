<template>
    <div class="shop-comment-score">
        <section class="shop-score">
            <div class="score-left">
                <strong>{{Math.round(shopScore.overall_score*10)/10}}</strong>
                <div>综合评价</div>
                <p>高于周边商家{{Math.round(shopScore.compare_rating*1000)/10}}%</p>
            </div>
            <div class="score-right">
                <div>
                    <span>服务态度</span>
                    <el-rate v-model="shopScore.service_score" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                    <span>{{Math.round(shopScore.service_score*10)/10}}</span>
                </div>
                <div>
                    <span>菜品评价</span>
                    <el-rate v-model="shopScore.food_score" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                    <span>{{Math.round(shopScore.food_score*10)/10}}</span>
                </div>
                <div>
                    <span>送达时间</span>
                    <span class="shop-time">{{shopScore.deliver_time}}分钟</span>
                </div>
            </div>
        </section>
        <section class="shop-tag">
            <div class="tag-top">
                <div :class="{'tags-unsatisfied':item.unsatisfied,'checked':index===addClass,'checked-unsatisfied':item.unsatisfied&&index===addClass}" @click="getComment(index, item.name)" :key="index" v-for="(item,index) in shopTag">{{item.name}}({{item.count}})</div>
            </div>
            <div class="tag-comment">
                <div class="comment-content" :key="index" v-for="(item,index) in shopComment">
                    <img src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg" alt="图片">
                    <div class="content-right">
                        <div>
                            <p>{{item.username}}</p>
                            <span>{{item.rated_at}}</span>
                        </div>
                        <div>
                            <el-rate v-model="item.rating_star" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                            <span>{{item.time_spent_desc}}</span>
                        </div>
                        <div>{{item.rating_text}}</div>
                        <div>{{item.reply_text}}</div>
                        <div>
                            <li :key="num" v-for="(str,num) in item.item_ratings">{{str.food_name}}</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// 引入辅助函数mapstate
import { mapState } from 'vuex'
export default {
    data() {
        return {
            addClass: 0,
        }
    },
    methods: {
        getComment(index, str) {
            this.addClass = index;
            //点击发送ajax请求
            var id = this.$route.params.id;
            this.$store.dispatch('getShopCommentData', { id: id, str: str });
        },
    },
    mounted() {
        //请求综合分数/标签
        var id = this.$route.params.id;
        this.$store.dispatch('getShopScoreData', id);
        this.$store.dispatch('getShopTagData', id);
        //默认请求一次全部评论
        if(this.shopComment.length===0){
            // console.log(11111);
            this.$store.dispatch('getShopCommentData', { id: id, str: '全部' });
        }
        

    },
    computed: {
        //得到状态信息
        ...mapState(['shopComment', 'shopScore', 'shopTag']),
    }
}

</script>

<style scoped lang='scss'>
.shop-comment-score {
    background: #f1f1f1;
    height: 13.066666rem;
    overflow: auto;
}

.shop-score {
    background-color: #fff;
    margin-bottom: .266667rem;
    padding: .4rem;
    font-size: .36rem;
    display: flex;
    align-items: center;
    color: #666;
    .score-left {
        display: flex;
        height: 2rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-right: .4rem;
        border-right: 1px solid #ddd;
        strong {
            font-size: .8rem;
            color: #f60;
        }
        p {
            font-size: .266667rem;
            color: #999;
        }
    }
    .score-right {
        flex: 1;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div {
            display: flex;
            align-items: center;
            span {
                padding-left: 0.5rem;
            }
            .el-rate {
                padding-left: 0.5rem;
            }
            span:last-child {
                color: #f60;
            }
            .shop-time {
                font-size: .266667rem;
                color: #999!important;
            }
        }
    }
}

.shop-tag {
    background-color: #fff;
    padding: .266667rem .32rem 0;
    font-size: .36rem;
    .tag-top {
        padding-bottom: .266667rem;
        border-bottom: 1px solid #ddd;
        div {
            display: inline-block;
            padding: .2rem;
            margin: .066667rem .233333rem;
            border-radius: .233333rem;
            color: #6d7885;
            background-color: #ebf5ff;
        } //额外添加的类
        .tags-unsatisfied {
            color: #aaa;
            background-color: #f5f5f5;
        }
        .checked {
            color: #fff;
            background-color: #3190e8;
        }
        .checked-unsatisfied {
            background-color: #ccc!important;
        }
    }
}

.comment-content {
    padding: .4rem 0;
    border-bottom: .013333rem solid #ddd;
    display: flex;
    img {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
    }
    .content-right {
        padding-left: 0.6rem;
        div:nth-child(1) {
            display: flex;
            justify-content: space-between;
            padding-bottom: .133333rem;
            span {
                font-size: .32rem;
                color: #999;
            }
        }
        div:nth-child(2) {
            display: flex;
            align-items: center;
            font-size: .333333rem;
            color: #999;
        }
        div:nth-child(3) {
            color: #333;
            font-size: .373333rem;
            padding: .213333rem 0;
        }
        div:nth-child(4) {
            margin: .266667rem 0;
            padding: .266667rem;
            background: #f3f3f3;
            border-radius: .106667rem;
        }
        div:nth-child(5) {
            li {
                display: inline-block;
                font-size: .293333rem;
                color: #999;
                border: 1px solid #ddd;
                padding: .106667rem .266667rem;
                margin: .093333rem;
                border-radius: .08rem;
                max-width: 1.6rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
