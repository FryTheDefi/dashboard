<template>
  <div class="columns">
    <div class="column">
      <Segment />
    </div>
    <div class="column">
      <Segment />
    </div>
    <div class="column">
      <Segment />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Segment from '@/components/shared/Segment.vue';

@Component({
  components: {
    Segment,
  },
})
export default class Dashboard extends Vue {}
</script>