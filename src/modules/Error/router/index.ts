export default [
  {
    path: "/page-not-found",
    name: "PageNotFound",
    meta: {
      title: "404",
      class: "error-404",
      requiresAuth: false,
      hideInNav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: 'PageNotFound' */ "../views/PageNotFound.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageError",
    redirect: "/page-not-found",
    meta: {
      requiresAuth: false,
      hideInNav: true,
    },
  },
];
