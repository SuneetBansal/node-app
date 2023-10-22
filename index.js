const express = require('express');
const http = require('http');
const cors = require('cors');
const parser = require('body-parser');
const busboy = require('connect-busboy');
console.log('asas');


var v = 'asasasasas';

function abc () {
    for (var i=0; i <10; i++) {
        for (var g=0; g < 10; g++) {
            console.log('asasasasas');
        }
    }
}

const app = express();
const server = http.createServer(app);

app.use(parser.urlencoded({
    extended: true
}));

app.use(busboy());
app.use(parser.json());

app.get('/ping', cors(), (req, res) => {
    res.send(JSON.stringify({
        result: false
    }));
});


server.listen(process.env.PORT || 9999, () => {
    console.log(`Server started at port: 9999`);
});
