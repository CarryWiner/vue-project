<template>
  <el-aside width="230px">
    <el-scrollbar style="height: 100%">
      <el-menu
        default-active="homepage"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#324157"
        text-color="#BFCBD9"
        :collapse="false"
      >
        <template v-for="item in menuList">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="two in item.subs">
                <el-submenu v-if="two.subs" :index="two.index" :key="two.index">
                  <span slot="title">{{ two.title }}</span>
                  <!-- 三级菜单 -->
                  <el-menu-item
                    v-for="three in two.subs"
                    :index="three.index"
                    :key="three.index"
                    >{{ three.title }}</el-menu-item
                  >
                </el-submenu>

                <!-- 二级菜单 -->
                <el-menu-item v-else :index="two.index" :key="two.index" @click="goRules(item, two)">
                  {{two.title}}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>

          <!-- 一级菜单 -->
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index" @click="abc">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isCollapse: true,
      menuList: [
        {
          icon: "el-icon-s-home",
          index: "homepage",
          title: "主页",
          name: "主页",
        },
        {
          icon: "el-icon-s-custom",
          index: "custommanage",
          title: "法规制度",
          subs: [
            {
              index: "usermanage",
              title: "法规制度类型一",
              name: "法规制度类型一",
            },
            {
              index: "usercard",
              title: "法规制度类型二",
              name: "法规制度类型二",
            },
            {
              index: "drivermanage",
              title: "法规制度类型二",
              name: "法规制度类型二",
            },
          ],
        },
        {
          icon: "el-icon-s-flag",
          index: "test1",
          title: "周月讲评",
          subs: [
            {
              index: "usermanage2",
              title: "周讲评",
              name: "周讲评",
            },
            {
              index: "usercard1",
              title: "月讲评",
              name: "月讲评"
            },
          ],
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goRules(pre, id) {
      if (pre.title === '法规制度') {
        this.$router.replace({
          path: '/rules/' + id.index
        }).catch(() => {
          return false
        })
      }
      if (pre.title === '周月讲评') {
        this.$router.replace({
          path: '/weekmonth'
        }).catch(() => {
          return false
        })
      }
    },
    abc() {
      console.log(1);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    collClick() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  height: 100%;
  float: left;
  overflow-y: hidden;
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
/deep/.el-menu-item.is-active {
  background: #052b52 !important;
}
</style>