const express = require("express");
const cors = require("cors");
const constants = require("../constants");
const { connection } = require("./routes");

env();

const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "127.0.0.1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(constants.paths.uploadDir));

app.use("/api/connection", connection);

app.listen(port, hostname, async () => {
  await db();
  success(`Server running at http://${hostname}:${port}`);
});
