const app = require("./index");

const connect= require("./config/db")

app.listen(3001, async ()=>{

    try{
        await connect();

        console.log("listening")
    }
    catch(err){
        console.log(err)
    }
    
});
