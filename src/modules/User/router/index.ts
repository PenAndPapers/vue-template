export default [
  {
    path: "/users",
    name: "Users",
    meta: {
      class: "users",
      requiresAuth: true,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Users' */ "../views/index.vue"),
    children: [],
  },
  {
    path: "/user/:id",
    name: "Profile",
    meta: {
      class: "profile",
      requiresAuth: true,
      hideInNav: true,
    },
    component: () =>
      import(/* webpackChunkName: 'Profile' */ "../views/Profile.vue"),
  },
];
