const express = require("express");
const router = new express.Router();
const {getAuthPage, signup, signIn, logout} = require("../controllers/auth.controller") 

router.get("/login", getAuthPage);
router.post("/signup", signup);
router.put("/logout", logout);
router.patch("/signin", signIn);

module.exports = router;