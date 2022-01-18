import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: "t3",
          email: "midomido@gmail.com",
          message: "Hi, do you have schedules for weekend evenings?",
        },
      ],
    };
  },
  mutations: mutations,
  getters,
  actions,
};
