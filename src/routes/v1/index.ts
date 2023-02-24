import config from "../../config/config";
import authRoute from "./auth.route";
import marketRoute from "./market.route";

const express = require("express");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/market",
    route: marketRoute,
  },
];

const devRoutes = [];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route: any) => {
    router.use(route.path, route.route);
  });
}

export default router;
