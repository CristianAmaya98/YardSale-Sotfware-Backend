const express = require("express");
const { createKeyEnpoint } = require("../controllers/keys");
const router = express.Router();

router.post("", createKeyEnpoint);

module.exports = router;
