<template>
    <div v-show="isShow" class="gotop">
        <svg class="BackTop-icon_2Js4K94">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top.7a234e5">
                <svg viewBox="0 0 1024 1024" id="back-top.7a234e5" class="icon" width="100%" height="100%">
                    <path d="M109.078 75.5h805.846v134.308H109.076s0-134.308.002-134.308zm805.846 604.384H713.462V948.5H310.538V679.884H109.076L512 276.962l402.924 402.922z"></path>
                </svg>
            </use>
        </svg>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:true
        }
    },
    watch:{
       isShow:function(newVal, oldVal) {
        if(document.documentElement.scrollTop>300){
            this.isShow=false
        }
       }
    }
}
</script>

<style scoped>
.gotop {
    width: 1.133333rem;
    height: 1.133333rem;
    border: .013333rem solid #999;
    border-radius: 50%;
    position: fixed;
    right: .4rem;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .3s;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: initial;
    transition-delay: initial;
}

.BackTop-icon_2Js4K94 {
    display: block;
    width: .533333rem;
    height: .533333rem;
    fill: #999;
}
</style>


