<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from './Dashboard.vue'; // @ is an alias to /src


@Component({
  components: {
    Dashboard,
  },
})
export default class Home extends Vue {}
</script>
