var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');



var app = express();
app.use(express.static(path.join(__dirname, './client/src/index.html')));
console.log(__dirname);
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));


app.listen(4000, function(){
    console.log('Listening on port 4000...');
})


app.get('/', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

