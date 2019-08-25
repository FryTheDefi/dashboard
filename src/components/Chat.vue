  <template>
  <div class="input-ultra-wrapper">
    <div v-if="!posts.length">No Messages yet! :(</div>
    <div>
    <ChatItem v-for="post in posts" :post="post" :user="userMap[post.author]" />
    </div>
    <AddInput @onAdd="handleAdd"/>
  </div>
</template>


<script lang="ts">
import AddInput from '@/components/shared/AddInput.vue';
import ChatItem from '@/components/shared/ChatItem.vue';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ChatItem,
    AddInput,
  },
})
export default class ChatList extends Vue {
  @Prop({ default: () => [] }) public readonly posts!: any[];
  @Prop({ default: () => {} }) public readonly userMap!: any;

  @Emit('onAdd')
  public handleAdd(name) {
    return {
      isMessage: true,
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