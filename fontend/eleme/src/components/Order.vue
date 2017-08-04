<template>
  <div>
      <Top></Top>
      <div class="order-content">
          <img src="https://fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt="无记录">
          <div>无订单</div>
          <a href='/'>点我去添加</a>
      </div>
      
  </div>
</template>
<script>
import Top from './login/LoginTop.vue'
export default{
    components:{
      Top
    },
    data(){
        return{
            
        }
    }
}
</script>
<style scoped lang="scss">
.order-content{
    display: flex;
    height: 15.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    div{
        margin-top: 2rem;
    }
    a{
        text-decoration: none;
        font-size: 0.4rem;
        margin-left: 5rem;
    }
}
</style>
