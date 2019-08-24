<template>
  <div>
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
    <div class="columns">
      <div class="column">
        <Uniswap/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Segment from '@/components/shared/Segment.vue';
import Uniswap from '@/components/Uniswap.vue';

@Component({
  components: {
    Segment,
    Uniswap,
  },
})
export default class Dashboard extends Vue {}
</script>