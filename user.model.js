const{Types,model,Schema}=require('mongoose');
const { boolean } = require('webidl-conversions');
const schema=Schema({
    name:{
        type:String,
        required:true,
        min:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    profile_Img:String,
    role:{
        type:String,
        enum:["admin","user"],
    },
    isActive:{
        type:boolean,
        default:true
    },
    verfied:{
        type:boolean,
        default:false
    }

}
,
{
    timestamps:true
});

const userModel=model('user',schema);
module.exports=userModel;