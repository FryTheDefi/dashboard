<template>
  <div class="tile is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Tile</p>
        <slot>List Should Appear Here</slot>
      </div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Tile extends Vue {

}
</script>