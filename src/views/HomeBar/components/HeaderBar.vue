<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中牟县</a>
      <search-bar :placeholder="hotSearchWord"></search-bar>
    </header>
    <div>
      <TabBar :title="list" router></TabBar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
      hotSearchWord: ['这个杀手不太冷', '四海', '喜羊羊与灰太狼'],
      list: [
        {
          title: '推荐',
          to: '/HomeBar/RecommendBar'
        },
        {
          title: '热片解读',
          to: '/HomeBar/UnscrambleBar'
        },
        {
          title: '预告片',
          to: '/HomeBar/NoticeBar'
        },
        {
          title: '说电影',
          to: '/HomeBar/SayBar'
        },
        {
          title: '佳片',
          to: '/HomeBar/GoodBar'
        },
        {
          title: '剧综',
          to: '/HomeBar/DramaBar'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header-wrap{
  header {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    a {
      font-size: 12px;
       text-decoration: none;
      flex-shrink: 0;
      color: #333;
      margin-top: 10px;
      padding-right: 10px;
    }
  }
}
</style>
