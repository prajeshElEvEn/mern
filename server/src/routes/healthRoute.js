const express = require("express");
const { onConnect } = require("../controllers/healthController");

const router = express.Router();

router.route("/").get(onConnect);

module.exports = router;
