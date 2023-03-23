const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategory
} = require("../controllers/categories");
const {
  validatorCategoryBody,
  validatorCategoryId
} = require("../validators/categories");

const router = express.Router();

router.post("", validatorCategoryBody, createCategory);
router.get("", getAllCategories);
router.get("/:id", validatorCategoryId, getCategory);

module.exports = router;
