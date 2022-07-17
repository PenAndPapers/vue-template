export default [
  {
    path: "/page-not-found",
    name: "PageNotFound",
    meta: {
      title: "404",
      class: "error-404",
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
      hideInNav: true,
    },
  },
];
