<template>
  <div class="con">
    <swiper ref="iconSwiper">
    <swiper-slide v-for="(page,index) in pages" :key="index" >
    <div class="icon"   v-for="item in page" :key="item.id">
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
.con {
  padding-top: 0.1rem;
  text-align: center;
  .icon {
    float: left;
    width: 25%;
    img {
      width: 80%;
    }
    p {
      padding: 0.1rem 0;
    }
  }
}
</style>