const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "category name must be unique"],
      min: [2, "Too short name"],
      trim: true,
      unique: [true, "category name must be unique"],
    },

    slug: String,
    img: String,
  },
  {
    timestamps: true,
  }
);
const categoryModel = mongoose.model("category2", schema);
module.exports = categoryModel;
