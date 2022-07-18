import type {
  RouteLocation,
  RouteRecordNormalized,
  RouteRecordRaw,
} from "vue-router";
import authMiddleWare from "@/middleware/auth";
import router from "./index";
import dynamicRoutes from "./routes/dynamic";

const NextLocation = new Function();

export default (
  to: RouteLocation,
  from: RouteLocation,
  next: typeof NextLocation
): void => {
  /**
   * check if user is authenticated
   */
  if (authMiddleWare()) {
    /**
     * check if dynamic routes is not yet added to current route
     */
    if (!router.hasRoute("Users")) {
      dynamicRoutes.forEach(async (route: RouteRecordRaw) => {
        await new Promise((resolve) => {
          router.addRoute(route);
          resolve(true);
        });
      });

      /**
       * remove routes that doesnt need authentication
       */
      router.getRoutes().forEach(async (route) => {
        if (
          !route.meta.requiresAuth &&
          !["PageError", "PageNotFound"].includes(route.name as string)
        ) {
          await new Promise((resolve) => {
            router.removeRoute(route.name as string);
            resolve(true);
          });
        }
      });

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
    next();
  }
};
