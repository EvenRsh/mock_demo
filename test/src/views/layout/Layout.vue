<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="">
  import {Sidebar, AppMain} from '@/views/layout';

  export default {
    name: 'layout',
    data() {
      return {}
    },
    components: {
      Sidebar,
      AppMain
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

  .app-wrapper {
  @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.hideSidebar {

      .sidebar-container {
        width: 36px;
        overflow: inherit;
      }

      .main-container {
        margin-left: 36px;
      }

    }
  .sidebar-container {
    transition: width 0.28s ease-out;
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none
    }

  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s ease-out;
    margin-left: 180px;
  }

  }
</style>
