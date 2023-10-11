const dotenv = require("dotenv");

const loadEnv = () => {
  if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" });
  } else {
    dotenv.config({ path: ".env.development" });
  }
};

module.exports = loadEnv;
