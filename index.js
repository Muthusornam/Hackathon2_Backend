const express=require('express');
 const mongo=require('./shared');
 const webScrap=require('./router/webScrap');




const app=express();

app.use(express.json());

 mongo.connect();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use('/',(req,res,next)=>{

  next();
  })
  

app.use('/WebScraping',webScrap);

app.listen(process.env.PORT||3002);