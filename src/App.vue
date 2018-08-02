<template>
  <div id="app">
    <router-view/>
    <ul class="tag_footer">
      <router-link to="/">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/finance">
        <i class="iconfont icon-caiwuguanli"></i>
        <span>财务</span>
      </router-link>
      <router-link to="/find">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
      </router-link>
      <router-link to="/mine">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import "./assets/iconfont/iconfont.css";
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  background: #f2f2f2;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none !important;
}
.tag_footer {
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #f7f7f7;
}
.tag_footer a {
  display: block;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d0d0d0;
}
.tag_footer a.router-link-exact-active {
  color: #009aff;
}
.tag_footer a i {
  font-size: 20px;
}
</style>
