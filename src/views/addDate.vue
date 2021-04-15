<template>
  <div>
    <el-form ref="form" :model="form" :inline="true" label-width="80px" style="text-align: center;">
      <el-form-item label="年份">
        <el-date-picker v-model="form.year" type="year" placeholder="选择年份" style="width: 400px;"></el-date-picker>
      </el-form-item>
    </el-form>
    <div>
      <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
        <el-table-column prop="title" label="周月讲评名称" align="center"></el-table-column>
        <el-table-column label="附件" align="center" width="220">
          <template slot-scope="scope">
            <el-button type="text">{{ scope.row.enclosure }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <template>
            <el-button type="text">预览</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 50px;">
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      form: {
        year: ''
      },
      tableData: [
        {
          title: '我是一个周月讲评名称',
          enclosure: '我是一个附件'
        },
        {
          title: '我是一个周月讲评名称',
          enclosure: '我是一个附件'
        },
        {
          title: '我是一个周月讲评名称',
          enclosure: '我是一个附件'
        },
        {
          title: '我是一个周月讲评名称',
          enclosure: '我是一个附件'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
</style>
