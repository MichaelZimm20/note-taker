const fs = require('fs');
const path = require('path');


// function to create new note and add it to db json file
function createNote(body, noteArray) {
     const newNote = body;
     console.log(noteArray);
     noteArray.push(newNote);
     

     //write to file 
     fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray , null, 2)
     );

     //return finished code to post route for response 
    return newNote;
}



// function to delete note and remove it to db json file
function deleteNote(noteArray, id) {
    // assigned note array to new variable
    const allNotes = (noteArray);
    console.log("allnotes", allNotes);
    // filtered out notes that were not deleted
    const filteredNotes = allNotes.filter(note => note.id != id)

    console.log("filtedNotes", filteredNotes);
    console.log(id);

    //wrote the non-deleted notes back to array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(filteredNotes, null, 2)
    );

   
}



// exports functions
module.exports = {
    createNote,
    deleteNote
};