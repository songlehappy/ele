<template>
    <section>
        <div class="profile-3g0uv">
            <span class="profile-1gjgY">
                <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                </svg>
            </span>
            <div class="profile-xfCcC" @click="toLogin" v-if="!islogin">
                <p class="profile-1_mtk">登录/注册</p>
                <p class="profile-1UP72">
                    <svg fill="#fff">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                    </svg>
                    <span>登录后享受更多特权</span>
                    <!---->
                </p>
            </div>
            <div class="profile-xfCcC" @click="toLogin" v-else>
                <p class="profile-1_mtk">尊敬的用户</p>
                <p class="profile-1UP72">
                    <svg fill="#fff">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                    </svg>
                    <span>充会员后享受更多特权</span>
                    <!---->
                </p>
            </div>
            <span class="profile-2XuMq">
                <svg fill="#fff">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </span>
        </div>
    </section>
</template>
<script>
export default {
    methods:{
        toLogin(){
            window.location.href="#login"
        }
    },
    computed:{
        islogin(){
            return this.$store.state.islogin;
        }
    }
}
</script>
<style>
.profile-3g0uv {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: .666667rem .4rem;
    color: #fff;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.profile-1gjgY, .profile-1gjgY svg {
    width: 1.6rem;
    height: 1.6rem;
}
.profile-1gjgY {
    font-size: 1.6rem;
    line-height: 1.6rem;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    vertical-align: middle;
}
.profile-1gjgY svg {
    width: 1.6rem;
    height: 1.6rem;
}
.profile-xfCcC {
    margin-left: .48rem;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.profile-xfCcC p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.profile-1_mtk {
    font-size: .586667rem;
    margin-bottom: .213333rem;
}
.profile-xfCcC p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.profile-1UP72 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .373333rem;
}
.profile-1UP72 svg {
    margin-right: .066667rem;
    width: .426667rem;
    height: .426667rem;
}
.profile-2XuMq svg {
    width: .266667rem;
    height: .56rem;
}
</style>
