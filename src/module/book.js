const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    name:{type:String, required:true},
    body:{type:String, requird:true},
    section:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true,
    }

})

const Book = new mongoose.model("book",bookSchema);

module.exports= Book;
