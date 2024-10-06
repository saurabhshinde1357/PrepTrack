const express = require("express");
const router = new express.Router();
const { getSubjects } = require("../controllers/subject.controller");

const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.get("/jee/:type", userAuthMiddleware, getSubjects);

module.exports = router;