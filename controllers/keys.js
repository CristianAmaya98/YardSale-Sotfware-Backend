const { keysModel } = require("../models");
const { handleGeneratorKey } = require("../utils/handleGeneratorKey");

const createKeyEnpoint = async (req, res) => {
  try {
    const { body } = req;

    const key = handleGeneratorKey();
    const keyData = {
      ...body,
      key
    };

    const data = await keysModel.create(keyData);
    res.send({
      msg: "Key Generada Exitosamente",
      data
    });
  } catch (error) {}
};

module.exports = { createKeyEnpoint };
