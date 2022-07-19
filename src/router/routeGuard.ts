import type { RouteLocation, RouteRecordRaw } from "vue-router";
import { isAuthenticated } from "@/middleware/auth";
import router from "./index";
import staticRoutes from "./routes/static";
import dynamicRoutes from "./routes/dynamic";

const NextLocation = new Function();

const addRoutes = (routes: RouteRecordRaw[]) => {
  routes.forEach(async (route) => {
    await new Promise((resolve) => {
      router.addRoute(route);
      resolve(true);
    });
  });
};

const removeRoutes = (routes: RouteRecordRaw[], requiresAuth: boolean) => {
  routes.forEach(async (route) => {
    if (
      route &&
      route.meta.requiresAuth === requiresAuth &&
      !["PageError", "PageNotFound"].includes(route.name as string)
    ) {
      await new Promise((resolve) => {
        router.removeRoute(route.name as string);
        resolve(true);
      });
    }
  });
};

export default (
  to: RouteLocation,
  from: RouteLocation,
  next: typeof NextLocation
): void => {
  /**
   * check if user is authenticated
   */
  if (isAuthenticated()) {
    /**
     * check if dynamic routes is not yet added to current route
     */
    if (!router.hasRoute("Users")) {
      addRoutes(dynamicRoutes);
      removeRoutes(staticRoutes, false);

      /**
       * redirect to the last accessed page after page is refreshed
       */
      const origin = window.location.origin;
      const path = window.location.toString().replace(origin, "");
      if (from.name === undefined) next(path);
    }

    /**
     * redirect to users page when navigating to pages
     * that doesn't requires authentication
     */
    if (["/", "/login", "/register"].includes(to.path)) {
      next("/users");
    } else {
      next();
    }
  } else {
    if (!router.hasRoute("Home")) {
      addRoutes(staticRoutes);
      removeRoutes(dynamicRoutes, true);

      if (router.hasRoute("Home")) next(to.redirectedFrom?.fullPath);
    } else {
      next();
    }
  }
};
