// express package 
const express = require('express');

// sets environment for Heroku, if not use default port 3001
const PORT = process.env.PORT || 3001;

// instantiate/creating the server 
const app = express();



//express to listen and start server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });