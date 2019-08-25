<template>
  <div id="app">
    <Navbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view id='routerview'/>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Vue from 'vue';
export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style>
#routerview {
  padding: 1em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
