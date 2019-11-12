import firebase from 'firebase'
import Vue from 'vue/dist/vue.esm.js';
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var firebaseConfig = {
   apiKey: "AIzaSyBUa1jsVxnKzKwUYygpXrkAdcWag4p4dp0",
   authDomain: "chatapp-e215f.firebaseapp.com",
   databaseURL: "https://chatapp-e215f.firebaseio.com",
   projectId: "chatapp-e215f",
   storageBucket: "chatapp-e215f.appspot.com",
   messagingSenderId: "613752163571",
   appId: "1:613752163571:web:932b2a927bd180ce"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
