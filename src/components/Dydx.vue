<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      DyDx Stats
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <div>Price DAI -  {{ $apolloData.data.markets[0].price}}</div>
      <div>Borrow Interest Rate - {{ $apolloData.data.markets[0].borrowInterestRate}}</div>
      <div>Utilization - {{ $apolloData.data.markets[0].utilization.slice(0,8)}}</div>
    </div>
  </div>
  <section>
        <b-table
            :data="isEmpty ? [] : tableData"
            :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="first_name" label="First Name">
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="date" label="Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender">
                    <span>
                        <b-icon pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ props.row.gender }}
                    </span>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
apollo: {
    markets: gql`query {
          markets(where:{tokenSymbol:"DAI"}) {
            id
            tokenSymbol
            lastIndexUpdate
            price
            utilization
            borrowInterestRate
            supplyInterestRate
            supplied
            borrowed
        }
    }`,
  },
})
export default class Dydx extends Vue {
  public apollo: object = {
      $client: 'b'
  };
  public markets = [];
  public tableData = [
                { id: 1, first_name: '', last_name: 'Simmons', date: '2016/10/15 13:43:27', gender: 'Male' },
            ];
  public isEmpty: boolean = false;
  public hasMobileCards: boolean = true;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
