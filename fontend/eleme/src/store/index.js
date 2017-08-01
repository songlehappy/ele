import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        point: "",
        weather: {},
        keyWords: [],
        foodList: [],
        //------------index店面信息---------------
        indexShopData: [],
        //--------------shop店面头部信息-------------
        shopHead: '',
        //--------------shop商品信息-------------
        shopGoods: [],
        //--------------shop评论信息-------------
        shopComment: [],
        //--------------shop评论score信息-------------
        shopScore: '',
        //--------------shop评论tag信息-------------
        shopTag: '',
    },

    mutations: {
        GETLD: function (state, pointr) {
            state.point = pointr;
        },
        GETWE: function (state, weather) {
            // console.log(weather);
            state.weather = { ...weather };
        },
        GETKEY: function (state, keyWords) {
            //console.log(123);
            state.keyWords = keyWords;
        },
        GETFOOD: function (state, foodList) {
            // console.log(foodList);
            state.foodList = foodList;
        },
        //--------获取index店面信息开始----------
        getIndexShopData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.indexShopData = state.indexShopData.concat(data);

        },
        //--------获取index店面信息结束-----------

        // //--------index店面活动的开关开始----------
        changeActivity(state, index) {
            state.indexShopData[index].isActivity = !state.indexShopData[index].isActivity;
        },
        // //--------index店面活动的开关结束-----------
        //--------获取shop店面头部信息开始----------
        getShopHeadData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.shopHead = data;

        },
        //--------获取shop店面头部信息结束-----------
        //--------获取shop店面商品信息开始----------
        getShopGoodsData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.shopGoods = data;

        },
        //--------获取shop店面商品信息结束-----------
        //--------获取shop店面评论信息开始----------
        getShopCommentData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.shopComment = data;

        },
        //--------获取shop店面评论信息结束-----------
        //--------获取shop店面score信息开始----------
        getShopScoreData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.shopScore = data;

        },
        //--------获取shop店面score信息结束-----------
        //--------获取shop店面tag信息开始----------
        getShopTagData(state, data) {
            // console.log(data);                   //actions中  ajax请求获取的数据
            state.shopTag = data;

        },
        //--------获取shop店面tag信息结束-----------
    },


    getters: {
        //--------对index店面信息的图片做处理开始----------
        mixPic(state) {
            state.indexShopData
        }
        //--------对index店面信息的图片做处理结束-----------
    },
    actions: {
        getLocation(context, data) {
            var latitude = data.rl.lat;
            var longitude = data.rl.lng;
            axios.get('http://localhost:3000/location?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (response) {
                    context.commit("GETLD", response.data.name);
                })
                .catch(function (err) {
                    context.commit("GETLD", "西丽创客小镇(16栋)");
                });
        },
        getWeather(context, data) {
            var latitude = data.rl.lat;
            var longitude = data.rl.lng;
            axios.get('http://localhost:3000/weather?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (response) {
                    context.commit("GETWE", response.data);
                })
                .catch(function (err) {
                    context.commit("GETWE", {
                        "temperature": 30,
                        "code": "CLOUDY",
                        "description": "阴",
                        "image_hash": "37319e992e612e983f517e2690cb3e16png"
                    }
                    )
                });

        },
        getHotKey(context, data) {
            var latitude = data.rl.lat;
            var longitude = data.rl.lng;
            axios.get('http://localhost:3000/hotkey?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (response) {
                    context.commit("GETKEY", response.data);

                })
                .catch(function (err) {
                    console.log("123");
                });

        },
        getFood(context, data) {
            var latitude = data.rl.lat;
            var longitude = data.rl.lng;
            axios.get('http://localhost:3000/foodlist?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (response) {
                    context.commit("GETFOOD", response.data);
                })
                .catch(function (err) {
                    console.log("123");
                });
        },
        getTude(context) {
            //获取当前经纬度代码
            console.log('touch commit');
            var map = new BMap.Map("allmap");
            var pointr = new BMap.Point(116.331398, 39.897445);
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMap.Marker(r.point);
                    context.dispatch({
                        type: "getHotKey",
                        rl: { ...r.point }
                    });
                    context.dispatch({
                        type: "getLocation",
                        rl: { ...r.point }
                    });
                    context.dispatch({
                        type: "getWeather",
                        rl: { ...r.point }
                    });
                    context.dispatch({
                        type: "getFood",
                        rl: { ...r.point }
                    })
                }
                else {
                }
            }, { enableHighAccuracy: true })//以上为获取经纬度代码
        },
        getIndexShopData(context) {
            axios.get('http://localhost:3000/indexshopdata').then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    //循环遍历添加一个首页店面活动的开关
                    for (var i = 0, len = data.length; i < len; i++) {
                        data[i].isActivity = false;
                    }
                    // console.log(data)//data为对象

                    context.commit('getIndexShopData', data);       //提交给mutations
                }

            })
        },
        //请求店面头部信息
        getShopHeadData(context, id) {
            axios.get('http://localhost:3000/shophead?id=' + id).then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    // console.log(data)
                    context.commit('getShopHeadData', data);       //提交给mutations
                }
            })
        },
        //请求店面商品信息
        getShopGoodsData(context, id) {
            // console.log(id, 111);
            axios.get('http://localhost:3000/shopgoods?id=' + id).then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    // console.log(data)
                    context.commit('getShopGoodsData', data);       //提交给mutations
                }
            })
        },
        //请求店面评论信息
        getShopCommentData(context, id) {
            // console.log(id, 111);
            axios.get('http://localhost:3000/shopcomment?id=' + id).then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    // console.log(data)
                    context.commit('getShopCommentData', data);       //提交给mutations
                }
            })
        },
        //请求店面score信息
        getShopScoreData(context, id) {
            // console.log(id, 111);
            axios.get('http://localhost:3000/shopscore?id=' + id).then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    // console.log(data)
                    context.commit('getShopScoreData', data);       //提交给mutations
                }
            })
        },
        //请求店面tag信息
        getShopTagData(context, id) {
            // console.log(id, 111);
            axios.get('http://localhost:3000/shoptag?id=' + id).then(function (res) {
                if (res && res.status === 200) {
                    // console.log(res.data);
                    var data = res.data;
                    // console.log(data)
                    context.commit('getShopTagData', data);       //提交给mutations
                }
            })
        },
    }
})