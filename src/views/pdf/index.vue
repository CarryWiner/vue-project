<template>
  <div style="height: 100%;">
    <div class="clearFloat">
      <el-link type="primary" style="font-size: 16px; float: left;" @click="goList">返回列表</el-link>
      <div style="line-height: 30px;font-size: 16px;float: right;">
        字体
        【<el-link v-for="(item, index) in sizeList" :key="index" :underline="false" :class="{'activeClass': cur === index}" class="sizeClass" @click="changeSize(item.size, index)">
            {{ item.label }}
          </el-link>】
        <el-tooltip content="打印" placement="top">
          <i class="el-icon-printer printClass"> 打印</i>
        </el-tooltip>
      </div>
    </div>
    <div style="background: #fff;">
      <div :style="{'width': fontSize, 'height':'100%', 'margin': '0 auto'}">
        <pdf v-for="i in numPages" :key="i"  :src="url" :page="i"></pdf>
      </div>
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
      sizeList: [
        { size: 'large', label: '大' },
        { size: 'medium', label: '中' },
        { size: 'small', label: '小' },
      ],
      cur: 1,
      fontSize: '80%',
    }
  },
  mounted () {
    console.log( '========',this.$route);
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
    goList() {
      // const map = new Map([
      //   ['法规制度类型一', '/rules/usermanage'], ['法规制度类型二', '/rules/usercard'], ['法规制度类型三', '/rules/drivermanage'],
      // ])
      this.$router.replace({
        path: this.$route.query.id
      }).catch(() => {
        return false
      })
    },
    changeSize(val, index) {
      this.cur = index
      if (val) {
        this.fontSize = (val === 'large') ? '100%' : (val === 'small') ? '60%' : '80%'
      } else {
        this.fontSize = '80%'
      }
    }
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
.activeClass {
  color: #66b1ff;
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
