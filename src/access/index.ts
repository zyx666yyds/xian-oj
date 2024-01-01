import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";

router.beforeEach(async (to, from, next) => {
  console.log(store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;

  //如果之前未登录，自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN;

  next();
});
