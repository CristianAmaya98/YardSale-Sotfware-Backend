const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("storages", StorageScheme);
