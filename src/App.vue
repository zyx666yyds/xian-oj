<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";

const route = useRoute();

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

//全局初始化
const doInit = () => {
  console.log("~~~~~");
};

onMounted(() => {
  doInit();
});
</script>
