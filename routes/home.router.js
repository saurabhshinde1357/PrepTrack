const express = require("express");
const router = new express.Router();
const {getHomePage} = require("../controllers/home.controller");

// admin user auth middleware
const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.get("/", userAuthMiddleware, getHomePage);

module.exports = router;