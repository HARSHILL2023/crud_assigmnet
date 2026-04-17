const express = require("express")
const notesroutes= require("./routes/notes.routes")
const app= express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("hello ")
})

app.use("/api/notes",notesroutes)

module.exports=app