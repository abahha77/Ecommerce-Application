const { addBrand, getBrand, updateBrand, deleteBrand, getBrands } = require('./brand.services');

const router=require('express').Router();

router.route('/brands').post(addBrand).get(getBrands);
router.route('/brand/:id').get(getBrand).put(updateBrand).delete(deleteBrand);

module.exports=router;