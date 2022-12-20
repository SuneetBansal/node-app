const express = require('express');
const http = require('http');
const cors = require('cors');
const parser = require('body-parser');
const busboy = require('connect-busboy');


const app = express();
const server = http.createServer(app);

app.use(parser.urlencoded({
    extended: true
}));

app.use(busboy());
app.use(parser.json());

app.get('/ping', cors(), (req, res) => {
    res.send(JSON.stringify({
        result: true
    }));
});


server.listen(process.env.PORT || 9999, () => {
    console.log(`Server started at port: 9999`);
});