const brandModel=require('./brand.model');
var slugify = require("slugify");

exports.addBrand=async(req,res,next)=>{
    const{name}=req.body;
    let model=new brandModel({name:name,slug:slugify(name ,{ replacement: "-", lower: false })});
    await model.save();
    res.status(200).json({message:"Category Added"});
}

exports.getBrand=async(req,res,next)=>{
    const{id}=req.params;
    const brands=await brandModel.findById({_id:id});
    res.status(200).json(brands);   
}

exports.getBrands=async(req,res,next)=>{
    const brands=await brandModel.find({});
    res.status(200).json(brands);
}

exports.updateBrand=async(req,res,next)=>{
    const{name}=req.body;
    const{id}=req.params;
    await brandModel.findByIdAndUpdate({_id:id},{name:name,slug:slugify(name,{replacment:"-",lowerr:false})});
    res.status(200).json({message:"brand updated"});
}

exports.deleteBrand=async(req,res,next)=>{
   const{id}=req.params;
   await brandModel.findByIdAndDelete({_id:id});
   res.status(200).json({message:"brand deleted"});
}