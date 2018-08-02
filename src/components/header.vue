<template>
    <div>
        <div class="head">
            <div class="pull-left head-left">
                <img src="../assets/userImg.png" width="50" height="50" alt="">
            </div>
            <div class="pull-left head-text">
                <h5>EID :10020</h5>
                <p>信用 :
                    <span class="iconfont icon-xin"></span>
                    <span class="iconfont icon-xin"></span>
                    <span class="iconfont icon-xin"></span>
                    <span class="iconfont icon-xin"></span>
                    <span class="iconfont icon-xin"></span>
                </p>
            </div>
            <div class="pull-right head-right">
                <a href="javascript:;"><span class="iconfont icon-saomiao"></span></a>
                <a href="javascript:;"><span class="iconfont icon-shezhi"></span></a>
            </div>
        </div>
        <div class="somvalue">
            <div class="item">
                <p>288.00</p>
                <span>卡诺值</span>
            </div>
            <div class="item">
                <p>685.00</p>
                <span>动力值</span>
            </div>
            <div class="item">
                <p>70.00</p>
                <span>兑换值</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "headtop"
};
</script>
<style scoped>
.head {
  background: url(../assets/bannerImg.png) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 27.7vh;
  padding: 0.266667rem 0.2rem 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}
.head .head-left img {
  display: inline-block;
  margin-right: 0.2rem;
}
.head .head-text {
  margin-top: 0.066667rem;
  color: #fff;
}
.head .head-text h5 {
  font-size: 0.4rem;
}
.head .head-text p span {
  color: #ff5f69;
  font-size: 0.16rem;
}
.head .head-right {
  margin-top: 0.2rem;
  margin-right: 0.266667rem;
}
.head .head-right a span {
  color: #fff;
  font-size: 0.533333rem;
}
.head .head-right a:first-child span {
  margin-right: 0.4rem;
}
.somvalue{
    width: 100%;
    height: 1.866667rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: .4rem;
}
.somvalue .item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.somvalue .item p{
    margin-top: .4rem;
    color: #ff8686;
    font-size: .213333rem;
}
.somvalue .item span{
    font-size: .16rem;
    margin-top: .066667rem;
}

</style>

