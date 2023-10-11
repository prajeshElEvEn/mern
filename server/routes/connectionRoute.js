const express = require("express");
const { liveMessage } = require("../controllers/connectionController");

const router = express.Router();

router.route("/").get(liveMessage);

module.exports = router;
