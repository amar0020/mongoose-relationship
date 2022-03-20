const express = require("express");

const author = require("../module/author")

router= express.Router();

router.post("", async (req,res)=>{
    try{
        const data = await author.create(req.body);

        res.send(data)
    
        console.log(data)
    }

    catch(err){
        console.log("wrong")
    }
  
})

module.exports=router