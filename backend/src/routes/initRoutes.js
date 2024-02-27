const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");

let initRoutes = (app) => {
  app.use("/api/auth", authRoute);

  return app;
};

module.exports = initRoutes;
