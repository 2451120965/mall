<template>
  <div id="home">

    <!-- 头部导航栏 -->
    <nav-bar class="home-nav">

      <template v-slot:center>
        <div>购物街</div>
      </template>

    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <!-- 推荐模块 -->
    <RecommendView :recommend="recommends" />

    <!-- 商品列表 -->
    <div v-for="item in goods['pop'].list" :key="item.iid">
      <a :href="item.link">
        <img :src="item.show.img" alt=""> 
      </a>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childcomponents/HomeSwiper'
  import RecommendView from './childcomponents/RecommendView'

  import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res);

      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type) {

      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res.data.list);

        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }
</style>