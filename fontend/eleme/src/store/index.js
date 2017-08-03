import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        delist1: [],
        delist2: [],
        point: "",
        weather: {},
        keyWords: [],
        foodList: [],
        location: { lng: '', lat: '' },
        //------------index店面信息---------------
        indexShopData: [],
        sortShopList: [],
        //------------信息个数---------------
        // indexShopNum: false,
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
        //-----筛选信息-----
        sortShopList:[],

        orderShopList:[],
        sortShopId:'',
        sortShopOffset:0,
        //--------------------热门搜索信息---------------------
        hotSearch: [],
        //--------------------搜索结果页面信息--------------------
        searchpage: [],
        sorthMthod:1,
        queryStr:'',
        tagshopid:''
    },

    mutations: {
        CHANGEKD:function(state,id){
            state.sortShopId=id;
        },
        GETLD: function (state, pointr) {
            state.point = pointr;
        },
        SETSORTLS: function (state, data) {
            state.sortShopList = data;
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
        DELIST1: function (state, data) {
            state.delist1 = data;
        },
        DELIST2: function (state, data) {
            state.delist2 = data;
             },
        GETSEARCH: function (state, hotSearch) {
            state.hotSearch = hotSearch.data;
            console.log(state.hotSearch)
        },
        GETPAGE: function (state, searchpage) {
            
            console.log(searchpage.data);

            for (var key in searchpage.data) {
                state.searchpage = searchpage.data[key].restaurant_with_foods;
            }

        },
        CACS:function(state,key){
            state.orderShopList[key].isshow=!state.orderShopList[key].isshow
        },
            // console.log(state.searchpage)
       
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
        //--------改变shopfood数量开始----------
        plusShopFoodCount(state, obj) {
            // console.log(obj);                   //actions中  ajax请求获取的数据
            var index = obj.index;
            var num = obj.num;
            state.shopGoods[index].foods[num].origin_count++;

        },
        minusShopFoodCount(state, obj) {
            var index = obj.index;
            var num = obj.num;
            state.shopGoods[index].foods[num].origin_count--;
        }
        //--------改变shopfood数量结束-----------
    },


    getters: {
        //--------对index店面信息的图片做处理开始----------
        mixPic(state) {
            state.indexShopData
        }
        //--------对index店面信息的图片做处理结束-----------
    },
    actions: {
        storeSortId:function(context,id){
            context.state.sortShopId=id;
            context.state.sortShopOffset=0;
            context.state.orderShopList=[];
            context.state.sorthMthod=1;
            context.dispatch('updateSortList');
        },
       storeSortKind:function(context,queryStr){
            if(context.state.sortShopId==''){
                context.state.queryStr=queryStr;
                context.state.sorthMthod=2;
            }else{
                context.state.sorthMthod=3;
                context.state.queryStr= 'id='+ context.state.sortShopId+"&"+queryStr;  
            }
             context.state.sortShopOffset=0;
            context.state.orderShopList=[];
            context.dispatch('updateSortList');
                 
       },
        updateSortList:function(context){
            var ajaxUrl='';
            switch(context.state.sorthMthod){
                case 1:
                    ajaxUrl='http://localhost:3000/sortshop?id='+context.state.sortShopId+'&offset='+context.state.sortShopOffset;
                    break;
                case 2:

                    ajaxUrl='http://localhost:3000/kindshop?'+context.state.queryStr+'&offset='+context.state.sortShopOffset;
                    break;
                case 3:
                    ajaxUrl='http://localhost:3000/kindshop?'+context.state.queryStr+'&offset='+context.state.sortShopOffset;
            }
            axios.get(ajaxUrl)
                .then(function (response) {
                   context.state.sortShopOffset+=20;
                   for(let i=0;i<response.data.length;i++){
                        response.data[i].isshow=false;
                    }
                    context.state.orderShopList=context.state.orderShopList.concat(response.data);
                    
                })
                .catch(function (err) {
                    console.log(123);
                });
        },
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
        getDeliver(context) {
            var latitude = context.state.location.lat;
            var longitude = context.state.location.lng;
            axios.get('http://localhost:3000/deliver?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (res) {
                    console.log(res);
                    context.commit('DELIST1', res.data);
                })
                .catch(function (err) {
                    console.log("123");
                })
        },
        getDeliver2(context) {
            var latitude = context.state.location.lat;
            var longitude = context.state.location.lng;
            axios.get('http://localhost:3000/deliver2?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (res) {
                    console.log(res);
                    context.commit('DELIST2', res.data);
                })
                .catch(function (err) {
                    console.log("123");
                })
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
        getSortShop(context) {
            var latitude = context.state.location.lat;
            var longitude = context.state.location.lng;
            axios.get('http://localhost:3000/shopsort?latitude=' + latitude + '&longitude=' + longitude)
                .then(function (res) {
                    //console.log(res);
                    context.commit('SETSORTLS', res.data);
                })
                .catch(function (err) {
                    console.log("123");
                })
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
        getSearch(context, data) {
            axios.get('http://localhost:3000/search')
                .then(function (response) {
                    context.commit("GETSEARCH", response);
                })
                .catch(function (err) {
                    console.log("123");
                });
        },
        getSearchpage(context, name) {
            axios.get('http://localhost:3000/searchpage?name=' + name)
                .then(function (response) {
                    console.log(response);
                    context.commit("GETPAGE", response);
                })
                .catch(function (err) {
                    console.log(err);
                    console.log("没有拿到");
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
                    context.state.location = { ...r.point };
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
                    // 循环添加一个初始购买数量
                    for (var i = 0, num1 = data.length; i < num1; i++) {
                        for (var j = 0, num2 = data[i].foods.length; j < num2; j++) {
                            data[i].foods[j].origin_count = 0;
                        }
                    }
                    context.commit('getShopGoodsData', data);       //提交给mutations
                }
            })
        },
        //请求店面评论信息
        getShopCommentData(context, obj) {
            var str = obj.str;
            var id = obj.id;
            axios.get('http://localhost:3000/shopcomment?id=' + id + '&str=' + str).then(function (res) {
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