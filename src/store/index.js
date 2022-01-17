import { createStore } from "vuex";

import tutorsModule from "./modules/tutors/index";

const store = createStore({
  modules: {
    tutors: tutorsModule,
  },
  /* setup root state to manage the id of tutor signed-in/using app */
  state() {
    return {
      userId: "t3",
    };
  },
  getters: {
    userID(state) {
      return state.userId;
    },
  },
});

export default store;
