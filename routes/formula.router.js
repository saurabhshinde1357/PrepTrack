const express = require("express");
const router = new express.Router();
const { formulaPage } = requi("../controller/formula.controller"); 

const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.get("/formula", userAuthMiddleware, formulaPage);

module.exports = router;