
 import Table from './views/nav1/Table.vue'
// import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
// import Page4 from './views/nav2/Page4.vue'
//import Page5 from './views/nav2/Page5.vue'
import cashInfo from './views/nav3/cashInfo.vue'
import workInfo from './views/nav3/workInfo.vue'
//import echarts from './views/charts/echarts.vue'

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
