/** 
 * Backend for Conways Game of Life
 * MIT License
 * Copyright 2018 by Benjamin Macher
 */

// DEPENDENCIES
const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors' );
const compression  = require('compression');
const genGenerator = require('./bin/cgof-gen-generator');

// INIT WEBSERVER
var app = express();

// MIDDLEWARE
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( compression() );

// ROUTES
app.use( '/test', express.static( path.join( __dirname, 'test' )));
app.use( express.static( path.join( __dirname, 'public/angular' )));

// REST INTERFACE
app.post( '/cgof/next-gen', ( req, res ) => {
  const oldGeneration = req.body;
  // calculate new stats
  const newGeneration = genGenerator.createNextGeneration( oldGeneration );
  
  // send new generation
  res.json( newGeneration );
});

// PUBLISH ANGULAR APP
app.get( '*', (req, res) => {
  res.sendFile( __dirname + '/public/angular/index.html' ); 
});

// START WEBSERVER
app.listen( 3000, () => {
  console.log( 'Webserver listening on port 3000.' );
});