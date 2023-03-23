const { keysModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const customHeader = async (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;

    const data = await (await keysModel.find({ key: apiKey })).shift();

    if (!data) {
      handleHttpError(res, "API_KEY_NO_ES_CORRECTA");
      return;
    }

    if (!data.status) {
      handleHttpError(res, "API_KEY_ESTA_DESHABILITADA");
      return;
    }

    next();
  } catch (error) {
    res.status(403);
    handleHttpError(res, "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER");
  }
};

module.exports = customHeader;
