const {Schema,model,Types}=require('mongoose');
const schema=Schema({
    name:{
        type:String,
        required:[true,'category name must be unique'],
        min: [2, 'Too short name'],
        trim:true,
        unique:[true,'category name must be unique']
    },
    slug:String,
    img:String
},
{
    timestamps:true
});

const brandModel=model('category',schema);
module.exports=brandModel;