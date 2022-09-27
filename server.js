// express package 
const express = require('express');
const apiRoutes =  require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// sets environment for Heroku, if not use default port 3001
const PORT = process.env.PORT || 3001;

// instantiate/creating the server 
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//middleware 
// provided a file path to "public" folder, then instructed the server to make these files static resources. all files can be accessed without having a specific server endpoint.
app.use(express.static('public')); 

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//express to listen and start server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });