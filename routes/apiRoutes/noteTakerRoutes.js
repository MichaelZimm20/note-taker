// define router: allows us to declare routes in any file as long as using the proper middleware. Can not use "app" because server.js is using it
const router = require('express').Router();

// importing db.json() 
const db = require('../../db/db.json'); 

// import note Functions from buildNote
const { createNote, deleteNote } = require('../../lib/buildNote');

// import unqiue ID 
const uniqid = require('uniqid'); 

// get notes and read db.json and returns all saved notes as json
router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
})


// receives a new note to save on request body, and add to json file
router.post('/notes', (req, res) => {
    
    // note Object to format new note 
    const noteToAdd = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(),
   }
    let newNote = createNote(noteToAdd, db);
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, db);
    console.log(req.params.id);
    console.log(db);
    res.json(db);
})


// exports router
module.exports = router;