const express = require("express");
const userModel = require("../../models/User");
const verifyToken = require("../../utils/verifyToken");

const router = express.Router();

// Register route
router.post("/", verifyToken, async (req, res, next) => {
  try {
    const { email, password, role, first_name, last_name, phone_number} =
      req.body;

    await userModel.createUser({
      email,
      password,
      role,
      first_name,
      last_name,
      phone_number
    });

    res.status(201).json({ message: "Succesfully registered your account." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
