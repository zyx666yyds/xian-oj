//initial state;
import Storeoptions from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),
  actions: {
    //todo 改为远程登陆获取登录信息
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "zyx" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as Storeoptions<any>;
