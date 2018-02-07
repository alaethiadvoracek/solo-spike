const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));


const port = process.env.PORT || 5000;
//Server Listener
app.listen(port, function(){
    console.log('server running on: ', port);
  }); // end spin up server