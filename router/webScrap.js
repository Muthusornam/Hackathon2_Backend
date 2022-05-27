const express=require('express');
const router=express.Router();
const webScrapModule=require('../module/webScrap');

router.post('/createProduct',webScrapModule.createProduct);
router.get('/getProduct',webScrapModule.getProduct);

module.exports=router;
