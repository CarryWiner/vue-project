<template>
  <div style="height: 100%;">
    <div class="clearFloat">
      <el-link type="primary" style="font-size: 16px; float: left;">返回列表</el-link>
      <div style="line-height: 30px;font-size: 16px;float: right;">
        字体
        【<el-link :underline="false" class="sizeClass">大</el-link> 
        <el-link :underline="false" class="sizeClass">中</el-link> 
        <el-link :underline="false" class="sizeClass">小</el-link>】
        <el-tooltip content="打印" placement="top">
          <i class="el-icon-printer printClass"> 打印</i>
        </el-tooltip>
      </div>
    </div>
    <div style="width: 80%;height:100%;margin: 0 auto;">
      <pdf v-for="i in numPages" :key="i"  :src="url" :page="i"></pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{
    pdf
  },
  data(){
    return {
      url:"/PlayerAPI_v1.0.6.pdf",
      numPages:1,
    }
  },
  mounted () {
    this.getNumPages("/PlayerAPI_v1.0.6.pdf")
  },
  methods: {
    getNumPages(url) {
      var loadingTask = pdf.createLoadingTask(url)
      loadingTask.promise.then(pdf => {
        this.url = loadingTask
        this.numPages = pdf.numPages
      }).catch(() => {
        console.error('pdf加载失败')
      })
    },
  }
}
</script>

<style lang="less" scoped>
.clearFloat {
  margin-bottom: 10px;
}
.clearFloat::after {
  display: block;
  content: '';
  height: 0;
  clear: both;
}
.sizeClass {
  font-size: 16px;
  margin: 0 2px;
}
.printClass {
  cursor: pointer;
  &:hover {
    color: #66b1ff;
  }
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
</style>
