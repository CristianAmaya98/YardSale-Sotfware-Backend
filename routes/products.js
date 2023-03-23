const express = require("express");
const { findAllProducts, createProduct } = require("../controllers/products");
const customHeader = require("../middleware/customHeader");
const router = express.Router();

router.get("", customHeader, findAllProducts);
router.post("", customHeader, createProduct);

module.exports = router;
