<template>
  <div>
    <el-form ref="form1" :model="form1" :inline="true" label-width="80px" :rules="rulesForm" style="text-align: center;">
      <el-form-item label="类型名称" prop="name">
        <el-input v-model="form1.name" style="width: 400px;"></el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: right;">
      <el-button type="text" icon="el-icon-circle-plus" @click="addRow">新增</el-button>
      <el-button type="text" icon="el-icon-remove" @click="deleteRow">删除</el-button>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%;margin:10px 0;" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="title" label="法规制度名称" align="center"></el-table-column>
        <el-table-column prop="state" label="拟制单位" align="center" width="220"></el-table-column>
        <el-table-column prop="time" label="拟制时间" :formatter="formateDate" align="center" width="200"></el-table-column>
        <el-table-column label="操作" width="120px" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="preview(scope.row)">预览</el-button>
            <el-button type="text" @click="editRow(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 50px;">
        <el-button type="primary" @click="saveType">保存</el-button>
        <el-button type="danger" @click="deleteRow">删除</el-button>
      </div>
    </div>

    <div>
      <el-dialog :title="titleDialog" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :before-close="beforeClose" width="600px">
        <el-form ref="ruleForm" :model="form" :rules="rules" label-width="108px">
          <el-form-item label="法规制度名称" prop="title">
            <el-input v-model="form.title" :disabled="disabled" placeholder="请输入法规制度名称" clearable></el-input>
          </el-form-item>
          <el-form-item label="拟制单位" prop="state">
            <el-select v-model="form.state" :disabled="disabled" placeholder="请选择拟制单位" clearable style="width: 100%;">
              <el-option label="安管出" value="安管出"></el-option>
              <el-option label="办公室" value="办公室"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="拟制时间" prop="time">
            <el-date-picker v-model="form.time" :disabled="disabled" type="date" placeholder="选择日期" clearable style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="beforeClose">取 消</el-button>
          <el-button v-if="!disabled" type="primary" @click="submitForm('ruleForm')">确 定</el-button>
          <el-button v-else type="primary" @click="beforeClose">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {},
  data () {
    return {
      form: {
        title: '',
        state: '',
        time: null
      },
      form1: {
        name: ''
      },
      tableData: [
        {
          title: '我是一个法规制度名称1',
          time: new Date(),
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称2',
          time: new Date(),
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称3',
          time: new Date(),
          state: '安管处'
        },
        {
          title: '我是一个法规制度名称4',
          time: new Date(),
          state: '安管处'
        }
      ],
      multipleSelection: [],
      rules: {
        title: [
          { required: true, message: '请输入法规制度名称', trigger: 'blur' }
        ],
        state: [
          { required: true, message: '请选择拟制单位', trigger: 'change' }
        ],
        time: [
          { required: true, message: '请选择拟制时间', trigger: 'change' }
        ],
      },
      rulesForm: {
        name: [
          { required: true, message: '请输入类型名称', trigger: 'blur' }
        ],
      },
      dialogFormVisible: false,
      titleDialog: '',
      disabled: false,
      index: null
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    addRow() {
      this.dialogFormVisible = true
      this.titleDialog = '新增'
      this.disabled = false
      this.form = {
        title: '',
        state: '',
        time: ''
      }
      if (this.$refs.ruleForm) {
        this.$refs.ruleForm.resetFields()
      }
    },
    preview(scope) {
      this.dialogFormVisible = true
      this.titleDialog = '预览'
      this.disabled = true
      this.form = JSON.parse(JSON.stringify(scope))
      console.log(scope);
    },
    editRow(scope) {
      this.index = scope.index
      this.dialogFormVisible = true
      this.titleDialog = '编辑'
      this.disabled = false
      this.form = JSON.parse(JSON.stringify(scope))
    },
    deleteRow() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择当前要删除的数据！',
          type: 'warning'
        })
        return
      } else {
        this.multipleSelection.forEach(item => {
          this.tableData.splice(item, 1)
        })
        this.$message({
          type: 'success',
          message: '删除成功！'
        })
      }
    },
    submitForm(formName) {
      if (this.titleDialog === '新增') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let form = JSON.parse(JSON.stringify(this.form))
            this.tableData.push(form)
            console.log(this.tableData);
            this.dialogFormVisible = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let form = JSON.parse(JSON.stringify(this.form))
            this.$set(this.tableData, this.index, form)
            this.dialogFormVisible = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    saveType() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '保存成功！'
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    tableRowClassName({row, rowIndex}) {
      row.index = rowIndex
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.map(item => item.index)
      this.multipleSelection = this.multipleSelection.sort().reverse()
    },
    beforeClose() {
      this.$refs.ruleForm.resetFields()
      this.dialogFormVisible = false
    },
    formateDate(row) {
      if (row.time) {
        return moment(row.time).format('YYYY-MM-DD')
      } else {
        return '----'
      }
    }
  }
}
</script>

<style scoped>
</style>
