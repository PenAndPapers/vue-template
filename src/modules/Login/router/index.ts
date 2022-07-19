export default [
  {
    path: "/login",
    name: "Login",
    meta: {
      class: "login",
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Login' */ "../views/index.vue"),
    children: [],
  },
];
