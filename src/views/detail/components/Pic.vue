<template>
  <div class="con">
    <img
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      alt
    />
    <div class="bottom">
      <div class="text">大连圣亚海洋世界(AAAA景区)</div>
      <div class="span">
        <span class="iconfont icon-picture"></span> xx
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style  scoped lang='less'>
.con {
  position: relative;
  img {
    width: 100%;
  }
  .bottom {
    position: absolute;
    bottom: 0rem;
    padding-bottom: 0.1rem;
    // padding-right: .2rem;
    margin-right: .1rem;
    left: 0;
    width: 100%;
    color: white;
    display: flex;
    // justify-content: center;
    background-image: linear-gradient(to bottom ,rgba(0,0,0,0),rgba(0,0,0,0.8));
    .text {
      flex: 1;
    }
    .span {
      // width: 10px;
      // display: flex;
      //  justify-content: center;
    }
  }
}
</style>