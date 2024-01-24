const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

/**
 * @function
 * @async
 * @name getUsers
 * @param {object} req
 * @param {object} res
 * @description gets users
 * @route {GET} /api/v1/users
 * @access public
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
});

/**
 * @function
 * @async
 * @name resetPassword
 * @param {object} req
 * @param {object} res
 * @description Gets user profile
 * @route {GET} /api/v1/users/profile/:id
 * @access private
 */
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

/**
 * @function
 * @async
 * @name updateUser
 * @param {object} req
 * @param {object} res
 * @description Gets user profile
 * @route {PUT} /api/v1/users/profile/:id/update
 * @access private
 */

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, newPassword, role } = req.body;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (email) {
    user.email = email;
  }
  if (newPassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
  }
  if (role) {
    user.role = role;
  }

  if (req.file) {
    user.avatar = req.file.filename;
  }

  const updatedUser = await user.save();
  const { password, ...responseUser } = updatedUser.toObject();

  res.status(200).json(responseUser);
});

/**
 * @function
 * @async
 * @name updateUser
 * @param {object} req
 * @param {object} res
 * @description Deletes user profile
 * @route {DELETE} /api/v1/users/profile/:id/delete
 * @access private
 */

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();

  res.status(204).json({ id: user._id, message: "User deleted" });
});

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
