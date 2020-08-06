<template>
  <div>
    <TopBar class="TopBar">
      <div slot="left" class="left">
        <div class="iconfont icon-icon-test1 icon1"></div>
      </div>
      <div slot="center" class="input">
        <span class="iconfont icon-icon-test"></span>输入城市/景点/游玩主题
      </div>
      <div slot="right" class="right">
        城市
        <span class="iconfont icon-icon-test2 icon2"></span>
      </div>
    </TopBar>
  </div>
</template>

<script>
import TopBar from "common/topbar/TopBar";
export default {
  components: { TopBar },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style  scoped lang='less'>
@import "~assets/css/index.less";

.TopBar {
  color: #fff;
  background: @theme;
  .left {
    // font-size: 0.375rem;
    text-align: center;
    .icon1 {
      font-size: 0.7rem;
    }
  }
  .input {
    background: #fff;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.14rem;
    border-radius: 0.1rem;
    color: #ccc;
    text-align: left;
    padding-left: 8px;
  }
  .right {
    text-align: center;
    .icon2 {
      margin-left: -5px;
    }
  }
}
</style>