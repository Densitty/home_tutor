import { createStore } from "vuex";

import tutorsModule from "./modules/tutors/index";
import requestsModule from "./modules/requests/index";
import authModule from "./modules/auth/index";

const store = createStore({
  modules: {
    tutors: tutorsModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
