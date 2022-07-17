import HomeRoutes from "@/modules/Home/router";
import LoginRoutes from "@/modules/Login/router";
import RegisterRoutes from "@/modules/Register/router";
import ErrorRoutes from "@/modules/Error/router";

const routes = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...RegisterRoutes,
  ...ErrorRoutes,
];

export default routes;
