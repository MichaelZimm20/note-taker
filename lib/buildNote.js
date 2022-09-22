const fs = require('fs');
const path = require('path');


// function to create new note and add it to db json file
function createNote(body, noteArray) {
     const newNote = body;
     console.log(noteArray);
     noteArray.notes.push(newNote);
     

     //write to file 
     fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
     );

     //return finished code to post route for response 
    return newNote;
}

// function to delete note and remove it to db json file
function deleteNote(noteArray, id) {

}



// exports functions
module.exports = {
    createNote,
    deleteNote
};