const express = require("express");
const loginRouter = require("./login");
const verifyRouter = require("./verify");
const logoutRouter = require("./logout");

const router = express.Router();

router.use("/login", loginRouter);
router.use("/verify", verifyRouter);
router.use("/logout", logoutRouter);

module.exports = router;
