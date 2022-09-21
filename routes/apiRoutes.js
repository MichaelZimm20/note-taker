// define router: allows us to declare routes in any file as long as using the proper middleware. Can not use "app" because server.js is using it
const router = require('express').Router();

// importing db.json()
const db = require('../../db/db.json'); 

// get notes and read db.json and returns all saved notes as json
router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
})



router.post('/notes', (req, res) => {
    
})