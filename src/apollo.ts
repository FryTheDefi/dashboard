import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import Vue from 'vue';
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  // uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap'
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
});

export default new VueApollo({
  defaultClient: apolloClient,
});
