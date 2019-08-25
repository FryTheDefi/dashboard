<template>
  <div class="tile is-ancestor chat-wrapper">
    <Tile class="is-4" >
      <SpaceList :threads="threads" @onThreadSelected="handleThreadSelected" @onAdd="handleAdd" />
    </Tile>
    <Tile >
      <Chat :posts="posts" @onAdd="handleAdd" :userMap="userMap" />
    </Tile>
  </div>
</template>

<script lang="ts">
import Chat from '@/components/Chat.vue';
import Tile from '@/components/shared/Tile.vue';
import SpaceList from '@/components/SpaceList.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Box from '3box';
import Web3 from 'web3';

@Component({
  components: {
    Tile,
    SpaceList,
    Chat,
  },
})
export default class ChatRoom extends Vue {

  public chatSpace: any = null;
  public threads: any[] = [];
  public selectedThread: any = {};
  public posts: any[] = [];
  public userMap: any = {};
  public box: any = {};

  public opts = {
    firstModerator: 'did:3:0000',
  };

   public async created() {
     const torus = (window as any).torus;
     if (torus) {
       const web3 = new Web3(torus.provider);

       const accounts = await web3.eth.getAccounts();
       const myAddress = accounts[0];

       const box = await Box.openBox(myAddress, torus.ethereum, {});

       await new Promise((resolve, reject) => box.onSyncDone(resolve));
       const chatSpace = await box.openSpace('fry-the-defi');

       this.chatSpace = chatSpace;
       const myDid = chatSpace.DID;

      const threads = ['welcome']; 
       this.threads = threads || [];
    }
     console.log('Vue instance created');
  }

  public async handleThreadSelected(threadName) {
    console.log('threadName', threadName);

    const thread = await this.chatSpace.joinThread(threadName, this.opts);

    this.selectedThread = thread;
    console.log('thread', thread);

    // thread.onUpdate(() => this.updateThreadPosts());
    this.updateThreadPosts();

  }

  public async updateThreadPosts() {
    const posts = await this.selectedThread.getPosts();
    console.log('posts', posts);
    this.posts = posts;
    posts.length && this.getUsersForPosts();


  }

  public async getUsersForPosts() {
    const uniqueUsers = new Set();
    const users = this.posts.map(({author}) => uniqueUsers.add(author));
    let userMap = {}


    const yy = Array.from(uniqueUsers).map(async (userDID: string) => {
        
        try {
          const x = await Box.getProfile(userDID);
          console.log(x)
          this.userMap[userDID] = { ...x }
        } catch (e) {
          console.warn('getUsersForPosts',userDID , e);
        }
      })
    
  }


  public async handleAdd(data) {
    console.log('data', data);
    if (data.isMessage) {
        await this.selectedThread.post(data.name);
        this.updateThreadPosts();
    } else {
      const threads = await this.chatSpace.public.get('threads');
      console.log('threads', threads)
      if (!threads) {
        
        await this.chatSpace.public.set('threads', [data.name])
      } else {
        await this.chatSpace.public.set('threads', [...threads, data.name])
      }


      await this.chatSpace.joinThread(data.name, this.opts);
      this.threads = this.chatSpace.public.get('threads');
    }
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
}
</script>

<style scoped>
  .tile.is-ancestor.chat-wrapper {
    height: 95vh !important;
  }
</style>
