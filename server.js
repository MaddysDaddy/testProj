const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;

// Create the app
const app = express();

// Setup body parser
app.use(parser.urlencoded({
  extended: true
}));


// point at app dist folder
app.use(express.static(path.resolve('dist/testProj')));


// setup hosting
app.listen(port, () => console.log(`Listening on port ${port}`));
