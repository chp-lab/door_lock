var express = require('express');
var app = express();
const PORT = process.env.PORT || 80;
const path = __dirname;

app.use(express.static('dist'));

/*
app.get('/HomePage', function (req,res) {
  res.sendFile(path + "/dist/" + "index.html");
});
*/

app.get('/*', function (req,res) {
  res.sendFile(path + "/dist/" + "index.html");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
