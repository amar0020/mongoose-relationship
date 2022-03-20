const mongoose= require("mongoose")


const sectionSchema= new mongoose.Schema({
    section:{type:String,required:true}
})

const Section = new mongoose.model("section",sectionSchema);

module.exports=Section;