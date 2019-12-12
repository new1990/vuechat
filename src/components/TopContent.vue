<template>
  <div class="ThreadHeader">
    <div class="top_content">

      <h1 itemprop="headline">{{title}}</h1>
      <div class="ThreadDetailTxt fc">
      {{body}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'TopContent',
components: {

  },
 props: ['id','title','detail','body'],
 data: function(){ // データを返す関数にする
        return {

        }

    },

}
</script>

<style scoped>
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

</style>
