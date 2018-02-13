var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var cors = require( 'cors' );

var app = express();

// ENABLE CORS
app.use(cors());

// MIDDLEWARE
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.use('/rest_test', express.static('rest_test'));

// ROUTES
app.get( '/', ( req, res ) => {
  // load front end later on
});

// calc next generation
app.post( '/cgof/next-gen', ( reg, res ) => {
  reg.body['1'] = [1,1,1,1,1];
  res.send( reg.body );
  console.log( reg.body );
});

// START app
app.listen( 3000, () => {
  console.log( 'app listening on port 3000.' );
});