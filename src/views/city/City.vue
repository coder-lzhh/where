<template>
  <div>
    <CityTopBar></CityTopBar>
    <Search :cities="cities"></Search>
    <CityList :word="word" :hotCities="hotCities" :cities="cities"></CityList>
    <Alphabet :cities="cities" @clickword="clickword"></Alphabet>
  </div>
</template>

<script>
import CityTopBar from "./components/CityTopBar";
import Search from "./components/Search";
import CityList from "./components/CityList";
import Alphabet from "./components/Alphabet";

import { getCityList } from "network/city";

export default {
  name: "City",
  components: { CityTopBar, Search, CityList, Alphabet },
  data() {
    return {
      hotCities: [],
      cities: {},
      word: "",
    };
  },
  created() {
    this.CityList();
  },
  computed: {},
  mounted() {},
  methods: {
    CityList() {
      getCityList().then((res) => {
        const data = res.data.data.data;
        // console.log(data);
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      });
    },
    clickword(word) {
      this.word = word;
      // console.log(word);
    },
  },
  activated() {
    console.log("object");
    window.scrollTo(0, 0);

    this.$children[2].$refs.BScroll.scrolltop(0, 0, 500);
  },
  watch: {},
};
</script>

<style  scoped>
</style>