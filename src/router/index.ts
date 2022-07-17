import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import beforeEach from "./routeGuard";
import staticRoutes from "./routes/static";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach(beforeEach);

export default router;
