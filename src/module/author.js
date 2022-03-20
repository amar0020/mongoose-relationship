const mongoose = require("mongoose")

const authorSchema= new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    }
});


const author= new mongoose.model("author",authorSchema)

module.exports= author;