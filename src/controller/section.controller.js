const express = require("express");
const app = require("express");

const section= require("../module/section");

const Book = require("../module/book")

router= express.Router()


router.post("", async (req,res)=>{
    try{
        const data= await section.create(req.body);

        res.send(data)
    
        console.log(data)
    }

    catch(err){
        console.log("wrong")
    }
  
})

router.get("/:id/book", async (req,res)=>{
    const data= await Book.find({section:req.params.id},{name:1})
    res.send(data)
})

router.get("/:id/:name",async (req,res)=>{
    const data = await author.find({first_name:req.params.name},{book:1});
    const section= await Book.find({section:req.params.id},{book:1,name:1});

    var names=[]

    for(let i=0;i<data.length;i++){
        for(let j=0;j<section.length;j++){
            if(data[i].book==section[j].book){
                names.push(section[j].name)
            }
        }
    }

    res.send(section)
})

module.exports = router