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

</style>
