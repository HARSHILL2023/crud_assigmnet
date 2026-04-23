const mongoose= require("mongoose");

async function connectDB() {
    try{
      await   mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected succesfully");
        
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports=connectDB();