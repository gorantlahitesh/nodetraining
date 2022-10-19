

const mongoose = require('mongoose');
const http = require('http');
const port=3500;
const product=require("./product");
const dburl = "mongodb+srv://hitesh:12345@cluster0.fafmqlo.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected with DB");
    }
});



const ser=http.createServer(async(req,res)=>{
    console.log("Server");
    if(req.url==="/get-products" && req.method==="GET"){
        try{
            const products=await product.find().lean();
            console.log(products);
            res.end(JSON.stringify(products));
        }
        catch(err){
            //console.log(err);
            res.end(err.message);
        }
    }
    else if(req.url==="/add-products" && req.method==="POST"){
        try{
            let data="";
            let body;
            req.on("data",(chunk)=>{
                data+=chunk;
            });
            req.on("end",async ()=>{
                body=JSON.parse(data);
                let {pName,pDesc,pPrice}=body
                await product.insertMany([
                    {
                        pName,
                        pDesc,
                        pPrice,
                    },
                ]);
                res.end("Products added");
            });
        }
        catch(err){
            req.end(err.message);
        }
    }
    else if(req.url==="/edit-products" && req.method==="PUT"){
        try{
            let data="";
            let body;
            req.on("data",(chunk)=>{
                data+=chunk;
            });
            req.on("end",async ()=>{
                body=JSON.parse(data);
                let {_id,pName,pDesc,pPrice}=body
                await product.updateOne({_id},{
                    $set:
                    {
                        pName,
                        pDesc,
                        pPrice,
                    },
                });
                res.end("Product Updated");
            });
        }
        catch(err){
            res.end(err.message);
        }
    }
    else if(req.url==="/delete-products" && req.method==="PUT"){
        try{
            let data="";
            let body;
            req.on("data",(chunk)=>{
                data+=chunk;
            });
            req.on("end",async ()=>{
                body=JSON.parse(data);
                let {_id,pName,pDesc,pPrice}=body
                await product.deleteOne({_id});
                res.end("Product Deleted");
            });
        }
        catch(err){
            res.end(err.message);
        }
    }
});
ser.listen(port,()=>{console.log("Listening");});