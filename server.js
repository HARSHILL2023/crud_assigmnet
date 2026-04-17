require('dotenv').config()
const app= require("./src/app")
const connectDB= require("./src/config/db")




app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`)
})

connectDB;