const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    text: {
        type : String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
    },
    createdAt : {
        type: String,
        default : new Date().toISOString(),
    }
})

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;