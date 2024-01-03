<template>
  <div id="userRegisterView">
    <h1>用户注册</h1>
    <a-form
      label-align="left"
      auto-label-width
      style="max-width: 480px; margin: 0 auto"
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item
        :rules="[
          { required: true, message: '账号不能为空' },
          { minLength: 4, message: '账号长度不能低于四位' },
        ]"
        field="userAccount"
        label="用户账号"
      >
        <a-input v-model="form.userAccount" placeholder="请输入账号." />
      </a-form-item>
      <a-form-item
        :rules="[
          { required: true, message: '密码不能为空' },
          { minLength: 6, message: '密码长度不能低于六位' },
        ]"
        field="userPassword"
        tooltip="密码不少于8位"
        label="用户密码"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item
        :rules="[
          { required: true, message: '密码不能为空' },
          { minLength: 6, message: '密码长度不能低于六位' },
        ]"
        field="checkPassword"
        tooltip="密码不少于8位"
        label="重复密码 :"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次输入密码"
        />
      </a-form-item>

      <a-form-item>
        <a-button html-type="submit" type="primary" style="margin: 0 auto">
          注册
        </a-button>
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
import Message from "@arco-design/web-vue/es/message";

const router = useRouter();
const store = useStore();

const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});
const handleSubmit = async () => {
  const res = await UserControllerService.userRegister(form);
  //注册成功，跳转到主页
  if (res.code === 0) {
    Message.success("注册成功！");
    await store.dispatch("getLoginUser");
    await router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    Message.error(res.message);
  }
};
</script>
