<template>
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="titleBar">
            <img class="logo" src="../assets/zyx.png" />
            <div class="title">zyx OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <!--      <div>{{ store.state.user?.loginUser?.userName ?? "未登录"}}</div>-->
      <a-dropdown trigger="hover">
        <a-avatar shape="circle">
          <template
            v-if="store.state.user?.loginUser && store.state.user?.loginUser?.userRole !== ACCESS_ENUM.NOTE_LOGIN"
          >
            <template v-if="store.state.user?.loginUser.userAvatar">
              <img
                alt="avatar"
                :src="store.state.user?.loginUser.userAvatar"
                class="userAvatar"
              />
            </template>
            <template v-else>
              <a-avatar>
                <IconUser />
              </a-avatar>
            </template>
          </template>
          <template v-else>
            <a-avatar>未登录</a-avatar>
          </template>
        </a-avatar>
        <template #content>
          <template
            v-if="store.state.user?.loginUser && store.state.user?.loginUser?.userRole !== ACCESS_ENUM.NOTE_LOGIN"
          >
            <a-doption>
              <template #icon>
                <icon-poweroff />
              </template>
              <template #default>
                <a-anchor-link @click="logout">退出登录</a-anchor-link>
              </template>
            </a-doption>
          </template>
          <template v-else>
            <a-doption>
              <template #icon>
                <icon-user />
              </template>
              <template #default>
                <a-anchor-link href="/user/login">登录</a-anchor-link>
              </template>
            </a-doption>
          </template>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

const store = useStore();
const router = useRouter();
//默认主页
const selectedKeys = ref(["/"]);

//路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
//退出登录
const logout = () => {
  UserControllerService.userLogout();
  store.state.user.loginUser = ACCESS_ENUM.NOT_LOGIN;
  store.state.user.loginUser.userRole = ACCESS_ENUM.NOT_LOGIN;
  location.reload();
};

//显示菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //根据权限过滤菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "zyx",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 0);
</script>

<style scoped>
.titleBar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  font-size: medium;
  margin-left: 16px;
}

.logo {
  width: 52px;
}
</style>
