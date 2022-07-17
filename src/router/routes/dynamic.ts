import UserRoutes from "@/modules/User/router";
import ErrorRoutes from "@/modules/Error/router";

const routes = [...UserRoutes, ...ErrorRoutes];

export default routes;
