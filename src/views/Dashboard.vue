<template>
  <div>
    <div class="columns">
      <div class="column">
        You need login to see chat
      </div>
    </div>
    <!-- <div class="columns">
      <div class="column">
        <Segment />
      </div>
      <div class="column">
        <Segment />
      </div>
      <div class="column">
        <Segment />
      </div>
    </div> -->
    <!-- <div class="columns">
      <div class="column">
        <Dydx />
      </div>
    </div> -->
    <div class="columns">
      <div class="column">
        <Uniswap />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Segment from '@/components/shared/Segment.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Uniswap from '@/components/Uniswap.vue';
// import Dydx from '@/components/Dydx.vue';

@Component({
  components: {
    Segment,
    Uniswap,
    // Dydx
  },
})
export default class Dashboard extends Vue {}
</script>