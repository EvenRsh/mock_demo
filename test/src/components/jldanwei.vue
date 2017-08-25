<template>
  <div>
    <!--<span>这是一段信息</span>-->

  </div>
</template>

<script lang="">
  export default {
    name: '',
    props: {
//      cancle: {
//        type: Function
//      },
//      listData:{
//        type:Object
//      },
      jldanweiData:{
        type:Object
      }
    },
    data() {
      return {
        activeName2:"first",
        button: [
          {
            name: "新增",
            cb: ()=>{

            }
          }, {
            name: "修改",
            cb: function () {
//              alert("修改")
            }
          }
        ],
      }
    },
    components: {},
    methods:{
      handleClick(tab, event) {
//        console.log(tab, event);
      }
    }
  }
</script>

<style lang="">

</style>
