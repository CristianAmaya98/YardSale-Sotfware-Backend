const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const KeysScheme = new mongoose.Schema(
  {
    keyName: {
      type: String
    },
    key: {
      type: String
    },
    status: {
      type: Boolean,
      default: true
    },
    email: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

KeysScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("keys", KeysScheme);
