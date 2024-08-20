const categoryModel = require("./category.model");
exports.createCategory = async (req, res, next) => {
  const { name } = req.body;
  let model = new categoryModel({ name: name });
  await model.save();
  res.status(200).json({ message: "category Added" });
};

exports.deleteCategory = async (req, res, next) => {
  categoryModel.deleteMany({});
};
