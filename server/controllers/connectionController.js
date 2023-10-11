const asyncHandler = require("express-async-handler");

const liveMessage = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: "Connected to server" });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to server", error });
  }
});

module.exports = {
  liveMessage,
};
