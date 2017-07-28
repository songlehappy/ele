var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331398, 39.897445);
var myPoint={};
map.centerAndZoom(point, 12);
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        myPoint.lng=r.point.lng;
        myPoint.lat=r.point.lat;
    }
    else {
        that.msg = "网络异常";
    }
}, { enableHighAccuracy: true })

export default myPoint;