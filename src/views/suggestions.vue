<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="dialogFormVisible = true">发表意见建议</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%;margin:20px 0;">
      <el-table-column prop="title" label="意见建议标题"></el-table-column>
      <el-table-column prop="time" label="时间" width="180"></el-table-column>
      <el-table-column prop="state" label="状态" width="180"></el-table-column>
      <el-table-column label="操作" width="200">
        <template>
          <el-button type="text">查看</el-button>
          <el-button type="text">回复</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

    <div>
      <el-dialog title="发表意见建议" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
        <p style="text-align: center;font-size: 22px;font-weight: bold;">欢迎您提出宝贵的意见和建议</p>
        <el-form :model="dateForm" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="dateForm.title" style="width: 80%;"></el-input>（限30个字）
          </el-form-item>
          <el-form-item label="内容">
            <el-input :rows="4" v-model="dateForm.content" type="textarea"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="6">
              <el-form-item label="附件">
                <el-upload
                  class="upload-demo"
                  action="#"
                  :on-change="handleChange"
                  :file-list="dateForm.fileList">
                  <el-button size="small" type="text">上传附件</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="推送部门">
                <el-select v-model="dateForm.pushDepartment1" placeholder="请选择推送部门">
                  <el-option label="办公室" value="shanghai"></el-option>
                  <el-option label="教保处" value="beijing"></el-option>
                  <el-option label="科研学术处" value="keyanxueshuchu"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="您的部门">
                <el-select v-model="dateForm.pushDepartment2" placeholder="请选择您的部门">
                  <el-option label="办公室" value="shanghai"></el-option>
                  <el-option label="教保处" value="beijing"></el-option>
                  <el-option label="科研学术处" value="keyanxueshuchu"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="您的部门">
                <el-input v-model="dateForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="您的联系方式" label-width="120px">
                <el-input v-model="dateForm.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label-width="20px">
                <el-checkbox v-model="dateForm.checked">匿名提交</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suggestions',
  data() {
    return {
      currentPage: 1,
      dialogFormVisible: false,
      dateForm: {
        title: '',
        content: '',
        fileList: [],
        pushDepartment1: '',
        pushDepartment2: '',
        name: '',
        phone: '',
        checked: false
      },
      tableData: [
        {
          title: '意见建议标题1',
          time: "2016-05-02",
          state: '已回复'
        },
        {
          title: '意见建议标题2',
          time: "2016-05-02",
          state: '已回复'
        },
        {
          title: '意见建议标题3',
          time: "2016-05-02",
          state: '已回复'
        },
        {
          title: '意见建议标题4',
          time: "2016-05-02",
          state: '未回复'
        }
      ]
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>