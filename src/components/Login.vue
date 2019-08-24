<template>
  <div>
    <span>{{user.email}}</span>
    <b-button v-if="publicAddress === ''" @click="login" type="button is-primary"><strong>Login</strong></b-button>
    <b-button v-if="publicAddress !== ''" @click="getTorusPK" type="button is-primary"><strong>Send</strong></b-button>
    <button v-if="publicAddress !== ''" @click="changeProvider">Change Provider</button>
    <button v-if="publicAddress !== ''" @click="getUserInfo">Get User Info</button>
    <button v-if="publicAddress !== ''" @click="getTorusData">getTorusData</button>
    <button v-if="publicAddress !== ''" @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Torus from '@toruslabs/torus-embed';
import Web3 from 'web3';

@Component
export default class Login extends Vue {

  get user() {
   const todos = this.$store.state.currentUser; // this.todos;
   return todos;
}

  public publicAddress: string = '';

  public created() {
    console.log('Vue instance created');
  }

  public async login() {
    try {
      const torus = new Torus();
      await torus.init();
      await torus.login(); // await torus.ethereum.enable()
      // (window as any).torus.setProvider("rinkeby"); //'rinkeby'
      const web3 = new Web3(torus.provider);
      web3.eth.getAccounts().then((accounts: string[]) => {
        this.publicAddress = accounts[0];
        web3.eth.getBalance(accounts[0]).then(console.log);
      });
      (window as any).torus = torus;
    } catch (error) {
      console.error(error);
    }

  }

// possiblity to send eth to 'mail'
  public getTorusPK() {
    const email: string = 'viktorko99@gmail.com';
    (window as any).torus.getPublicAddress(email).then(console.log);
  }

  public getTorusData() {
    console.log((window as any).torus);
  }


  public logout() {
    (window as any).torus.logout().then(() => (this.publicAddress = ''));
  }

  public changeProvider() {
    (window as any).torus.setProvider('rinkeby');
  }

  public async getUserInfo() {
    const userInfo = await (window as any).torus.getUserInfo();
    console.log(userInfo);
    this.$store.dispatch('addUser', userInfo.data.payload);
  }
}
</script>