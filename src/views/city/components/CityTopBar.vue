<template>
  <div>
    <TopBar class="TopBar">
      <router-link  to="/" tag="div" slot="left" class="left">
          <div class="iconfont icon-icon-test1 icon1"></div>
      </router-link>
      <div slot="center" class="choose">城市选择</div>
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
  .choose {
    font-size: 18px;
  }
}
</style>