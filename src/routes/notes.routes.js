const express= require("express")

const notesRoutes=require("../controllers/note.controller")


const router= express.Router();

router.post("/",notesRoutes.putNotes)

router.post("/bulk",notesRoutes.Manynote)





module.exports=router