export default [
  {
    path: "/",
    name: "Home",
    meta: {
      class: "home",
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Home' */ "../views/index.vue"),
    children: [],
  },
];
