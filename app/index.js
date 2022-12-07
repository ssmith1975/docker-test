const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));


app.get('/', (req, res) => {
  var test = process.env.MY_KEY || 'no key'
  console.log('MY_KEY: ', test)
  res.sendFile(__dirname + '/index.html')
});

var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

