<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";

import { onMounted } from "vue";

//全局初始化
const doInit = () => {
  console.log("~~~~~");
};

onMounted(() => {
  doInit();
});
</script>
