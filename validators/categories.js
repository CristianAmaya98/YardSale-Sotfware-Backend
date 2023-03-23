const { check, validationResult } = require("express-validator");

const validatorCategoryBody = [
  check("name").exists().notEmpty(),
  (req, res, next) => validationResult(req, res, next)
];

const validatorCategoryId = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validationResult(req, res, next)
];

module.exports = { validatorCategoryBody, validatorCategoryId };
