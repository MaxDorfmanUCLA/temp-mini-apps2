var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

///Users/maxdorfman/Documents/hrg/temp-mini-apps2/challenge_3/images/oie_GZOYavvYZoMn.png

var app = express();
app.use(express.static(path.join(__dirname, '/client/dist')));
console.log(__dirname);
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));


app.listen(8080, function(){
    console.log('Listening on port 8080...');
})

app.get('/', function(req,res) {
    res.status(200)
})

//HISTORY:
//https://api.coindesk.com/v1/bpi/historical/close.json   ?start=2013-09-01&end=2013-09-05

//current price:
//https://api.coindesk.com/v1/bpi/currentprice.json