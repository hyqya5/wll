<template>
  <div class="foot">
    <router-link
      v-for="(item, index) in tabs"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <i :class="['default', 'iconfont', item.icon]"></i>
      <i :class="['select', 'iconfont', item.selectIcon]"></i>
      <span>{{ item.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabs: [
        {
          path: '/HomeBar',
          text: '首页',
          icon: 'icon-zhuye',
          selectIcon: 'icon-maoyandianying'
        },
        {
          path: '/FilmBar',
          text: '电影/影院',
          icon: 'icon-dianying',
          selectIcon: 'icon-dianying1'
        },
        {
          path: '/ShowBar',
          text: '演出',
          icon: 'icon-yanchu',
          selectIcon: 'icon-yanchu1'
        },
        {
          path: '/SportBar',
          text: '体育/赛事',
          icon: 'icon-jiangbei',
          selectIcon: 'icon-jiangbei1'
        },
        {
          path: '/MyBar',
          text: '我的',
          icon: 'icon-yuanbaicai',
          selectIcon: 'icon-yuanbaicai1'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.foot{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  border-top: 1px solid #666;
  background: #fff;
    a{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    color: #666;
    padding: 10px 0;
    .select{
      display: none;
    }
    .default{
      display: block;
    }
    span {
      font-size: 12px;
    }
    i {
      margin-bottom: 5px;
      font-size: 20px;
    }
    &.active{
      color: #f03;
      .select{
        display: block;
     }
      .default{
        display: none;
     }
    }
  }
}
</style>
