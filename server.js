const express = require('express');
const path = require('path');
const cors = require('cors');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(cors());


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});
