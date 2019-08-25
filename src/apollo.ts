import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import Vue from 'vue';
Vue.use(VueApollo);

// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap',
//   // uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
// });

const clientAOptions = {
  uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap',
}

const clientBOptions = {
  uri: 'https://api.thegraph.com/subgraphs/name/jackleslie/dydx',
}

const createA = new ApolloClient({
  ...clientAOptions
});

const createB = new ApolloClient({
  ...clientBOptions
})

const a = createA
const b = createB

export default new VueApollo({
  clients: {
    a,
    b
  },
  defaultClient: a,
});
