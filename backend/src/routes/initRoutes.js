const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const postsRoute = require("./postsRoute");

let initRoutes = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/posts", postsRoute);

  return app;
};

module.exports = initRoutes;
