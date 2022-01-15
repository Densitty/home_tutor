import { createStore } from "vuex";

import tutorsModule from "./modules/tutors/index";

const store = createStore({
  modules: {
    tutors: tutorsModule,
  },
});

export default store;
