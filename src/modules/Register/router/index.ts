export default [
  {
    path: "/register",
    name: "Register",
    meta: {
      class: "register",
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Register' */ "../views/index.vue"),
    children: [],
  },
];
