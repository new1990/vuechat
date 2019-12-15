<template>
  <div class="toplist">

  <div id="hdm_MainMenu_box1" class="Contents">

    <div class="Main_Column">
        <!-- <ul class="CommonList mt10 fc">
          <li class ="topic" v-for="(value, key) in list" :key="key">
            <router-link :to="{name:'content',params:{id:key}}" >

            {{value}}

            </router-link>
          </li>
        </ul> -->


        <ul class="CommonList mt10 fc">
          <li class ="topic" v-for="(value, key) in list" :key="key">
            <router-link :to="{name:'content',params:{id:key}}" >
            <h1 class="ListTitle">
            {{value.name}}
            </h1>
            <div class="ListText">
              {{value.body}}
            </div>
            <div class="ListInfo fc">
              <span>
              {{value.ctegories_name}}
              </span>
              <span>
              {{ value.created_at | moment }}
              </span>
            </div>


            </router-link>
          </li>
        </ul>

        <template>
          <div class="pager">
    <paginate
      v-model="page"
      :page-count="10"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>

  </div>
      </template>
    </div>
    <div class="Side_Column">
      <div class="ContentsTitle">
      掲示板を探す・作る
      </div>

      <div class="Find_Contents ThreadMenu">
        <ul class="CommonMenuList mt10 fc">
          <li>
            <router-link  to="/new">
              <div class="Name"><span class="Icon Icon_Pencil03"></span>作る</div>
            </router-link>
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

  </div>
</template>

<script>
// firebase モジュール
import firebase from 'firebase'
import axios from 'axios'
import moment from 'moment';
import Paginate from 'vuejs-paginate'

const api = 'http://localhost:3000/rooms'


// 改行を <br> タグに変換するモジュール
// import Nl2br from 'vue-nl2br'
export default {
  name: 'TopList',
  // components: { Nl2br },
  components: {
    Paginate,

  },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: '' , // 入力したメッセージ
      list: [], // 最新状態はここにコピーされる
      col_list: [],
      page: 1,

    }
  },

  filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD');
        }
    },


  mounted () {
    let vm = this
    axios
      .get('http://localhost:3000/rooms')
      .then(response => (vm.list = response.data))
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
 //  created: function(){
 // var vue = this;
 //
 //  // firebase.database().ref("message").child("message").child("-LtL5SQNB3xygcsbumXF").child("room1").on('value', function(snapshots) {
 //  // vue.col_list = snapshots.val();
 //  // });
 //
 //
 //  firebase.database().ref('chat').on('value', function(snapshot) {
 //
 //   vue.list = snapshot.val();
 //   });
 // },
  methods: {
    // ログイン処理
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },

    clickCallback(pageNum) {
      this.page = pageNum; // pageNumはpagerの何番目をclickしたかを取得
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        let vm = this
        vm.list = data
        // if (data.length) {
        //   let vm = this
        //   vm.list = data
        // } else {
        //   console.log(1);
        // }
      })
      // axios.get(api, {
      //   params: {
      //     page: this.page,
      //   },
      // }).then(({ response }) =>{(vm.list = response.data)}


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

    childAdded(snap) {
      const message = snap.val()
      console.log(message);

    },

    // doSend() {
    //   if ( this.input.length) {
    //     // firebase にメッセージを追加
    //     // childでテーブル名を指定
    //     this.postArticle();
    //     firebase.database().ref("chat").push({
    //       title: this.input,
    //
    //     },() => {
    //
    //       this.input = '' // フォームを空にする
    //     } )
    //   }
    // },


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

.pager  ul.pagination {
  text-align: center;
  margin: 30px 0;
  padding: 0;
}

.pager .pagination li {
  display: inline;
  margin: 0 2px;
  padding: 0;
  display: inline-block;
  background:white;
  width: 40px;
  height: 30px;
  text-align: center;
  position: relative;

}

.pager .pagination li a{
  vertical-align: middle;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display:table;
  color: black;
  text-decoration: none;
  border: solid 0.1px #000000;
  padding-top: 5px;

}

.pager .pagination li a span{
  display:table-cell;
  vertical-align:middle;
}

.pager .pagination li a:hover,
.pager .pagination li a.active{
  color: #000;
  background: #ccf;
}

@media only screen and (max-width: 767px){
  .pager .pagination li{
    display: none;
  }

  .pager .pagination li.pre,
  .pager .pagination li.next{
    display: inline-block;
    width: 40%;
    height: 50px;
    text-align: center;
  }

  .pager .pagination li.pre a,
  .pager .pagination li.next a{
    width: 100%;
    text-align: center;
  }

  .pager .pagination li.pre span::after{
    content: "前の10件へ";
  }

  .pager .pagination li.next span::before{
    content: "次の10件へ";
  }

}

</style>
