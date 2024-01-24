const asyncHandler = require("express-async-handler");

/**
 * Handle a connection request to the server.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 * @throws {Error} If there's an error while handling the request.
 *
 * @description This controller handles incoming requests to establish a connection with the server. It responds with a success message if the connection is successful, or an error message if there's an issue.
 *
 * @example
 * get(onConnect)
 *
 * @author eleven
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
