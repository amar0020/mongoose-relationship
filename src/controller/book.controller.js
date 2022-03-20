const express = require("express");

const Book = require("../module/book")

const author= require("../module/author")

const router = express.Router();

router.post("", async (req,res)=>{

    try{
        const data = await Book.create(req.body);

        res.send(data)
    
        console.log(data)
    }

    catch(err){
        console.log("wrong")
    }
  
})

router.get("/:name/author", async (req,res)=>{
    try{
        const data= await author.find({first_name:req.params.name}).populate({path:"book",select:["name"]})
        res.send(data)
    }
    catch(err){
        console.log("error");
    }
});

module.exports= router



