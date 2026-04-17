const express= require("express")

const notesRoutes=require("../controllers/note.controller")


const router= express.Router();

router.post("/",notesRoutes.putNotes)

router.post("/bulk",notesRoutes.Manynote)

router.get("/",notesRoutes.getAllnotes)

router.get("/:id",notesRoutes.getByid)

router.put("/:id", notesRoutes.updateNote)

router.patch("/:id", notesRoutes.patchNote)

router.delete("/:id", notesRoutes.deleteNote)

module.exports=router