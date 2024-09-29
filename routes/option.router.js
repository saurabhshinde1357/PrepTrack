const express = require("express");
const router = new express.Router();
const { getOptions } = requi("../controller/options.controller"); 

const userAuthMiddleware = require("../middlewares/userAuth.middleware");

router.get("/options/:type", userAuthMiddleware, getOptions);

module.exports = router;