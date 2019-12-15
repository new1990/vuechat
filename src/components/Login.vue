<template>
  <div class="aa">
    <div class="aa">

      <input placeholder="メール" v-model="email"><br>
      <input placeholder="パス" v-model="l_pass"><br>
      <input placeholder="打ち直しパス" v-model="l_v2_pass"><br>
      <button class="btn-flat-dashed-filled" v-on:click="login">作成</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'http://localhost:3000/api/v1/auth/sign_in'
export default {
name: 'Login',
components: {

  },

 data: function(){ // データを返す関数にする
        return {
          email:'',
          l_pass:'',
          l_v2_pass:'',

        }

    },

    methods : {
      login: function(){
        axios.post(api, { email: this.email,password:this.l_pass , password_confirmation: this.l_v2_pass}).then((response) => {

          if (response.status == 200){

            localStorage.setItem('access-token', response.headers['access-token'])
            localStorage.setItem('client', response.headers['client'])
            localStorage.setItem('uid', response.headers['uid'])
            localStorage.setItem('image', response.data['data']['image'])
            localStorage.setItem('name', response.data['data']['name'])
            console.log(1);

             this.something();

          }else{
            console.log(4);

          }

            // console.log(response.headers.access-token);
          }, (error) => {
            console.log(error);
         });

      },

      reload() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
        },
        something() {
            // reloadを呼び出すことで画面リロード
            this.reload();
        },



    }

}
</script>

<style scoped>

</style>
