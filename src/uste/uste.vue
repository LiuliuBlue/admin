<template>
  <div class="uste">
    <div class="left">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>个人中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>数据可视化</span>
            </el-menu-item>
            <!-- 下拉 -->
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>用户</span>
              </template>
              <el-sub-menu index="1-4">
                <template #title>员工管理</template>
                <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
              </el-sub-menu>
              <el-sub-menu index="1-4">
                <template #title>角色列表</template>
                <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
              </el-sub-menu>
              <el-sub-menu index="1-4">
                <template #title>权限列表</template>
                <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
              </el-sub-menu>
            </el-sub-menu>
         
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>文章</span>
              </template>

              <el-sub-menu index="1-4">
                <template #title>文章排名</template>

                <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
              </el-sub-menu>
              <el-sub-menu index="1-4">
                <template #title>创建文章</template>

                <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="center">中间</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(props) {
    const store = useStore()
    const data = reactive({})

    return { ...toRefs(data) }
  }
}
</script>

<style lang="scss">
.uste {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  width: 30%;
  height: 100%;
  background-color: brown;
}
.center {
  width: 70%;
  height: 10%;
  background: skyblue;
}
</style>
