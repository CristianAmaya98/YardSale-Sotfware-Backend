const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;

const createStorageItem = async (req, res) => {
  try {
    const { body, file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    };

    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_STORAGE_ITEM");
  }
};

module.exports = { createStorageItem };
