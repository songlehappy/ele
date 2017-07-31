import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //------------index店面信息---------------
        indexShopData: [],
        //------------信息个数---------------
        // indexShopNum: false,

    },

    mutations: {
        //--------获取index店面信息开始----------
        getIndexShopData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.indexShopData = state.indexShopData.concat(data);
            
        },
        //--------获取index店面信息结束-----------

        // //--------index店面活动的开关开始----------
        changeActivity(state,index) {
            state.indexShopData[index].isActivity = !state.indexShopData[index].isActivity;
        }
        // //--------index店面活动的开关结束-----------
    },

    getters: {
        //--------对index店面信息的图片做处理开始----------
        mixPic(state) {
            state.indexShopData
        }
        //--------对index店面信息的图片做处理结束-----------
    },
    actions: {
        //--------获取index店面信息开始----------
        getIndexShopData(context) {
            axios.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.533012&longitude=113.930475&offset=20&limit=20&extras[]=activities&terminal=h5').then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    //循环遍历添加一个首页店面活动的开关
                    for(var i = 0 ,len = data.length;i < len;i++){
                        data[i].isActivity = false;        
                    }
                    // console.log(data)
                    context.commit('getIndexShopData', data);       //提交给mutations
                }

            })
        }
        //--------获取index店面信息结束-----------
    }
})