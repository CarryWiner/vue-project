<template>
  <el-container>
    <el-header>法制院校</el-header>
    <el-container>
      <Aside />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/views/layout/aside'
export default {
  components: { Aside },
  data () {
    return {
      
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
  }
}
</script>

<style scoped lang="less">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  .el-container {
    height: 100%;
  }

</style>
