<template>
 <div class='message-wrapper'>
   <figure class="image is-64x64">
  <img class="is-rounded" :src="image">
</figure>
<div class='message-wrapper-content'>
  <h6 class="title is-6 message-title">{{ (user && user.name) || post.author}}</h6>
  <div>
    {{post.message}}
  </div>
  </div>
            
</div>

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ChatItem extends Vue {
  @Prop({ default: () => {} }) public readonly post!: any;
  @Prop({ default: () => {} }) public readonly user!: any;

  private defImage: string = 'https://bulma.io/images/placeholders/128x128.png'

  
  public get image() : string {
    return (this.user && this.user.profileImage) || this.defImage
  }
  
}
</script>

<style scoped>
 .message-wrapper {
    margin-bottom: 1.5rem;
   display: flex;
 }

 .message-wrapper-content {
   display: flex;
   flex-direction: column;
   padding-left: 1em;
 }

 .title.is-6.message-title {
   margin-bottom: 0.5rem !important;
 }
</style>


// author: "did:3:bafyreigbeckaibrndah4eqntwntlhq4qh6tpnbuvbq75pvuazekk264nme"
// message: "nothubg new"
// postId: "zdpuB1v1fo8qcorSRhGyWHd9w4bKYYz4tJFTkQp4BnFicfReQ"
// timestamp: 1566682031