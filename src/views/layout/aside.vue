<template>
  <el-aside width="230px">
    <el-scrollbar style="height: 100%">
      <el-menu
        :default-active="activeMenu"
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
                    @click="goWeekMonth(three, two)"
                    >{{ three.title }}</el-menu-item
                  >
                </el-submenu>

                <!-- 二级菜单 -->
                <el-menu-item v-else :index="two.index" :key="two.index" @click="goRules(item, two)">
                  <i v-if="two.icon" :class="two.icon" style="vertical-align: text-bottom;"></i>
                  {{two.title}}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>

          <!-- 一级菜单 -->
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index" @click="goHome(item)">
              <i :class="item.icon" style="vertical-align: text-bottom;"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  components: {},
  data() {
    return {
      isCollapse: true,
      activeMenu: 'homepage',
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
            {
              icon: "el-icon-circle-plus",
              index: "add",
              title: "新增分类",
              name: "新增分类",
            },
          ],
        },
        {
          icon: "el-icon-s-flag",
          index: "test1",
          title: "周月讲评",
          subs: [
            {
              index: "2021",
              title: "2021",
              name: "2021",
              subs: [
                {
                  index: "2021-1",
                  title: "周讲评",
                  name: "周讲评",
                },
                {
                  index: "2021-2",
                  title: "月讲评",
                  name: "月讲评"
                }
              ]
            },
            {
              index: "2020",
              title: "2020",
              name: "2020",
              subs: [
                {
                  index: "2020-1",
                  title: "周讲评",
                  name: "周讲评",
                },
                {
                  index: "2020-2",
                  title: "月讲评",
                  name: "月讲评"
                }
              ]
            },
            {
              icon: "el-icon-circle-plus",
              index: "addDate",
              title: "新增年份",
              name: "新增年份",
            },
          ],
        },
        {
          icon: "el-icon-s-custom",
          index: "suggestions",
          title: "意见建议",
          subs: [
            {
              index: "banggongshi",
              title: "办公室",
              name: "办公室",
            },
            {
              index: "jiaobaoke",
              title: "教保科",
              name: "教保科",
            },
            {
              index: "keyanxueshuchu",
              title: "科研学术处",
              name: "科研学术处",
            },
            {
              index: "bangongshi",
              title: "办公室",
              name: "办公室",
            }
          ],
        },
      ],
    };
  },
  computed: {},
  created() {
    if (Cookies.get('activeMenu')) {
      this.activeMenu = Cookies.get('activeMenu')
    } else {
      this.$router.replace('/home')
      this.activeMenu = 'homepage'
    }
  },
  mounted() {},
  methods: {
    goHome(val) {
      if (val.title === '主页') {
        Cookies.remove('activeMenu')
        Cookies.set('activeMenu', val.index)
        this.$router.replace({
          path: '/home'
        }).catch(() => {
          return false
        })
      }
    },
    goRules(pre, id) {
      if (pre.title === '法规制度') {
        if (id.title === '新增分类') {
          Cookies.remove('activeMenu')
          Cookies.set('activeMenu', id.index)
          this.$router.replace({
            path: '/addRules'
          }).catch(() => {
            return false
          })
        } else {
          Cookies.remove('activeMenu')
          Cookies.set('activeMenu', id.index)
          this.$router.replace({
            path: '/rules/' + id.index
          }).catch(() => {
            return false
          })
        }
      }
      if (pre.title === '意见建议') {
        Cookies.remove('activeMenu')
        Cookies.set('activeMenu', id.index)
        this.$router.replace({
          path: '/suggestions'
        }).catch(() => {
          return false
        })
      }
      if (pre.title === '周月讲评') {
        if (id.title === '新增年份') {
          Cookies.remove('activeMenu')
          Cookies.set('activeMenu', id.index)
          this.$router.replace({
            path: '/addDate'
          }).catch(() => {
            return false
          })
        }
      }
    },
    goWeekMonth(pre, id) {
      debugger
      console.log(pre, id);
      if (pre.title === '周讲评') {
        Cookies.remove('activeMenu')
        Cookies.set('activeMenu', pre.index)
        this.$router.replace({
          path: '/weekComments/' + id.index
        }).catch(() => {
          return false
        })
      } else {
        Cookies.remove('activeMenu')
        Cookies.set('activeMenu', pre.index)
        this.$router.replace({
          path: '/monthComments/' + id.index
        }).catch(() => {
          return false
        })
      }
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
  /deep/ .el-menu-item, /deep/ .el-submenu__title{
    font-size: 16px;
  }
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