  <template>
  <div class="input-ultra-wrapper">
    <b-menu>
        <b-menu-list label="Chat Spaces">
            <b-menu-item v-for="thread in threads" @click="handleClick" icon="chat" :label="thread"></b-menu-item>
        </b-menu-list>
    </b-menu>
    <AddInput @onAdd="handleAdd"/>
    </div>
</template>


<script lang="ts">
import AddInput from '@/components/shared/AddInput.vue';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AddInput,
  },
})
export default class SpaceList extends Vue {
  @Prop({ default: () => [] }) public readonly threads!: any[];

  @Emit('onThreadSelected')
  public handleClick(event) {
    console.log(event.target.innerText);
    return event.target.innerText;
  }

  @Emit('onAdd')
  public handleAdd(name) {
    return {
      isMessage: false,
      name,
    };
  }


}
</script>

<style scoped>
.input-ultra-wrapper {
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}

</style>