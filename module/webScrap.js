const mongo=require('../shared');
const {ObjectId}=require('mongodb');
const scraper=require('../scraper')

module.exports.createProduct=async (req,res,next)=>{
    try{

       const productDetail=await scraper.scrapeProduct(req.body.url) ;
        
      const response=await mongo.selectedDb.collection('electronic').insertOne(productDetail);
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }
 

module.exports.getProduct=async (req,res,next)=>{
    try{
      const response=await mongo.selectedDb.collection('electronic').find().toArray();
        
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.productData=async (req,res,next)=>{
    try{
      const response=await mongo.selectedDb.collection('ProductScrap').find({_id:ObjectId(req.params.mentorId)},{_id:0,menteeId:1}).toArray()
        
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }