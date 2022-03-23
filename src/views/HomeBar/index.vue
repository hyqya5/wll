<template>
  <div class="homepage">
    <header-bar></header-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'home-bar',
  components: {
    HeaderBar
  }
}
</script>

<style>

</style>
