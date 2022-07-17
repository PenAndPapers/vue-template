export default [
  {
    path: "/",
    name: "Home",
    meta: {
      class: "home",
    },
    component: () =>
      import(/* webpackChunkName: 'Home' */ "../views/index.vue"),
    children: [],
  },
];
