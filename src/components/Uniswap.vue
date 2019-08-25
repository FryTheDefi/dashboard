<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Hello Uniswap
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <div>{{ exchanges }}</div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
apollo: {
    exchanges: gql`query {
      exchanges(orderBy: tradeVolumeEth, orderDirection: desc) {
        id
        price
        priceUSD
        tokenName
        ethBalance
        tokenAddress
        ethBalance
        tokenSymbol
      }
    }`,
  },
})
export default class Uniswap extends Vue {
  public apollo: object = {};
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
