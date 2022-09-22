// express package 
const express = require('express');
const apiRoutes =  require('./routes/apiRoutes');

// sets environment for Heroku, if not use default port 3001
const PORT = process.env.PORT || 3001;

// instantiate/creating the server 
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//express to listen and start server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });