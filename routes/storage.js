const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { createStorageItem } = require("../controllers/storage");
const router = express.Router();

router.post("/", uploadMiddleware.single("file"), createStorageItem);

module.exports = router;
