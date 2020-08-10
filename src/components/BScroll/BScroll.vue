<template>
  <div class="wrapper" ref="warpper">
    <div class="centent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  computed: {},
  methods: {
    scrolltop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      console.log("refresh")
      this.scroll.refresh()
    }
  },
  watch: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });

    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("backtops",position)
    });
    //在一次上拉加载的动作后
    this.scroll.on("pullingUp", () => {
      // console.log("position");
      this.$emit("pullingUp")
    });

  }
};
</script>

<style  scoped>
</style>