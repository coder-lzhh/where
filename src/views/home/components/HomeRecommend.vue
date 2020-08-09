<template>
  <div>
    <div class="head">热销推荐</div>
    <div class="con" v-for="item in recommend " :key="item.id">
      <div class="imgs">
        <img :src="item.imgUrl" alt />
      </div>
      <div class="text">
        <div>{{item.title}}</div>
        <div>{{item.desc}}</div>
        <div>查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommend: {
      type: Array,
      defautl() {
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
.con {
  display: flex;
  padding: 0.1rem;
  .imgs {
    flex: 2;
    img {
      width: 100%;
    }
  }
  .text {
    padding: 0.2rem;
    flex: 5;
    min-width: 0;
    div {
      margin-bottom: 10px;
    }

    div:nth-child(2) {
      color: #ccc;
      .ellipsis();
      // width: 246px;
    }
    div:nth-child(3) {
      color: white;
      background: #f88600;
      display: inline-block;

      padding: 4px 8px;
      border-radius: 3px;
    }
  }
}
</style>