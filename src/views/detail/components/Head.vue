<template>
  <div>
    <router-link to="/" tag="div" class="back">
      <div class="iconfont icon-icon-test1 icon1"></div>
    </router-link>
    <TopBar class="nav" v-show="isShow" :style="opcity">
      <div slot="left" class="left">
        <router-link to="/" tag="div">
          <div class="iconfont icon-icon-test1 icon2"></div>
        </router-link>
      </div>
      <div slot="center" class="detail">景点详情</div>
    </TopBar>
  </div>
</template>

<script>
import TopBar from "common/topbar/TopBar";
export default {
  components: { TopBar },
  data() {
    return {
      isShow: false,
      opcity: {
        opacity: 0,
      },
    };
  },
  computed: {},
  methods: {
    scroll() {
      const top = document.documentElement.scrollTop;
      console.log(top);
      if (top > 60) {
        this.isShow = true;
        let opacity = top / 140 > 1 ? 1 : top / 140;
        console.log(opacity);
        this.opcity = { opacity };
      } else {
        this.isShow = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.scroll);
  },

  watch: {},
};
</script>

<style  scoped lang='less'>
@import "~assets/css/index.less";
.back {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 50px;
  height: 50px;
  color: white;

  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 50px;
  .icon1 {
    font-size: 40px;
  }
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: white;
  text-align: center;
  background-color: @theme;
  .icon2 {
    font-size: 0.7rem;
  }
}
</style>