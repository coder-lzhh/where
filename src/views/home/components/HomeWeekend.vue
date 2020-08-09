<template>
  <div>
      <div class="head">周末去哪儿</div>
      <div class="con"  v-for="item in weekend" :key="item.id">
        <div class="img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
  </div>

</template>

<script>
export default {
  components: {},
  props: {
    weekend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style  scoped lang='less'>
@import "~assets/css/mix.less";
.head {
  background: #ebebea;
  padding: 0.2rem;
}
.con{

  .img{
    img{
      width: 100%;
    }
  }
  .title{
    font-weight: bold;
    padding: .2rem;
  }
  .desc{
    .ellipsis();
    padding-left: .2rem;
    padding-bottom: .3rem;
  }
}
</style>