<template>
  <div class="index">
    <ul>
      <li v-for="item,key in newsListShow">
        <img :src="item.thumbnail_pic_s" :alt="item.title">
        <!--{{item}}-->
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '@/config/fetch.js'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:['10',"20"],
      newsListShow: []
    }
  },
  components: {


  },
  mounted:function () {
    api.getData('/api/data').then(res => {
    console.log(res)
      this.newsListShow = res.articles;
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
