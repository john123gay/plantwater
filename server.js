const express = require("express");
const app = express();
const PORT =  3001;
var logger = require("morgan");
// Use morgan logger for logging requests
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});