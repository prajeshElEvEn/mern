const utils = module.exports;
const { log, warn, error, success } = require("./logger");

utils.log = log;
utils.success = success;
utils.warn = warn;
utils.error = error;
utils.environment = require("./env");
utils.db = require("./db");
