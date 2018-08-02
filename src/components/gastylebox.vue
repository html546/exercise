<template>
    <div class="box">
        <div class="item">
            <img src="../assets/menuIcon-2.png" alt="">
            <p>转出</p>
        </div>
        <div class="item">
            <img src="../assets/menuIcon-3.png" alt="">
            <p>转入</p>
        </div>
        <div class="item">
            <img src="../assets/menuIcon-5.png" alt="">
            <p>买入</p>
        </div>
        <div class="item">
            <img src="../assets/menuIcon-4.png" alt="">
            <p>卖出</p>
        </div>
        <div class="item">
            <img src="../assets/menuIcon-6.png" alt="">
            <p>数字资产</p>
        </div>
        <div class="item">
            <img src="../assets/menuIcon.png" alt="">
            <p>商城</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'gastylebox'
    }
</script>
<style scoped>
    .box{
        width: 100%;
        height: 33.2vh;
        background: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .box .item{
        width: 33.3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .box .item img{
        width: 1.16rem;
        height: 1.16rem;
    }
    .box .item p{
        margin-top: .24rem;
    }
</style>
