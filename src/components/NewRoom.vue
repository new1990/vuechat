<template>
  <div class="toplist">

  <div id="hdm_MainMenu_box1" class="Contents">

    <div class="Side_Column">
      <div class="ContentsTitle">
      掲示板を探す・作る
      </div>

      <div class="Find_Contents ThreadMenu">
        <ul class="CommonMenuList mt10 fc">
          <li>
            <div class="Name"><span class="Icon Icon_Pencil03"></span>作る</div>
          </li>
        </ul>
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

    <form action="" @submit.prevent="postArticle" class="aaa">


      <div class="cp_iptxt">
        <label class="ef">
            <input
              v-model="input"
              placeholder="タイトル"
              @keydown.enter.exact.prevent="postArticle">
</label>
      </div>

        <textarea
          v-model="body"
          placeholder="内容"
          class="textlines"
          @keydown.enter.exact.prevent="postArticle"></textarea>
      <button type="submit"  class="aaa">Send</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios'
// 改行を <br> タグに変換するモジュール
// import Nl2br from 'vue-nl2br'
export default {
  name: 'NewRoom',
  // components: { Nl2br },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: '' , // 入力したメッセージ
      body: '' ,
      list: [], // 最新状態はここにコピーされる
      col_list: []
    }
  },



  methods: {

    postArticle(){
      if ( this.input.length) {
                var article = {
                    'name': this.input,
                    'body': this.body,
                    'st_flg': 1,
                    'm_ctegories_id':1,
                };
                axios.post('http://localhost:3000/rooms',article).then(res => {
                    console.log(res.data.title);
                    console.log(res.data.content);
                    this.input = ''
                });
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
    margin-top:20px;
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

.cp_iptxt {
	position: relative;
	width: 80%;
	margin: 40px 3%;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b2538;
	border-radius: 4px;
}
.ef input[type='text']:focus {
	border: 1px solid #da3c41;
	outline: none;
	box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}


.textlines {
    border: 2px solid #0a0;  /* 枠線 */
    border-radius: 0.67em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color: snow;  /* 背景色 */
    width: 20em;             /* 横幅 */
    height: 120px;           /* 高さ */
    font-size: 1em;          /* 文字サイズ */
    line-height: 1.2;        /* 行の高さ */
}
</style>
