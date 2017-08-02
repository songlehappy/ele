<template>
  <div class="box">
    <div class="header">
      <a class="ss" href="JavaScript:history.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </a>
      <span class="fx">发现</span>
      <span class="sa"></span>
    </div>

    <div class="obody">
      <div class="list1">
        <div class="left">
          <a href="https://home.m.duiba.com.cn/chome/index">
            <p class="p1">积分商城</p>
            <p class="p2">0元好物在这里 !</p>
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"/>
          </a>   
        </div>

        <div class="right">
          <div class="add1">
            <a href="https://app-resource.ele.me/prod/rkrEEkKBb.html">
              <div class="txt">
              <p class="p1">美味爆料</p>
              <p class="p2">无啤酒不夏天</p>
            </div>
            <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/"/>
            </a>
          </div>
          <div class="add2">
            <a href="https://h5.ele.me/commend/#/">
              <div class="txt">
              <p class="p1">推荐有奖</p>
              <p class="p2">5元现金拿不停</p>
            </div>
            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/"/>
            </a>
          </div>
        </div>
      </div>

      <a href="https://h5.ele.me/freelunch/#/" class="sd">
        <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/"/>
      </a>

      <section>
        <a class="section" href="https://h5.ele.me/ulike/">
          <p class="p1">
            <span class="line left"></span>
            <i class="el-icon-star-off"></i>
            美食热推
            <span class="line right"></span>
          </p>
          <p class="p2">
            你的口味,我都懂得
          </p>
          <div class="activity-body">
            <a class="food">
              <img src="https://fuss10.elemecdn.com/e/c3/af359945a94fa9ec816cd4a5c1a45jpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">探险家炒饭套餐+热狗+泡菜+鸡蛋</p>
              <p class="p2">￥28</p>
            </a>
            <a class="food">
              <img src="https://fuss10.elemecdn.com/b/c4/d00faa20745c49cc9273d7e9c9e02jpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">野山椒牛肉</p>
              <p class="p2">￥32.9</p>
            </a>
            <a class="food">
              <img src="https://fuss10.elemecdn.com/3/87/c5d7dbe4acf805c7c220092301b4ejpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">老北京鸡肉卷</p>
              <p class="p2">￥14.9</p>
            </a>
          </div>
          <p class="more">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </p>
        </a>
      </section>

      <section class="bt">
        <a class="section" href="https://home.m.duiba.com.cn/chome/index">
          <p class="p1">
            <span class="line left"></span>
            <i class="el-icon-time"></i>
            限时好礼
            <span class="line right"></span>
          </p>
          <p class="p2">
            小积分换豪礼
          </p>
          <div class="activity-body">
            <a class="food">
              <img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">iphone 7 32G</p>
              <p class="p2">
                499积分
                <span class="yj">￥4499</span>
              </p>
              <span class="discount">抽奖活动</span>
            </a>
            <a class="food">
              <img src="https://fuss10.elemecdn.com/a/a2/206f0d7fa5af4b349b641fa35e730jpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">7元饿了么红包</p>
              <p class="p2">
                3500...
                <span class="yj1">￥7</span>
              </p>
              <span class="discount">0元兑换</span>
            </a>
            <a class="food">
              <img src="https://fuss10.elemecdn.com/2/cb/0409d2097e04488659bf50a5e49d7jpeg.jpeg?imageMogr/format/webp/"/>
              <p class="p1">非卖公仔转转乐</p>
              <p class="p2">399积分</p>
              <span class="discount">0元抽奖</span>
            </a>
          </div>
          <p class="more">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </p>
        </a>
      </section>
    </div>
  </div>
    
</template>

<script>
export default {
  
}
</script>

<style scoped>
  a{
    text-decoration: none;
    display: inline-block;
  }
  .box{
    position: relative;
  }
  .header{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
  }
  .header .sa{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
    font-size: 30px;
  }
  .header .ss{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
    font-size: 30px;
  }
  .header .ss .el-icon-arrow-left{
    color: #ffffff;
  }
  .header .fx{
    font-weight: 900;
  }
  .obody{
    overflow: auto;
    background: #f5f5f5;
    position: absolute;
    top: 1.173333rem;

  }
  .obody .list1{
    height: 4.613333rem;
    display: flex;
    background: #fff;
  }
  .obody .list1 .left{
    flex: 1;
    height: 100%;
    border-right: 1px solid #ededed;
    position: relative;
  }
  .obody .list1 .left .p1{
    margin-left: .4rem;
    margin-top: .64rem;
    line-height: 1.2;
    font-size: .48rem;
    margin-bottom: .16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(255, 151, 0);
  }
 .obody .list1 .left .p2{
    margin-left: .4rem;
    line-height: 1.2;
    font-size: .32rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 .obody .list1 .left img{
    width: 2rem;
    margin: .56rem .693333rem 0;
    position: absolute;
    bottom: .64rem;
    left: 0.4rem;
  }

 .obody .list1 .right{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
 .obody .list1 .right .add1{
    flex: 1;
    border-bottom: 1px solid #ededed;
    overflow: hidden;
  }
 .obody .list1 .right .add1 .txt{
    width: 255px;
    float: left;
  }
 .obody .list1 .right .add1 .txt .p1{
    line-height: 1.2;
    font-size: .48rem;
    margin-bottom: .16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(245, 120, 93);
    margin-left: 0.4rem;
    margin-top: 0.64rem;
  }
 .obody .list1 .right .add1 .txt .p2{
    margin-left: 0.4rem;
    line-height: 1.2;
    font-size: .32rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 .obody .list1 .right .add1 img{
    float:left;
    width:1.2rem;
    margin-top: 0.54rem;
  }

 .obody .list1 .right .add2{
    flex: 1;
    overflow: hidden;
  }
 .obody .list1 .right .add2 .txt{
    width: 255px;
    float: left;
  }
 .obody .list1 .right .add2 .txt .p1{
    line-height: 1.2;
    font-size: .48rem;
    margin-bottom: .16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(27, 169, 225);
    margin-left: 0.4rem;
    margin-top: 0.64rem;
  }
 .obody .list1 .right .add2 .txt .p2{
    margin-left: 0.4rem;
    line-height: 1.2;
    font-size: .32rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 .obody .list1 .right .add2 img{
    float:left;
    width:1.2rem;
    margin-top: 0.54rem;
  }

  .sd{
    display: block;
    height: 170px;
    overflow: hidden;
    width: 100%;
    margin-top: 0.28rem;
    margin-bottom: 0.28rem;
  }
  .section{
    margin-bottom: .28rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
    display: block;
  }
  .section .p1{
    padding-top: .52rem;
    text-align: center;
    font-size: .48rem;
    font-weight: 700;
    color: #333;
  }
  .line {
    display: inline-block;
    margin: .213333rem .093333rem .173333rem;
    border: 1px solid #333;
    width: .4rem;
    height: 0;
    position: relative;
  }
  
  .line.left:after {
    right: -.066667rem;
  }
  .line:after {
    position: absolute;
    top: -.066667rem;
    content: "";
    background: #333;
    height: .133333rem;
    width: .133333rem;
    border-radius: 50%;
  }
  .line:after {
    position: absolute;
    top: -.066667rem;
    content: "";
    background: #333;
    height: .133333rem;
    width: .133333rem;
    border-radius: 50%;
 }
 .line.right:after {
    left: -.066667rem;
  }
  .section .p1 .el-icon-star-off{
    font-size: 34px;
    color: #f95e59;
  }
  .section .p1 .el-icon-time{
    font-size: 34px;
    color: #f95e59;
  }
  .section .p2{
    font-size: .293333rem;
    color: #999;
    text-align: center;
    padding-bottom: .213333rem;
  }
  .activity-body{
    padding: .32rem 0 .2rem;
    padding-left: 0.15rem;
    white-space: nowrap;
    display: flex;
    justify-content: center;
  }
  .activity-body .food{
    display:flex;
    flex-direction: column;
    width: 2.96rem;
    margin-right: .16rem;
    height: 333px;
    overflow: hidden;
    position: relative;
  }
  .discount{
    position: absolute;
    top: 0;
    left: 0;
    font-size: .293333rem;
    color: #fff;
    background: #413d3c;
    padding: .066667rem;
  }
  .activity-body .food img{
    height: 2.933333rem;
    margin-bottom: .253333rem;
    width: 222px;
    display: inline-block;
  }
  .activity-body .food .p1{
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: .346667rem;
    color: #333;
    margin-bottom: .133333rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .activity-body .food .p2{
    font-size: .346667rem;
    /* height: .48rem; */
    /* line-height: .48rem; */
    color: #ff5339;
    text-align: left;
  }
  .activity-body .food .p2 .yj{
    color: #aaa;
    font-size: .293333rem;
  }
  .activity-body .food .p2 .yj1{
    color: #aaa;
    font-size: .293333rem;
    text-decoration:line-through;
  }
  .obody .more{
    font-size: .346667rem;
    color: #999;
    height:.646667rem; 
    line-height: .646667rem; 
    text-align: center;
    margin-bottom: 15px;
  }
  .obody .more .el-icon-arrow-right{
    display: inline-block;
    height: .646667rem; 
    line-height: .646667rem; 
    font-size: 16px;
  }
  .bt{
    margin-bottom: 50px;
  }


  
</style>


