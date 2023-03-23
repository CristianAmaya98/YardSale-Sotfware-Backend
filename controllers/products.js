const { productsModel } = require("../models");

const createProduct = async (req, res) => {
  try {
    const data = await productsModel.create(req.body);
    res.send({ data });
  } catch (error) {}
};
const findAllProducts = async (req, res) => {
  const data = await productsModel.find({});
  res.send({ data });
};
const findByIdProduct = () => {};
const updateProduct = () => {};
const deleteProduct = () => {};

module.exports = {
  createProduct,
  findAllProducts,
  findByIdProduct,
  updateProduct,
  deleteProduct
};
