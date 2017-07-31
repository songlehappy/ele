<template>
    <header>
        <div>
            <div>
                <svg class="index-3guVd">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
                </svg>
                <span>{{getL.lng+getL.lat}}</span>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    mounted: function () {
        //console.log(this.$store);
        //console.log('着是mounted');
        this.$store.dispatch('getTude');
    },
    computed: {
        getL: function () {
            //console.log(this.$store.state.point);
            console.log('这是computed')
            var lng = this.$store.state.point.lng;
            var lat = this.$store.state.point.lat;
            return {
                lng: lng,
                lat: lat
            };
        }

    }
}
</script>
<style scoped>
header {
    padding: .266667rem .373333rem;
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
    height: 3.253333rem;
    box-sizing: border-box;
}

.index-3guVd {
    width: .346667rem;
    height: .413333rem;
    fill: #fff;
    box-sizing: inherit;
}
</style>
