<template>
  <div>
    <!-- {{ $route.params.userId }} -->
    <el-form :inline="true" :model="ruleForm" ref="ruleForm" class="formClass">
      <el-form-item prop="search">
        <el-input placeholder="请输入内容" v-model="ruleForm.search" style="width: 300px;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜 索</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="24">
        <ul class="ulClass">
          <li v-for="(item, index) in newsList" :key="index">
            <a @click="pdf()">● {{ item.news }}</a>
            <span>{{ item.time }}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div style="text-align: center;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      currentPage: 1,
      ruleForm: {
        search: ''
      },
      newsList: [
        { news: '700多名学生被河北邯郸一景区扣留长达两小时？景区回应', time: '2020-03-23 10:08' },
        { news: '官方通报三亚某饭店海鲜欺客宰客:未发现海鲜掉包 掺杂掺假', time: '2020-03-23 10:08' },
        { news: '肯德基给了杯消毒水?饮用时发现味道不对 女孩身体不适就医', time: '2020-03-23 10:08' },
        { news: '山东一居委会发通告禁止居民上坟？官方批评：工作简单粗暴', time: '2020-03-23 10:08' },
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    pdf() {
      this.$router.replace({
        path: '/pdf'
      }).catch(() => {
        return false
      })
    },
    onSubmit() {
      console.log(this.ruleForm.search);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="less" scoped>
.formClass {
  text-align: center;
}
.ulClass {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    line-height: 1.5;
    margin-bottom: 10px;
    a {
      cursor: pointer;
      font-size: 16px;
      text-decoration: none;
      color: #333;
      &:visited {
        color: red;
      }
      &:hover {
        color: rgb(33, 124, 199);
      }
    }
    span {
      font-size: 14px;
      color: #8e8e8e;
      margin-left: 24px;
    }
  }
}
</style>
