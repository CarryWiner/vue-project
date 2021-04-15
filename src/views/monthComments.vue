<template>
  <div class="wrap">
    <div class="content">
      <ul class="ulClass">
        <li v-for="(i, index) in monthList" :key="index">
          <el-link type="primary" @click="goPdf">{{ i.name }}-{{ i.time }}</el-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      monthList: [
        { id: 1, name: '一月月讲评', time: '2021.01.01 10:00' },
        { id: 2, name: '二月月讲评', time: '2021.02.01 10:00' },
        { id: 3, name: '三月月讲评', time: '2021.03.01 10:00' },
        { id: 4, name: '四月月讲评', time: '2021.04.01 10:00' },
        { id: 5, name: '五月月讲评', time: '2021.05.01 10:00' },
        { id: 6, name: '六月月讲评', time: '2021.06.01 10:00' },
        { id: 7, name: '七月月讲评', time: '2021.07.01 10:00' },
        { id: 8, name: '八月月讲评', time: '2021.08.01 10:00' },
        { id: 9, name: '九月月讲评', time: '2021.09.01 10:00' },
        { id: 10, name: '十月月讲评', time: '2021.10.01 10:00' },
        { id: 11, name: '十一月月讲评', time: '2021.11.01 10:00' },
        { id: 12, name: '十二月月讲评', time: '2021.12.01 10:00' },
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goPdf() {
      this.$router.replace({
        path: '/pdf',
        query: {
          id: this.$route.path
        }
      }).catch(() => {
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  text-align: center;
  .ulClass {
    padding: 0;
    margin: 0;
    display: inline-block;
    li {
      list-style: none;
      margin: 10px 0;
      text-align: left;
      a {
        font-size: 16px;
      }
    }
  }
}
</style>
