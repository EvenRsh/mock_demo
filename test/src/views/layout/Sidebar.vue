<template>
    <!--<el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">-->
      <!--<sidebar-item :routes='permission_routers'></sidebar-item>-->
    <!--</el-menu>-->
      <el-menu  theme="dark" unique-opened :default-active="$route.path">
        <sidebar-item :routes='permission_routers'></sidebar-item>
      </el-menu>
</template>


<script>
  import { mapGetters , mapActions } from 'vuex';
  import SidebarItem from './SidebarItem';
  export default {
    data(){
      return {

      }
    },
    components: { SidebarItem },
    computed: {
      ...mapGetters([
        'permission_routers',
//        'sidebar'
      ]),


      isCollapse() {
        return !this.sidebar.opened
      }
    },
    mounted(){
//      console.log(this.permission_routers);
//      this.$store.dispatch('GenerateRoutes')
//      this.GenerateRoutes()
    },
    created(){
//      console.log(this.permission_routers);
    }
  }
</script>
