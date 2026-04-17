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
module.exports = { putNotes , Manynote }