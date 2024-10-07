const express = require("express");
const router = new express.Router();
const { getFormulPage } = require("../controllers/formula.controller"); 

const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.get("/", userAuthMiddleware, getFormulPage);

module.exports = router;