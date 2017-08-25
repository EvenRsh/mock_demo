<template>
    <div class="buttons-wrapper">
      <el-button v-for="item in buttons" @click="item.cb">{{item.name}}</el-button>
    </div>
</template>

<script lang="">
    export default {
        name: 'buttonBox',
      props: {
        buttons: {
          type: Array
        }
      },
        data() {
            return {
//              buttons:["新增","修改",'删除','查看','关闭'],
            }
        },
        components: {}
    }
</script>

<style lang="" scoped>
  .buttons-wrapper{
    width: 100%;
    height: 100%;
    border: 1px solid #0e90d2;
    padding:5px;
    background-color: #00B7FF;
    border-radius: 8px;
    margin-bottom:20px;
  }
</style>
