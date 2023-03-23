const { categoriesModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const createCategory = async (req, res) => {
  try {
    const data = await categoriesModel.create(req.body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_CATEGORY");
  }
};
const getAllCategories = async (req, res) => {
  try {
    const data = await categoriesModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ALL_CATEGORIES");
  }
};
const getCategory = async (req, res) => {};
const updateCategory = async (req, res) => {};
const deleteCategory = async (req, res) => {};

module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
