const express = require("express");
const cors = require("cors");

const { connectToDB, loadEnv } = require("./src/utils");
const constants = require("./constants");
const { errorHandler } = require("./src/middlewares/errorMiddleware");
const { auth, user, health } = require("./src/routes");
const { warn, log } = require("logggger");

const runServer = async () => {
  const currentEnv = await loadEnv();
  const port = process.env.PORT || 5000;
  const hostname = process.env.HOSTNAME || "127.0.0.1";
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/uploads", express.static(constants.paths.uploadDir));

  app.use("/api/v1/health", health);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/users", user);

  app.use(errorHandler);

  app.listen(port, hostname, async () => {
    warn(`Environment > ${currentEnv}`);
    await connectToDB(process.env.MONGO_URI);
    log(`Server running > http://${hostname}:${port}/api/v1/health`);
  });
};

runServer();
