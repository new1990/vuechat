<template>
  <div class="toplist">

  <div id="hdm_MainMenu_box1" class="Contents">

    <div class="Main_Column">
        <ul class="CommonList mt10 fc">
          <li class ="topic" v-for="(value, key) in list" :key="key">
            <router-link :to="{name:'content',params:{id:key}}" >
            {{value.title}}
            </router-link>
          </li>
        </ul>
    </div>
    <div class="Side_Column">
      <div class="ContentsTitle">
      掲示板を探す・作る
      </div>
    </div>
  </div>

    <!-- <transition-group name="chat" tag="div" class="list content">
      <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
        <div class="item-image"><img :src="image" width="40" height="40"></div>
        <div class="item-detail">
          <div class="btn-flat-border">{{ name }}</div>
          <div class="item-message">
            <nl2br tag="div" :text="message"/>
          </div>
        </div>
      </section>
    </transition-group> -->

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
// import Nl2br from 'vue-nl2br'
export default {
  name: 'TopList',
  // components: { Nl2br },
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

    doSend() {
      if ( this.input.length) {
        // firebase にメッセージを追加
        // childでテーブル名を指定
        firebase.database().ref("chat").push({
          title: this.input,





        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    }
    // 受け取ったメッセージをchatに追加
    // データベースに新しい要素が追加されると随時呼び出される


  }
}
</script>
<style>
.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
}

.btn-flat-border:hover {
  background: #67c5ff;
  color: white;
}

.topic{
  padding-top:10px;
}

ul.CommonList li {
    position: relative;
    padding: 18px 13px 19px;
    margin-bottom: 10px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0px 1px 1px 0px #a5a9ab;
    -moz-box-shadow: 0px 1px 1px 0px #a5a9ab;
    -webkit-box-shadow: 0px 1px 1px 0px #a5a9ab;
}
/* @import css/styles.css"; */

.Contents {
    position: ralative;
    width: 960px;
    margin: 0 auto;
    padding: 0;
}

.Main_Column {
    float: left;
    width: 620px;
    margin: 0 20px 0 0;
}

.Side_Column {
    margin-top: 10px;
    float: right;
    width: 320px;
}
.ContentsTitle {
    position: relative;
    display: block;
    padding: 0 22px;
    font-size: 100%;
    font-weight: bold;
    color: #fff;
    background: #00b0f0;
    height: 45px;
    line-height: 45px;
}

</style>
