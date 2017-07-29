import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        point: {
            lng: "",
            lat: ""
        }
    },

    mutations: {
        GETLD: function (state, pointr) {
            if (pointr) {
                state.point.lng = pointr.lng;
                state.point.lat = pointr.lat;
            }

        }
    },

    getters: {

    },
    actions: {
        getLocation(context) {

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
                    console.log(r.point);
                    context.commit('GETLD', {
                        ...r.point
                    })
                }
                else {
                }
            }, { enableHighAccuracy: true })//以上为获取经纬度代码
        }
    }
})