const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const postsRoute = require("./postsRoute");
const historyRoute = require("./historyRoute");

let initRoutes = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/posts", postsRoute);
  app.use("/api/history", historyRoute);

  return app;
};

module.exports = initRoutes;
