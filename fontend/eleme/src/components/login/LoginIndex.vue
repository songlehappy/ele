<template>
    <div class="App-1EAON">
        <div class="App-3Q8Qb">
            <div class="LoginHeader-1jXn6_0">
                <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
                </svg>
                <div class="LoginHeader-22Up7_0">
                    <a href="javascript:;" :class="show?'LoginHeader-33EiC_0':''" @click="change">
                        短信登陆
                    </a>
                    <a href="javascript:;" :class="!show?'LoginHeader-33EiC_0':''" @click="change">
                        密码登录
                    </a>
                </div>
            </div>
            <div>
                <form v-if="!show">
                    <section class="form-b6px1">
                        <input type="text" autocapitalize="on" placeholder="手机/邮箱/用户名" v-model="username">
                    </section>
                    <section class="form-b6px1">
                        <input placeholder="密码" type="password" autocapitalize="on" v-model="password">
                        <div class="SwitchButton-2b6RO SwitchButton-3BmOw">
                            <div class="SwitchButton-1rBfm"></div>
                            ···
                        </div>
                    </section>
                    <button class="SubmitButton-2wG4T" @click="toSub">
                        登录
                    </button>
                </form>
                <form v-else>
                    <section class="MessageLogin-FsPlX">
                        <input type="tel" maxlength="11" placeholder="手机号" v-model="username">
                        <button disabled="disabled" class="CountButton-3e-kd">
                            获取验证码
                        </button>
                    </section>
                    <section class="MessageLogin-FsPlX">
                        <input type="tel" maxlength="8" placeholder="验证码" v-model="password">
                    </section>
                    <section class="MessageLogin-15xD9">
                        温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
                        <a href="//h5.ele.me/service/agreement/" target="_blank">《用户服务协议》</a>
                    </section>
                    <button class="SubmitButton-2wG4T" @click="toSub">
                        登录
                    </button>
                </form>
                <!---->
            </div>
        </div>
        <div class="LoginFooter-UxQIr_0">
            <a href="/service/about" class="LoginFooter-13y0u_0 LoginFooter-3oULq_0" :title="tips">关于我们</a>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    components: {

    },
    data: function () {
        return {
            show: true,
            username: '',
            password: '',
        }
    },
    methods: {
        toSub() {
            this.$store.commit('CHANGETIP', 'OK');
            if (/^1[3|4|5|8][0-9]\d{8}$/.test(this.username) && /^(\d|\D){6,8}$/.test(this.password)) {
                this.$store.dispatch('userLogin', { username: this.username, password: this.password });
            } else {
                this.$store.commit('CHANGETIP', '用户名或密码格式不正确');
            }

        },
        change() {

            this.show = !this.show;
        }
    },
    computed: {
        tips() {
            var tips = this.$store.state.tips;
            var islogin=this.$store.state.islogin;
            if(islogin)
            {
                window.location.href="#/profile";
            }
            if (tips != 'OK') {
                Toast({
                    className: 'tips',
                    message: tips,
                    position: 'bottom',
                    duration: 5000
                });
            }
            return tips;
        }
    }
}
</script>
<style>
.tips {
    width: 400px;
    height: 60px;
    border-radius: 25px;
    line-height: 60px!important;
    font-size: 30px!important;
}

.mint-toast-text {
    font-size: 30px;
    line-height: 35px;
}

.App-1EAON {
    height: auto;
    padding-top: 60px;
}

.App-1EAON {
    display: -ms-grid;
    display: grid;
    -ms-grid-rows: 1fr 104px;
    grid-template-rows: 1fr 104px;
    -ms-grid-column-align: center;
    justify-items: center;
}

.App-1EAON {
    width: 100%;
    height: 200%;
}

.App-3Q8Qb {
    width: 600px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
}

.LoginHeader-1jXn6_0 {
    text-align: center;
}

.LoginHeader-1jXn6_0>svg {
    width: 280px;
    height: 112px;
}

.LoginHeader-22Up7_0 {
    margin-top: 80px;
}

.LoginHeader-22Up7_0>a.LoginHeader-33EiC_0 {
    color: #2395ff;
    border-bottom: 2px solid #2395ff;
}

.LoginHeader-22Up7_0>a:first-child {
    margin-right: 80px;
}

.LoginHeader-22Up7_0>a {
    font-size: 28px;
    padding-bottom: 8px;
    cursor: pointer;
}

a {
    outline: 0;
    color: inherit;
    text-decoration: none;
}

.App-3Q8Qb>div:last-child {
    min-height: 592px;
}

.MessageLogin-FsPlX {
    position: relative;
    margin-top: 40px;
    height: 96px;
    font-size: 28px;
    background: #fff;
}

.MessageLogin-15xD9 {
    margin-top: 36px;
    color: #999;
    font-size: 28px;
    line-height: 40px;
}

.MessageLogin-FsPlX>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    -webkit-appearance: none;
}

.MessageLogin-FsPlX>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

button,
input {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
}

button,
input,
select,
textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit;
}

.CountButton-3e-kd[disabled] {
    color: #ccc;
}

.CountButton-3e-kd {
    padding: 0;
    border-radius: 6px;
    color: #2395ff;
    background: transparent;
    text-align: center;
    font-size: 28px;
}

.MessageLogin-FsPlX>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

button,
input {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
}

button {
    margin: 0;
    padding: 0;
}

.MessageLogin-FsPlX>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    /* transform: translateY(-50%); */
}

.MessageLogin-FsPlX>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
}

.MessageLogin-15xD9 a {
    color: #2395ff;
}

.SubmitButton-2wG4T {
    display: block;
    width: 100%;
    height: 84px;
    margin-top: 60px;
    border-radius: 8px;
    background: #00d762;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 32px;
    line-height: 84px;
}

.LoginFooter-13y0u_0 {
    font-size: 24px;
}

.form-b6px1 {
    position: relative;
    margin-top: 40px;
    height: 96px;
    font-size: 28px;
    background: #fff;
}

.form-b6px1>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    -webkit-appearance: none;
}

.form-b6px1>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.form-b6px1>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
}

.form-b6px1>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.SwitchButton-3BmOw {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.SwitchButton-2b6RO {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 6px;
    width: 80px;
    height: 32px;
    color: #999;
    font-size: 24px;
    border: 1px solid #ddd;
    border-radius: 16px;
    -webkit-transition: background-color .3s, border-color .3s;
    transition: background-color .3s, border-color .3s;
}

.SwitchButton-1rBfm {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
}

.SubmitButton-2wG4T {
    display: block;
    width: 100%;
    height: 84px;
    margin-top: 60px;
    border-radius: 8px;
    background: #00d762;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 32px;
    line-height: 84px;
}
</style>
