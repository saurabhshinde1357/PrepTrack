const express = require("express");
const router = new express.Router();
const { getLoader } = require("../controllers/loader.controller");

router.get("/", getLoader);

module.exports = router