const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ProductScheme = new mongoose.Schema(
  {
    product: {
      name: {
        type: String
      },
      image: {
        type: mongoose.Types.ObjectId
      },
      price: {
        type: String
      }
    },
    available: {
      type: Boolean,
      default: true
    },
    discounts: {
      enabled: {
        type: Boolean,
        default: false
      },
      percentageDiscount: {
        type: Number
      }
    },
    info: {
      category: {
        type: mongoose.Types.ObjectId
      },
      description: {
        type: String
      },
      colors: [
        {
          type: String
        }
      ],
      amount: {
        type: Number
      }
    },
    characteristics: [
      {
        title: {
          type: String
        },
        data: [
          {
            item: {
              type: String
            },
            value: {
              type: String
            }
          }
        ]
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

ProductScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("products", ProductScheme);
