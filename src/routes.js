import homeRoutes from "./common/js/routes/homeRoutes";
import requesterRoutes from "./common/js/routes/requesterRoutes";
import workerRoutes from "./common/js/routes/workerRoutes";
// import adminRoutes from "./common/js/adminRoutes";

let routes = [];

routes = routes.concat(homeRoutes);
routes = routes.concat(requesterRoutes);
routes = routes.concat(workerRoutes);
// routes = routes.concat(adminRoutes);
console.log(routes);

export default routes;
