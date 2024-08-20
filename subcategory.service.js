const subcategoryModel = require("./subcategory.model");
var slugify = require("slugify");
 const categoryModel = require("../category/category.model");
exports.addSubCategory = async (req, res, next) => {
  const { name, category_id } = req.body;
    let result = await categoryModel.findById(category_id);
    if (!result) {
     let model = new subcategoryModel({
        name: name,
        slug: slugify(name, { replacement: "-", lower: false }),
        category_id: category_id,
     });
      await model.save();
     res.status(200).json({ message: "Added" });
     } else {
       res.json({ message: "notfound" });
     }
};

exports.getSubCategory = async (req, res, next) => {
  const { id } = req.params;
  let Subcategory = await subcategoryModel.findById({ _id: id });
  res.status(200).json(Subcategory);
};

exports.getAllSubCategories = async (req, res, next) => {
  let Subcategory = await subcategoryModel.find({});
  res.status(200).json(Subcategory);
};

exports.deleteSubCategory = async (req, res, next) => {
  const { id } = req.params;
  await subcategoryModel.findByIdAndDelete({ _id: id });
  res.status(200).json({ message: "Deleted" });
};

exports.updateSubcateogry = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  await subcategoryModel.findByIdAndUpdate({ _id: id}, {name: name ,slug:slugify(name,{replacment:"-",lower:false})});
  res.status(200).json({ message: "Updated" });
};
