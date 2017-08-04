<template>
    <div>
        <div class="header">
            <a class="ss" href="JavaScript:history.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </a>
            <span class="fx">选择地址</span>
            <span class="sa"></span>
        </div>
        <form class="searchHeader">
            <input type="search" autofocus="autofocus" placeholder="请输入地址" class="headerInput" />
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html,body{
    height: 100%;
    background: #f4f4f4
}
a {
    text-decoration: none;
    display: inline-block;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
}

.header .sa {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
    font-size: 30px;
}

.header .ss {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
    font-size: 30px;
}

.header .ss .el-icon-arrow-left {
    color: #bee9ff;
    font-size: 38px;
}

.searchHeader {
    display: flex;
    padding-bottom: .293333rem;
    padding-top: .153333rem;
    position: relative;
    z-index: 101;
    overflow: hidden;
    background: #2395ff;
    justify-content: center;
}

.headerInput {
    border-radius: .4rem;
    border: 0;
    outline: none;
    padding: .173333rem .4rem;
    font-size: .4rem;
    color: #666;
    height: .733333rem;
    width: 90% 
}
</style>


