import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  /* setup root state to manage the id of tutor signed-in/using app - since auth module is not namespace, state is like root state*/
  state() {
    return {
      userId: null,
      token: null,
      // tokenExpiration: null,
      didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};
