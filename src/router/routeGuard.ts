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
       * redirect to users page after page is refreshed
       * since user is already authenticated
       */
      if (from.name === undefined) next("/users");
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
