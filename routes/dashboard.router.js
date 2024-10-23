const express = require("express");
const router = new express.Router();
const {getDashboardHome, getAdmin} = require("../controllers/dashboard.controller")

router.get("/", getDashboardHome);
router.get("/admin", getAdmin);

module.exports = router;