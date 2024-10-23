const express = require("express");
const router = new express.Router();
const {uploadFile, getUploads} = require("../controllers/fileUpload.controller");
const {upload} = require("../middlewares/upload.middleware")

router.post("/", upload.single("file"), uploadFile)
router.get("/", getUploads)


module.exports = router;