<template>
  <div class="home">
    <HomeTopBar></HomeTopBar>
    <HomeSwiper :swiper='swiperList'></HomeSwiper>
    <HomeIcon></HomeIcon>
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

export default {
  name: "Home",
  components: {
    HomeTopBar,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend

  },
  data() {
    return {
      swiperList: [],
      recommendList: [],
      iconList: [],
      weekendList: [],
    };
  },
  created() {
    this.gethome();
  },
  methods: {
    gethome() {
      gethomedata().then((res) => {
        const data = res.data.data.data;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
        this.iconList = data.iconList;
        this.weekendList = data.weekendList;
      });
    },
  },
};
</script>
