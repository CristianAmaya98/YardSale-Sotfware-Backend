const fs = require("fs");
const express = require("express");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (name) => {
  return name.split(".").shift();
};

fs.readdirSync(PATH_ROUTES)
  .map((path) => removeExtension(path))
  .filter((path) => path !== "index")
  .forEach((name) => {
    router.use(`/${name}`, require(`./${name}`));
  });

module.exports = router;
