<template>
  <div class="con">
    <swiper ref="iconSwiper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    pages() {
      const pages = [];
      this.icon.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
  methods: {},
  watch: {},
};
</script>

<style  scoped lang='less'>
@import "~assets/css/mix.less";
.con {
  overflow: hidden;
  height: 0;
  padding-bottom: 53%;
  // background: #000;

  padding-top: 0.1rem;
  text-align: center;
  .icon {
    // overflow: hidden;
    // height: 0;
    // padding-bottom: 25%;

    float: left;
    width: 25%;
    img {
      width: 80%;
    }
    p {
      .ellipsis();
      padding: 0.1rem 0;
    }
  }
}
</style>


