<template>
  <div id="app">
    <span class="image-title">测试</span>
    <img alt="Vue logo" :src="imP" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue'
import logo from 'image/logo.png'
export default {
  name: 'App',
  data () {
    return {
      imP: logo
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_FLAG);
    this.$axios.get('/api/tpm/tpm/getServerTime').then(res => {
      console.log(res);
    })
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  background: $theme-color;
}
</style>
