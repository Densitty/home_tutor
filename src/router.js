import { createRouter, createWebHistroy } from "vue-router";

import TutorDetail from "./pages/tutors/TutorDetail.vue";
import TutorRegistration from "./pages/tutors/TutorRegistration.vue";
import Tutors from "./pages/tutors/TutorsList.vue";
import ContactTutor from "./pages/requests/ContactTutor.vue";
import RequestReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistroy(),
  routes: [
    { path: "/", redirect: "/tutors" },
    { path: "/tutors", component: Tutors },
    {
      path: "/tutors/:id",
      component: TutorDetail,
      children: {
        path: "contact",
        component: ContactTutor,
      } /* for /tutors/:id/contact */,
    },
    { path: "/register", component: TutorRegistration },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
