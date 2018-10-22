var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', function sog(req,res) {
    res.render('/', {searchInput : req.body.searchInput});
})

function companyByName(sog) {
let options = {
  url: "https://cvrapi.dk/api?search=" + encodeURI(sog) + "&country=DK",
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    let info = JSON.parse(body);
    console.log(info.vat + " Stars");
    console.log(info.name + " Forks");
  }
}

request(options, callback);

} 

// serve static files from template
app.use(express.static(__dirname + '/'));

app.listen(3000, function () {
    console.log('Dev app listening on port 3000!');
}); 
exports.returnByName = companyByName;
