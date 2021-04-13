<template>
  <div style="background: #fff;">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="item in weekList" :title="item.month" :name="item.id" :key="item.id">
        <ul v-if="item.list && item.list.length" class="ulClass">
          <li v-for="(i, index) in item.list" :key="index">
            <el-link type="primary" @click="goPdf">{{ i.name }}-{{ i.time }}</el-link>
          </li>
        </ul>
        <div v-else>暂无数据</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      activeName: '1',
      weekList: [
        {
          id: '1',
          month: '一月',
          list: [
            {name: '第一周讲评', time: '2020.01.01 10:00'},
            {name: '第二周讲评', time: '2020.01.01 10:00'},
            {name: '第三周讲评', time: '2020.01.01 10:00'},
            {name: '第四周讲评', time: '2020.01.01 10:00'},
          ]
        },
        {
          id: '2',
          month: '二月',
          list: [
            {name: '第一周讲评', time: '2020.01.01 10:00'},
            {name: '第二周讲评', time: '2020.01.01 10:00'},
            {name: '第三周讲评', time: '2020.01.01 10:00'},
            {name: '第四周讲评', time: '2020.01.01 10:00'},
          ]
        },
        {
          id: '3',
          month: '三月',
          list: []
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goPdf() {
      this.$router.replace({
        path: '/pdf'
      }).catch(() => {
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ulClass {
  padding: 0;
  margin: 0;
  text-align: center;
  & > li {
    a {
      font-size: 16px;
    }
  }
}
/deep/ .el-collapse {
  & > div {
    & > div {
      padding: 0 10px;
      // border-bottom: 1px solid #ccc;
    }
  }
  /deep/ .el-collapse-item__header {
    font-size: 16px;
  }
}
</style>
