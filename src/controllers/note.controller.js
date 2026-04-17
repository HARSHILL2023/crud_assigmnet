const noteModel = require("../models/notes.models");
const notesmodel = require("../models/notes.models")

async function putNotes(req, res) {
    try {




        const { title, content, category, isPinned } = req.body

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
                data: null,
            });
        }
        const out = notesmodel.create({
            title,
            content,
            category,
            isPinned,
        })
        res.status(200).json({
            "message": "created succesfully",
            "details": out
        })
    }
    catch (err) {
        console.log(err)
    }
}

async function Manynote(req,res) {
    try{
        const { notes } = req.body

        const out = await notesmodel.create(notes)

        res.status(200).json({
            message: "created successfully",
            data: out
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "error" })
    }
}

async function getAllnotes(re,res) {

    const allnotes=  await notesmodel.find();

    res.status(200).json({
        "data":allnotes
    });
    
}

async function getByid(req, res) {
    const idd = req.params.id

    const out = await noteModel.findById(idd);

    if (out) {
        return res.status(200).json({
            message: "found user",
            data: out
        })
    }

    res.status(404).json({
        message: "user not found kindly enter valid id"
    })
}

async function updateNote(req, res) {
    const id = req.params.id;

    const updated = await notesmodel.findByIdAndUpdate(id, req.body);

    res.json(updated);
}

async function patchNote(req, res) {
    const id = req.params.id;

    const updated = await notesmodel.findByIdAndUpdate(id, req.body);

    res.json(updated);
}

async function deleteNote(req, res) {
    const id = req.params.id;

    const deleted = await notesmodel.findByIdAndDelete(id);

    res.json(deleted);
}
module.exports = { putNotes , Manynote , getAllnotes , getByid ,updateNote ,patchNote,deleteNote}