<template>
  <div class="toplist">

    <!-- <button v-on:click="listen"></button> -->

    <top-content
      v-bind:key="list.id"
      v-bind:title="list.title"
      v-bind:body="list.body"
      ></top-content>

    <ul class="CommonList mt10 fc">
      <li class ="topic sub" v-for="(value, key) in list" :key="key">
        <div class= "left_chat">
          <img class="top_img pos_left" v-bind:src=value.image />

          <div class="pos_left">{{value.name}}</div>

        </div>
        <div class= "right_chat">
        {{value.message}}
        </div>






      </li>

    </ul>

    <transition-group name="chat" tag="div" class="list content">
      <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
        <div class="item-image"><img :src="image" width="40" height="40"></div>
        <div class="item-detail">
          <div class="item-name">{{ name }}</div>
          <div class="item-message">
            <nl2br tag="div" :text="message"/>
          </div>
        </div>
      </section>
    </transition-group>


    <form id ="end" action="" @submit.prevent="doSend" class="form">
      <textarea
        v-model="input"

        @keydown.enter.exact.prevent="doSend"></textarea>
      <button type="submit"  class="send-button">Send</button>
    </form>
  </div>
</template>

<script>
// firebase モジュール
import firebase from 'firebase'
import TopContent from "@/components/TopContent.vue";
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'
export default {
  name: 'TopList',
  components: {
    Nl2br,
    TopContent,

   },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: '' , // 入力したメッセージ
      list: [], // 最新状態はここにコピーされる
      col_list: [],
      name:'',
      image:'',
    }
  },

  // created() {
  //   // firebase.auth().onAuthStateChanged(user => {
  //     const ref_message = firebase.database().ref('message')
  //
  //       // message に変更があったときのハンドラを解除
  //       ref_message.limitToLast(10).off('child_added', this.childAdded)
  //
  //   // })
  // },
  created: function(){


   this.name = localStorage.getItem('name');
   this.image = localStorage.getItem('image');
   this.client = localStorage.getItem('client');
   this.uid = localStorage.getItem('uid');
   this.token = localStorage.getItem('access-token');


   var vue = this;

  // firebase.database().ref("message").child("message").child("-LtL5SQNB3xygcsbumXF").child("room1").on('value', function(snapshots) {
  // vue.col_list = snapshots.val();
  // });
  firebase.database().ref('chat/'+this.$route.params['id']).on('value', function(snapshot) {
   vue.list = snapshot.val();


   });

   if(this.client != null && this.token != null && this.uid !=null){

    return false;

   }else{
     this.name ='ゲストさん';
     this.image= 'https://pbs.twimg.com/profile_images/2729946515/bef7a4f9a35d7f36deaf63db9ac0dde8_400x400.png';
   }
 },


  methods: {


    // listen () {
    //   firebase.database().ref('message').on('value', snapshot => {
    //     console.log(snapshot.val());
    //     if (snapshot) {
    //       const rootList = snapshot.val()
    //       let list = []
    //       // データオブジェクトを配列に変更する
    //       Object.keys(rootList).forEach((val) => {
    //
    //         list.push(rootList[val])
    //       })
    //       // vueのdataに突っ込む
    //       this.list = list
    //     }
    //   })
    // },

    scrollToEnd() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#end");

            console.log(container.scrollHeight);
             })

      },
    // 受け取ったメッセージをchatに追加
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message
      })
      this.scrollBottom();

    },
    doSend() {
      if ( this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref("chat/"+this.$route.params['id']).push({


          message: this.input,
          name:this.name,
          image:this.image,




        }, () => {
          this.input = ''; // フォームを空にする
          this.scrollToEnd();
        })
      }
    }
  }
}
</script>
<style>

 @import "../css/styles.css";

</style>
