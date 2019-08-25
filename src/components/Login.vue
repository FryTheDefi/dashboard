<template>
  <div>
    <b-button v-if="publicAddress === ''" @click="login" type="button is-primary"><strong>Login</strong></b-button>
    <b-button v-if="publicAddress !== ''" @click="setUserInfo" type="button is-secondary"><strong>Approve App</strong></b-button>
  </div>
</template>

<script lang="ts">
import Box from '3box';
import Torus from '@toruslabs/torus-embed';
import { Component, Prop, Vue } from 'vue-property-decorator';
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
      });

      (window as any).torus = torus;



    } catch (error) {
      console.error(error);
    }

  }

// possiblity to send eth to 'mail'
  public getTorusPK() {
    // const email: string = 'viktorko99@gmail.com';
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

  public async setUserInfo() {
    try {
      const userInfo = await (window as any).torus.getUserInfo();
      this.$store.dispatch('addUser', { ...userInfo.data.payload });
      this.createBoxProfile({ ...userInfo.data.payload });

    } catch (e) {
      console.warn(e);
    }

  }

   public async createBoxProfile(userData) {

     const profile = await Box.getProfile(this.publicAddress);
     console.log('createBoxProfile', profile);
     if (!profile.name) {
    const box = await Box.openBox(this.publicAddress, (window as any).torus.ethereum, {});
    await box.public.setMultiple(Object.keys(userData), Object.values(userData));
      }

  }
}
</script>