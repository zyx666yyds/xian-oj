<template>
  <div id="userLoginView">
    <h1>用户登录</h1>
    <a-form
      label-align="left"
      auto-label-width
      style="max-width: 480px; margin: 0 auto"
      :model="form"
      @submit="handleSubmit"
      @register="handleRegister"
    >
      <a-form-item field="userAccount" label="用户账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        field="userPassword"
        tooltip="密码不少于8位"
        label="用户密码"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>

      <a-form-item>
        <a-button html-type="submit" type="primary" style="width: 120px">
          登录
        </a-button>
        <a-button
          html-type="register"
          style="width: 120px"
          :onclick="handleRegister"
        >
          注册</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const form = reactive({
  userAccount: "",
  userPassword: "",
});

//点击注册，跳转到注册页面
const handleRegister = async () => {
  await router.push({
    path: "/user/register",
    replace: true,
  });
};

//处理登录
const handleSubmit = async () => {
  const res = await UserControllerService.userLogin(form);
  //登录成功，跳转到主页
  if (res.code === 0) {
    alert("登录成功" + JSON.stringify(res.data));
    await store.dispatch("user/getLoginUser");
    await router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登陆失败" + res.message);
  }
};
</script>
