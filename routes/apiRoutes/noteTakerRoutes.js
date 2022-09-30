// define router: allows us to declare routes in any file as long as using the proper middleware. Can not use "app" because server.js is using it
const router = require('express').Router();
const fs = require('fs');

// importing db.json() 
const db = require('../../db/db.json'); 

// import note Functions from buildNote
const { createNote, deleteNote } = require('../../lib/buildNote');

// import unqiue ID 
const uniqid = require('uniqid'); 

// get notes and read db.json and returns all saved notes as json
router.get('/notes', (req, res) => {
    fs.readFile('../../db/db.json', "utf-8", (err, data) => {
        let newDB = db;
        console.log("newDB", newDB);
        res.json(newDB);
    })
   
})


// receives a new note to save on request body, and add to json file
router.post('/notes', (req, res) => {
    
    // note Object to format new note 
    const noteToAdd = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(),
   }
   // assign createNote function to variable and send it back to db.json
    let newNote = createNote(noteToAdd, db);
    console.log(newNote);
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    // take in the note id of deleted item and remove from json file
    deleteNote(db, req.params.id);
    console.log("id",req.params.id);
    console.log("current db",db);
    res.json(db);
    
})


// exports router
module.exports = router;