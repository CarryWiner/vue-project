<template>
  <div>
    <el-form ref="form" :model="form" :inline="true" label-width="80px" style="text-align: center;">
      <el-form-item label="类型名称">
        <el-input v-model="form.name" style="width: 400px;"></el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: right;">
      <el-button type="text" icon="el-icon-circle-plus">新增</el-button>
      <el-button type="text" icon="el-icon-remove">删除</el-button>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
        <el-table-column type="selection" align="center" width="55"></el-table-column>
        <el-table-column prop="title" label="法规制度名称" align="center"></el-table-column>
        <el-table-column prop="state" label="拟制单位" align="center" width="220"></el-table-column>
        <el-table-column prop="time" label="拟制时间" align="center" width="200"></el-table-column>
        <el-table-column label="操作" width="120px" align="center">
          <template>
            <el-button type="text">预览</el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 50px;">
        <el-button type="primary">保存</el-button>
        <el-button type="danger">删除</el-button>
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
        name: ''
      },
      tableData: [
        {
          title: '我是一个法规制度名称',
          time: "2016-05-02",
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称',
          time: "2016-05-02",
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称',
          time: "2016-05-02",
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称',
          time: "2016-05-02",
          state: '安管处'
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
