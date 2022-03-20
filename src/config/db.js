const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect("mongodb+srv://amar0020:amar_0020@cluster0.dq7fz.mongodb.net/relationship?retryWrites=true&w=majority")
}


module.exports=connect

