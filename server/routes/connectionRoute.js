const express = require("express");
const { onConnect } = require("../controllers/connectionController");

const router = express.Router();

router.route("/").get(onConnect);

module.exports = router;
