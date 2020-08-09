<template>
  <div class="home">
    <HomeTopBar></HomeTopBar>
    <HomeSwiper :swiper="swiperList"></HomeSwiper>
    <HomeIcon :icon="iconList"></HomeIcon>
    <HomeRecommend :recommend="recommendList"></HomeRecommend>
    <HomeWeekend :weekend="weekendList"></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTopBar from "./components/HomeTopBar";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcon from "./components/HomeIcon";
import HomeRecommend from "./components/HomeRecommend";
import HomeWeekend from "./components/HomeWeekend";

import { gethomedata } from "network/home";

import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeTopBar,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      recommendList: [],
      iconList: [],
      weekendList: [],
      lastCity: "",
    };
  },
  created() {
    this.lastCity = this.city;
    this.gethome();
  },
  methods: {
    gethome() {
      gethomedata(this.city).then((res) => {
        const data = res.data.data.data;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
        this.iconList = data.iconList;
        this.weekendList = data.weekendList;
      });
    },
  },
  mounted() {},
  computed: {
    ...mapState(["city"]),
  },
  activated() {
    if (this.lastCity != this.city) {
      this.lastCity = this.city;
      this.gethome();
    }
  },
};
</script>
