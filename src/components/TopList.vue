<template>
  <div class="toplist">
    <header class="header">
      <h1>Chat</h1>

      <!-- <div v-if="user.uid" key="login">
        [{{ user.displayName }}]
        <button type="button" @click="doLogout">ログアウト</button>
      </div>

      <div v-else key="logout">
        <button type="button" @click="doLogin">ログイン</button>
      </div> -->
    </header>
    <!-- <button v-on:click="listen"></button> -->
aa:{{col_list}}
    <ul>
      <li v-for="(value, key) in list" :key="key"><button> {{key}}</button></li>
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

    <form action="" @submit.prevent="doSend" class="form">
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
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'
export default {
  name: 'TopList',
  components: { Nl2br },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: '' , // 入力したメッセージ
      list: [], // 最新状態はここにコピーされる
      col_list: []
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
 var vue = this;

  // firebase.database().ref("message").child("message").child("-LtL5SQNB3xygcsbumXF").child("room1").on('value', function(snapshots) {
  // vue.col_list = snapshots.val();
  // });


  firebase.database().ref('chat').on('value', function(snapshot) {

   vue.list = snapshot.val();
   });
 },
  methods: {
    // ログイン処理
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    // ログアウト処理
    doLogout() {
      firebase.auth().signOut()
    },
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

    // スクロール位置を一番下に移動
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
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
      this.scrollBottom()
    },
    doSend() {
      if ( this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref("chat/room2").push({
          title:"内容",
          room_conte:{message: this.input,}



        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    }
  }
}
</script>
<style>

/* @import "@/css/styles.css"; */

</style>
