<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <slot>Chart Should Appear Here</slot>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Segment extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
