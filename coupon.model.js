const{Types,Schema,model}=require('mongoose');
const schema=Schema({
    discount:{
        type:Number,
        required:true,
    },
    expires:{
        type:Date,
        required:true
    },
    code:{
        type:Number,
        trim:true,
        required:true
    }
},
{ timestamps: true });
const couponModel=model('coupon',Schema);
module.exports=couponModel;