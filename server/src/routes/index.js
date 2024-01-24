const routes = module.exports;

routes.health = require("./healthRoute");
routes.auth = require("./authRoutes");
routes.user = require("./userRoutes");
