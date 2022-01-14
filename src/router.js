import { createRouter, createWebHistroy } from "vue-router";

const router = createRouter({
  history: createWebHistroy(),
  routes: [
    { path: "/", redirect: "/tutors" },
    { path: "/tutors", component: null },
    {
      path: "/tutors/:id",
      component: null,
      children: {
        path: "contact",
        component: null,
      } /* for /tutors/:id/contact */,
    },
    { path: "/register", component: null },
    { path: "/requests", component: null },
    { path: "/:notFound(.*)", component: null },
  ],
});

export default router;
