<template>
  <div class="tile is-ancestor">
    <Tile class="is-4" />
    <Tile />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tile from '@/components/shared/Tile.vue';
import Box from '3box';

@Component({
  components: {
    Tile,
  },
})
export default class ChatRoom extends Vue {

   public async created() {
     const torus = (window as any).torus;
     if (torus) {
       const currentUser = await this.$store.state.currentUser;
       console.log('currentUser', currentUser);



    }
     console.log('Vue instance created');
  }


}
</script>
