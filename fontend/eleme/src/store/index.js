import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        point: "",
        weather: {},
        keyWords: [],
        foodList:[]
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
        GETFOOD:function(state,foodList){
            console.log(foodList);
            state.foodList=foodList;
        }
    },

    getters: {

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
                        type:"getFood",
                        rl: { ...r.point }
                    })
                }
                else {
                }
            }, { enableHighAccuracy: true })//以上为获取经纬度代码
        }
    }
})