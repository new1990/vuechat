<template>
  <div id="app">
    <HeaderItem/>

    <div class ="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import HeaderItem from './components/HeaderItem'
import HeaderItem from './components/HeaderItem'
export default {
  name: 'App',
  components : {
   HeaderItem
 },

}
</script>


<style>
html{
  background: #f9f9f9;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;



}

.main{
  padding-top: 50px;
}


</style>
