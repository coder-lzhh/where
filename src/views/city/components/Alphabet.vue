<template>
  <div class="alphabet">
    <div
      class="word"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="clickword"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cities: {
      type: Object,
      default() {
        return {
          touchStatus: false,
        };
      },
    },
  },
  data() {
    return {
      // letter: [],
      windonY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let key in this.cities) {
        letters.push(key);
      }
      return letters;
    },
  },
  methods: {
    clickword(e) {
      this.$emit("clickword", e.target.innerText);
      // console.log();
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {

          const touchY = e.touches[0].clientY - this.windonY;
          const index = Math.floor(touchY / 20);
          console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("clickword", this.letters[index]);
          }

        }, 16);
      }
    },

    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
  mounted() {},
  updated() {
    this.windonY = window.screen.availHeight * 0.3;
  },
  watch: {},
};
</script>

<style  scoped lang='less'>
@import "~assets/css/index.less";
.alphabet {
  color: @theme;
  z-index: -2;
  position: absolute;
  right: 0%;
  top: 30%;
  .word {
    text-align: center;
    padding: 3px;
  }
}
</style>