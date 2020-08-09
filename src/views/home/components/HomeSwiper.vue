<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiper" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    swiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        loop: true,
      },
    };
  },
  computed: {
    showSwiper(){
      return this.swiper.length
    }
  },
  methods: {},
  watch: {},
};
</script>

<style  scoped lang='less'>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}

</style>

<style >
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>