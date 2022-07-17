export default [
  {
    path: "/register",
    name: "Register",
    meta: {
      class: "register",
    },
    component: () =>
      import(/* webpackChunkName: 'Register' */ "../views/index.vue"),
    children: [],
  },
];
