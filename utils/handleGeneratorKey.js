const { generateApiKey } = require("generate-api-key");

const handleGeneratorKey = () => {
  return generateApiKey({
    method: "string",
    pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
};

module.exports = { handleGeneratorKey };
