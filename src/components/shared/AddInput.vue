<template>
<b-field>
  <b-input class="fancy-add" placeholder="Add" v-model="name"></b-input>
  <b-button @click="handleAdd" type="is-info">Add</b-button>
  </b-field>
  
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddInput extends Vue {
  public name: string = '';

  @Emit('onAdd')
  public handleAdd(event) {
    return this.name;
  }

}
</script>

<style scoped>
.fancy-add {
 flex-grow: 1;
}

</style>