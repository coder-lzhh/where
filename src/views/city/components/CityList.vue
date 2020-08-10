<template>
  <BScroll class="BScroll" ref="BScroll">
    <div class="localcity">
      <div class="title">当前城市</div>
      <div class="name">
        <span>{{this.$store.state.city}}</span>
      </div>
    </div>
    <div class="hotcity">
      <div class="title">热门城市</div>
      <div class="name">
        <span v-for="item in hotCities " :key="item.id" @click="clickhot(item.name)">{{item.name}}</span>
      </div>
    </div>
    <div class="cities" v-for="(item,index) in cities" :key="index" :ref="index">
      <div class="title">{{index}}</div>
      <div class="con">
        <div class="name" @click="clickhot(items.name)" v-for="items in item" :key="items.id">{{items.name}}</div>
      </div>
    </div>
  </BScroll>
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
    hotCities: {
      type: Array,
      default() {
        return [];
      },
    },
    word: {
      type: String,
      defautl() {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    clickhot(name) {
      this.$router.push('/')
      this.$store.commit('changecity',name)
    }
  },
  watch: {
    word() {
      if (this.word) {
        this.$refs.BScroll.scroll.scrollToElement(this.$refs[this.word][0]);
      }
    },
  },
};
</script>

<style  scoped lang='less'>
.BScroll {
  z-index: -2;
  position: absolute;
  top: 12vh;
  left: 0;
  bottom: 0;
  right: 0;
}

.localcity {
  .title {
    background: #ebebea;
    padding: 0.2rem;
  }
  .name {
    padding: 0.2rem 0.1rem 0.2rem;

    span {
      text-align: center;
      display: inline-block;
      width: 18%;
      border: 1px solid #bbb;
      padding: 0.1rem 0.4rem;
    }
  }
}
.hotcity {
  .title {
    background: #ebebea;
    padding: 0.2rem;
  }
  .name {
    display: flex;
    padding: 0.2rem 0.1rem 0;
    flex-wrap: wrap;
    span {
      text-align: center;
      width: 26%;
      border: 1px solid #bbb;
      padding: 0.1rem;
      margin-bottom: 0.2rem;
      margin-right: 0.1rem;
    }
  }
}

.cities {
  .title {
    background: #ebebea;
    padding: 0.2rem;
  }
  .con {
    .name {
      padding: 0.2rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>