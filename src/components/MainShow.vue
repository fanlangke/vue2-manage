<template>
  <el-container style="height:100%" >
  <el-aside width="auto">
    <AsideShow></AsideShow>
  </el-aside>
  <el-container>
    <el-header class="header" style="padding:0px">
      <HeaderShow></HeaderShow>
    </el-header>
    <CommonTag></CommonTag>
    <el-main class="ma">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import AsideShow from './AsideShow.vue'
import HeaderShow from './HeaderShow.vue'
import CommonTag from './CommonTag.vue'
export default {
  name: 'MainShow',
  components: {
    AsideShow,
    HeaderShow,
    CommonTag
}
}
</script>

<style scoped>
.header{
background-color: #333;
}
.ma{
    padding-top: 20px;
}
</style>