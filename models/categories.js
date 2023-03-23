const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const CategoriesScheme = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

CategoriesScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("categories", CategoriesScheme);
