const express = require('express');
const port = process.env.PORT || 80;

const app = express();

app.use(express.static('./public'));

app.listen(port);
console.log('Express app started on port ' + port);