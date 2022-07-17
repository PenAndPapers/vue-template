export default [
  {
    path: "/login",
    name: "Login",
    meta: {
      class: "login",
    },
    component: () =>
      import(/* webpackChunkName: 'Login' */ "../views/index.vue"),
    children: [],
  },
];
