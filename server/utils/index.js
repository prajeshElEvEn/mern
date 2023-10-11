const utils = module.exports;
const { log, warn, error, success } = require("./logger");

utils.log = log;
utils.success = success;
utils.warn = warn;
utils.error = error;
utils.env = require("./env");
utils.db = require("./db");
