var express = require('express');
var app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('dist'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));



