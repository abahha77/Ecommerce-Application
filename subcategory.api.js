const {
  addSubCategory,
  getAllSubCategories,
  updateSubcateogry,
  deleteSubCategory,
  getSubCategory,
} = require("./subcategory.service");

const router = require("express").Router({mergeParams:true});

router.route("/subcategory/:slug").post(addSubCategory);
router.route("/subcategory").get(getAllSubCategories);
router
  .route("/subcategory/:id")
  .put(updateSubcateogry)
  .delete(deleteSubCategory)
  .get(getSubCategory);
module.exports = router;
