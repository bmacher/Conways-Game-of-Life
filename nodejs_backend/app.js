/** 
 * Backend for Conways Game of Life
 * MIT License
 * Copyright 2018 by Benjamin Macher
 */

// DEPENDENCIES
const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors       = require( 'cors' );
const helpers    = require( './bin/_helpers' );

// INIT WEBSERVER and enable CORS
var app = express();
app.use(cors());

// MIDDLEWARE
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.use( '/test', express.static( './test' ));

// ROUTES
app.get( '/', ( req, res ) => {
  // load front end later on
});

// calc next generation array -> array
app.post( '/cgof/next-gen', ( req, res ) => {
  // calculate new stats
  const newGeneration = helpers.createNextGeneration( req.body );
  
  // send new generation
  res.send( newGeneration );
});

// START WEBSERVER
app.listen( 3000, () => {
  console.log( 'Webserver listening on port 3000.' );
});