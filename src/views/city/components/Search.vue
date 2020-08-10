<template>
  <div>
    <div class="input">
      <input type="text" placeholder="输入城市名或拼音" v-model="keyword" />
    </div>

    <BScroll class="result" v-show="isShow">
      <ul>
        <li v-for="item in list" @click="clickhot(item.name)" :key="item.id">{{item.name}}</li>
      </ul>
    </BScroll>
  </div>
</template>

<script>
import BScroll from "components/BScroll/BScroll";
export default {
  components: { BScroll },
  props: {
    cities: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    isShow() {
      return !!this.list.length;
    },
  },
  methods: {
    clickhot(name) {
      this.$router.push("/");
      this.keyword = "";
      this.$store.commit("changecity", name);
    },
  },
  activated() {
    this.keyword = "";
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.keyword == "") {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        console.log("object");
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (
              item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1
            ) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>

<style  scoped lang='less'>
@import "~assets/css/index.less";
.input {
  background: @theme;
  text-align: center;
  height: 5vh;
  // line-height: 6vh;
  // vertical-align: bottom;
  input {
    box-sizing: border-box;
    width: 95%;
    height: 4vh;
    border-radius: 5px;
    padding: 0 0.2rem;
    text-align: center;
  }
}

.result {
  background: #eee;
  z-index: -1;
  position: absolute;
  top: 12vh;
  left: 0;
  bottom: 0;
  right: 0;
  li {
    font-size: 18px;
    padding: 0.2rem;
    background: #fff;
    color: #666;
    border-bottom: 1px solid #ccc;
  }
}
</style>