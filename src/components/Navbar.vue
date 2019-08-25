<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item>
               <strong>Fry the DeFi</strong>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/chat">About</router-link>
            </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item>
              {{ user.name }}
          </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                  <router-link to="/chat" class="button is-light">
                        Chat Room
                    </router-link>
                  <Login />
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import Login from '@/components/Login.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Login,
  },
})
export default class Navbar extends Vue {

   get user() {
    return this.$store.state.currentUser; // this.todos;
}

}
</script>