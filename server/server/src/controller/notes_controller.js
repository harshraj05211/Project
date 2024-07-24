const Notes = require("../models/notes_model");
const User = require("../models/user_model");

async function createNote(req, res){
    const {text} = req.body;
    console.log(text);
    try {
        if(req.userEmail) res.status(403).json({success: 403, message: "Email not found"})
        console.log(req.userId);
        const user =await User.findById(req.userId)
        if(!user) res.status(404).json({success: 404, message: "User not found"})
        console.log({user})
        const newNote = new Notes({
            text,
            userId : user._id,
        })

        await newNote.save();
        res.status(200).json({success: 200, data : newNote});
    } catch (error) {
        res.status(500).json({success : 500, message : `Error creating a note${error}` });
    }
}

async function getNote(req, res){
    try {
        const note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).json({message : "Note not found" });
        }
        res.json(note);
    } catch (error) {
        res.status(500).json({message : `Error fetching the note : ${error}`});
    }
}

async function getAllNotes(req, res){

}
async function updateNotes(req, res){

}
async function deleteNotes(req, res){

}

module.exports={
    createNote,
    getNote,
    getAllNotes,
    updateNotes,
    deleteNotes,
}
