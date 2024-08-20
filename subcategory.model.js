const { Types, model, Schema } = require("mongoose");
const schema = Schema(
  {
    category_id: {
      type: Types.ObjectId,
      ref: "category",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const subcategoryModel = model("subcategory", schema);
module.exports = subcategoryModel;
