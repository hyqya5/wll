<template>
  <div>
    <nav class="Tabs_nav">
      <a href="javascript:;"
        v-for="(item, index) in title"
        :key="index"
      >{{item.title}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    title: Array,
    router: Boolean
  }
}
</script>

<style lang="scss">
  div {
    .Tabs_nav{
    }
  }
</style>
