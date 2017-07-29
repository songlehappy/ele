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
        console.log('着是mounted');
        this.$store.dispatch('getTude');
    },
    computed: {
        getL: function () {
            //console.log(this.$store.state.point);
            console.log('这是computed')
            var lng=this.$store.state.point.lng;
            var lat=this.$store.state.point.lat;
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
    height: 208px;
    padding: 34px 48px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
}

.index-3guVd {
    width: .346667rem;
    height: .413333rem;
    fill: #fff;
}
</style>
