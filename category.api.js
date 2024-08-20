const { createCategory } = require('./category.service');

const router=require('express').Router();

router.route('/categories').post(createCategory);
const subcategories=require('../subcategory/subcategory.api');
router.use('/:categoryId/subcategories',subcategories);

module.exports=router;