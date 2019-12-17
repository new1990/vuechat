<template>

<header class="header">
<div class="head_wrapper">

    <ul class="menu">
      <li>
     <router-link to="/">みんなでチャット</router-link>
     </li>
     <li>
    カテゴリー

    </li>
   </ul>

   <ul class="admmin">
    <li class ="in" v-if="client != null && token != null && uid !=null">
      <img class="top_img" v-bind:src=image />
      {{name}}

      <button class="btn-flat-dashed-filled" v-on:click="logout">ログアウト</button>

    </li>
    <li class ="out" v-else>
      <router-link to="/login">ログイン</router-link>
      <router-link to="/new_account">アカウント作成</router-link>


    </li>
    </ul>
 </div>

  </header>
</template>

<script>

export default {
name: 'HeaderItem',
components: {

  },

 data: function(){ // データを返す関数にする
        return {
          name:'',
          image:'',
          token:'',
          client:'',
          uid:'',

        }

    },

    created :function(){
    this.name = localStorage.getItem('name');
    this.image = localStorage.getItem('image');
    this.client = localStorage.getItem('client');
    this.uid = localStorage.getItem('uid');
    this.token = localStorage.getItem('access-token');


  },
 methods: {
  logout: function () {
     localStorage.removeItem('name');
     localStorage.removeItem('image');
     localStorage.removeItem('client');
     localStorage.removeItem('uid');
     localStorage.removeItem('access-token');
     this.something();

   },
   reload() {
     this.$router.go({path: this.$router.currentRoute.path, force: true});
     },
     something() {
         // reloadを呼び出すことで画面リロード
         this.reload();
     },

 },


}
</script>

<!-- style中身は省略 -->
<style scoped>
.header{
  height: 70px;
  align-items: center;


}

.head_wrapper{
    position: relative;
    margin: 0 auto;
    padding: 0 50px;

}



.menu li {
    display: inline-block;
    margin-right: 18px;
}

ul{
  display: inline-block;
}

.menu{
float: left;
margin-top:10px;
}

.admmin{
float: right;

}

.in{

}
.out{
  margin-top:10px;
}




</style>
