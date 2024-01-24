const asyncHandler = require("express-async-handler");

/**
 * @function
 * @async
 * @name onConnect
 * @param {object} req
 * @param {object} res
 * @description checks if server is up
 * @route {GET} /api/v1/health
 * @access public
 */

const onConnect = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: "Connected to server" });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to server", error });
  }
});

module.exports = {
  onConnect,
};
