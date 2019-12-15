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

.top_content {
    position: relative;
    padding: 16px 18px 19px 17px;
}

.ThreadHeader {
    background: #fff;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    box-shadow: 0px 1px 1px 0px #a5a9ab;
    -moz-box-shadow: 0px 1px 1px 0px #a5a9ab;
    -webkit-box-shadow: 0px 1px 1px 0px #a5a9ab;
}

.ThreadDetailTxt {
    position: relative;
    margin: 17px 0 0px 1px;
    max-height: 70px;
    overflow: hidden;
    box-sizing: border-box;
}

a {
text-decoration: none;
}

.ListText {
    width: 100%;
    height: 3.2em;
    line-height: 1.6em;
    padding-left: 102px;
    margin-top: 7px;
    color: #444444;
    font-size: 81%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-orient: vertical;
}

.ListInfo {
    position: relative;
    top: 3px;
    padding-left: 102px;
    line-height: 1.7em;
    height: 21px;
    font-size: 69%;
    color: #ababab;
    float: right;
}

.Find_Contents {
    padding: 0 8px;
}

.ThreadMenu ul li:first-child {
    padding: 10px;
}

.ThreadMenu ul li {
    position: relative;
    /* height: 62px; */
    padding: 10px 10px 12px;
}

.ThreadMenu ul li .Name {
    float: left;
    height: 44px;
    line-height: 47px;
    color: #444444;
    font-size: 95%;
    font-weight: bold;
    margin-right: 27px;
    padding-left: 9px;
}

.ListTitle{
    display: block;
    width: 100%;
    height: 21px;
    padding-left: 102px;
    font-size: 107%;
    color: #444;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
