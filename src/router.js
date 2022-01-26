import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import TutorDetail from "./pages/tutors/TutorDetail.vue";
// import TutorRegistration from "./pages/tutors/TutorRegistration.vue";
import Tutors from "./pages/tutors/TutorsList.vue";
// import ContactTutor from "./pages/requests/ContactTutor.vue";
// import RequestReceived from "./pages/requests/RequestsReceived.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";

import store from "./store/index";

const TutorDetail = defineAsyncComponent(() =>
  import("./pages/tutors/TutorDetail.vue")
);

const TutorRegistration = defineAsyncComponent(() =>
  import("./pages/tutors/TutorRegistration.vue")
);

const ContactTutor = defineAsyncComponent(() =>
  import("./pages/requests/ContactTutor.vue")
);

const RequestReceived = defineAsyncComponent(() =>
  import("./pages/requests/RequestsReceived.vue")
);

const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tutors" },
    { path: "/tutors", component: Tutors },
    {
      path: "/tutors/:id",
      component: TutorDetail,
      props: true /* get the id in the child comp thru d route */,
      children: [
        {
          path: "contact" /* for /tutors/:id/contact */,
          component: ContactTutor,
        },
      ],
    },
    {
      path: "/register",
      component: TutorRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresNoAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
